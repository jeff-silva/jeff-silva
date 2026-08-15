# Decorator (Decorador / Wrapper)

## 📌 O que é?
O **Decorator** é um padrão estrutural que permite anexar novos comportamentos a objetos colocando-os dentro de objetos "envoltórios" (wrappers) especiais que contêm esses comportamentos extras.

Ele é uma excelente alternativa ao uso excessivo de herança. Em vez de criar classes filhas para cada variação comportamental, você engole a classe mãe como uma "camada de cebola".

## 🎯 Quando usar?
- Quando você precisa adicionar responsabilidades extras a um objeto específico em tempo de execução, sem afetar o código de outros objetos da mesma classe.
- É absurdamente útil no Laravel (e PHP moderno) para resolver o **Padrão de Repositório (Repository Pattern)**. Exemplo clássico: Adicionar Cache a um Repositório sem sujar a classe original de persistência. Pode ser visto como uma forte analogia conceitual aos *Middlewares* HTTP.

---

## 💻 Exemplo Prático (Laravel / PHP)
Vamos decorar uma classe de Repositório de Usuários (`UserRepository`) para adicionar camadas de Cache e de Log sem colocar nenhuma gota desse código na classe original que faz o SELECT no banco.

### 1. A Interface Base
```php
interface UserRepositoryInterface {
    public function findById(int $id): array;
}
```

### 2. O Componente Concreto (A implementação Real)
Este cara apenas vai lá no banco de dados. Faz uma única coisa (SRP puro).
```php
class UserRepository implements UserRepositoryInterface {
    public function findById(int $id): array {
        \Log::debug("SELECT * FROM users WHERE id = {$id}"); // Lógica pesada
        // DB::table('users')->find($id);
        return ['id' => $id, 'name' => 'Jeff Silva']; 
    }
}
```

### 3. O Decorator Base (Opcional, mas limpa o código)
Ele também implementa a mesma interface, mas atua apenas como um passador de bola (`wrapper`) por padrão.
```php
abstract class UserRepositoryDecorator implements UserRepositoryInterface {
    protected UserRepositoryInterface $wrapper;

    public function __construct(UserRepositoryInterface $wrapper) {
        $this->wrapper = $wrapper; // A referência ao objeto engolido
    }

    public function findById(int $id): array {
        return $this->wrapper->findById($id);
    }
}
```

### 4. Os Decorators Concretos
Agora estendemos o comportamento! Vamos injetar o CACHE do Laravel.
```php
use Illuminate\Support\Facades\Cache;

class UserCacheDecorator extends UserRepositoryDecorator {
    
    public function findById(int $id): array {
        // Comportamento adicionado ANTES de chamar o core:
        // Interceptamos a chamada para verificar o cache
        return Cache::remember("user_{$id}", 3600, function () use ($id) {
            
            // Se não estiver no cache, acionamos o "passador de bola" 
            // que fará o objeto real trabalhar e nós salvaremos o retorno!
            return parent::findById($id);
        });
    }
}
```

### 5. O Uso no Laravel (Injeção de Dependência)
Você amarra os fios no Service Container. Se quiser buscar o usuário puro, você injeta o `UserRepository`. Se quiser blindar com Cache, você envolve ele no Decorator.

```php
namespace App\Providers;

class RepositoryServiceProvider extends ServiceProvider {
    public function register() {
        $this->app->bind(UserRepositoryInterface::class, function () {
            
            $repositorioBase = new UserRepository();
            
            // Aqui enrolamos o repósitório base com a funcionalidade de Cache!
            $repositorioComCache = new UserCacheDecorator($repositorioBase);
            
            // Você pode fazer uma cebola infinita de decorators aqui, 
            // adicionando Logging, Permissões, etc, um engolindo o outro.
            // $repositorioComTudo = new UserLogDecorator($repositorioComCache);
            
            return $repositorioComCache;
        });
    }
}

// Controller consumindo de forma invisível
class ProfileController extends Controller {
    public function show(int $id, UserRepositoryInterface $userRepo) {
        // A primeira vez vai no banco, as próximas baterão e voltarão direto no CacheDecorator!
        $user = $userRepo->findById($id); 
        return response()->json($user);
    }
}
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Composição Flexível em Runtime:** Diferente da Herança (que você não consegue mudar quando o código tá rodando), o Decorator permite que você ligue e desligue "wrappers" (ex: não usar cache se for ambiente de testes).
- **✅ Princípio de Responsabilidade Única (SRP):** Mantém sua classe base limpa focada em Banco de Dados, enquanto o Cache fica em outra classe focada só em Cache.
- **❌ Difícil de Descascar a Cebola:** Uma vez que o objeto foi embrulhado em 5 camadas diferentes de decorators instanciados, tentar remover um comportamento do meio da pilha via código é algo caótico.
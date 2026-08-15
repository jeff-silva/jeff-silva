# Singleton (Padrão de Instância Única)

## 📌 O que é?
O **Singleton** é um padrão de projeto criacional que garante que uma classe tenha apenas **uma única instância** em todo o ciclo de vida da aplicação (ou durante o request, no contexto do PHP), ao mesmo tempo que fornece um ponto de acesso global para essa instância.

## 🎯 Quando usar?
- Quando você precisa de um controle mais rigoroso sobre o que seria uma "variável global".
- Para gerenciar o acesso a um recurso altamente compartilhado onde criar múltiplas instâncias seria um gargalo de memória, de processamento ou corromperia o estado do sistema (ex: uma pool de conexões com banco de dados, um File Logger ou configurações de runtime).

---

## 💻 Exemplo Prático (Laravel / PHP)

Historicamente, o Singleton "clássico" exige muito código manual e hoje é frequentemente tratado como um *anti-pattern* (ver Desvantagens). A solução moderna para o PHP é continuar tendo instâncias únicas, mas delegar a responsabilidade de criá-las para a **Injeção de Dependência (Service Container)**.

Abaixo, mostramos a forma raiz (pura) e a forma profissional (via Laravel).

### 1. Implementação Pura no PHP (Singleton Clássico)
Para criar um Singleton puro, o seu principal objetivo é "trancar" a classe, proibindo qualquer desenvolvedor de dar um `new` nela.

```php
class DatabaseConnection {
    // A instância única é guardada em uma propriedade estática privada
    private static ?DatabaseConnection $instance = null;

    // 1. O construtor DEVE ser privado para evitar chamadas com "new"
    private function __construct() {
        echo "Abrindo conexão pesada com o Banco de Dados...\n";
    }

    // 2. Os métodos mágicos de clonagem e desserialização DEVEM ser bloqueados
    private function __clone() {}
    public function __wakeup() {
        throw new \Exception("Não é permitido desserializar um Singleton.");
    }

    // 3. O método estático de acesso global que todos vão usar
    public static function getInstance(): DatabaseConnection {
        if (self::$instance === null) {
            self::$instance = new DatabaseConnection();
        }
        return self::$instance;
    }

    public function query(string $sql) {
        echo "Executando: {$sql}\n";
    }
}
```

**Uso:**
```php
// $db = new DatabaseConnection(); // ERRO! Construtor é privado

$db1 = DatabaseConnection::getInstance(); // Exibe: "Abrindo conexão pesada..."
$db2 = DatabaseConnection::getInstance(); // Não faz nada, já está criado.

// Checando a memória
var_dump($db1 === $db2); // bool(true) - São a exata mesma instância!
```

### 2. O Jeito Laravel (O Singleton no Service Container)
O Laravel nos livra de escrever métodos estáticos, bloquear `__clone` e travar construtores. Você cria uma classe PHP comum e inofensiva e manda o Laravel cuidar para que ela aja como um Singleton.

**A Classe Normal:**
```php
namespace App\Services;

class AppSettingsService {
    public string $theme = 'dark';
    
    public function __construct() {
        // Busca as configurações globais de um cache ou banco de dados
    }
}
```

**Registrando como Singleton (Em um ServiceProvider):**
```php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\AppSettingsService;

class AppServiceProvider extends ServiceProvider {
    
    public function register() {
        // A mágica acontece aqui! O Laravel assume a bronca de só dar 'new' uma vez.
        $this->app->singleton(AppSettingsService::class, function ($app) {
            return new AppSettingsService();
        });
    }
}
```

**Uso (O Laravel resolve as instâncias por você):**
```php
namespace App\Http\Controllers;

use App\Services\AppSettingsService;

class ThemeController extends Controller {
    
    public function update(AppSettingsService $settings) {
        $settings->theme = 'light';
        // Salva, etc...
    }
    
    public function show(AppSettingsService $settings) {
        // Se a lógica passar por aqui no mesmo ciclo após o update,
        // $settings->theme será 'light'. É a mesmíssima instância de memória!
        return response()->json(['theme' => $settings->theme]);
    }
}
```

---

## ✅ Vantagens
1. **Controle Estrito de Instância:** Você tem certeza matemática de que há apenas uma instância de uma classe rodando na memória.
2. **Acesso Global Prático:** Substitui variáveis globais arriscadas por uma arquitetura um pouco mais controlada.
3. **Inicialização Sob Demanda (Lazy Initialization):** A classe singleton só gasta recurso (só é criada) quando é chamada pela primeira vez.

## ❌ Desvantagens (O Lado Sombrio)
- **O Terror dos Testes Unitários:** Como o Singleton clássico mantém o estado da memória global, se o "Teste A" alterar uma variável no Singleton, o "Teste B" pode quebrar porque recebeu o Singleton com o estado "sujo". Além disso, é absurdamente difícil fazer o Mock de chamadas estáticas `Classe::getInstance()`.
- **Acoplamento Oculto:** Fazer `Classe::getInstance()` no meio do escopo esconde a dependência da sua classe, dificultando a leitura de quem chama (ao invés de declarar abertamente a necessidade no `__construct` com injeção).
- **Violação do Princípio de Responsabilidade Única (SRP):** A classe herda uma segunda responsabilidade: além da sua regra de negócio, ela precisa se preocupar em gerenciar o seu próprio ciclo de criação.

> **💡 Conclusão Sênior:** Evite criar Singletons "clássicos" (com métodos estáticos e construtores privados) no desenvolvimento PHP moderno. Delegue sempre essa tarefa para o **Service Container** do framework (`App::singleton`). Isso mantém a sua classe "burra", super testável (você pode injetar mocks nela sem estresse) e respeita a Injeção de Dependência.
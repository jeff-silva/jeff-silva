# Chain of Responsibility (Cadeia de Responsabilidade)

## 📌 O que é?
O **Chain of Responsibility** é um padrão comportamental que permite passar pedidos por uma corrente de *handlers* (processadores). Ao receber um pedido, cada handler decide se processa o pedido, se o rejeita, ou se passa para o próximo handler da corrente.

## 🎯 Quando usar?
- Quando um sistema precisa processar dados através de várias camadas de validação, formatação ou segurança em sequência.
- O maior e mais claro exemplo desse padrão em todo o ecossistema Laravel são os **Middlewares HTTP**. Cada middleware na cadeia pode abortar a request ou passá-la adiante via `$next($request)`.

---

## 💻 Exemplo Prático (Laravel / PHP)
Vamos recriar a essência de um Middleware (que é um Handler da Cadeia) verificando Autenticação e depois Autorização.

### 1. A Interface do Handler e Classe Abstrata
```php
abstract class MiddlewareHandler {
    protected ?MiddlewareHandler $next = null;

    public function setNext(MiddlewareHandler $next): MiddlewareHandler {
        $this->next = $next;
        return $next; // Retorna para permitir chaining ($a->setNext($b)->setNext($c))
    }

    public function handle(array $request) {
        if ($this->next) {
            return $this->next->handle($request);
        }
        return "Requisição Finalizada com Sucesso!";
    }
}
```

### 2. Os Elos da Cadeia (Handlers Concretos)
```php
class AuthMiddleware extends MiddlewareHandler {
    public function handle(array $request) {
        if (!isset($request['token'])) {
            return "Erro: Usuário não autenticado."; // Quebra a corrente!
        }
        \Log::info("Usuário Autenticado. Passando adiante...");
        return parent::handle($request);
    }
}

class RoleMiddleware extends MiddlewareHandler {
    public function handle(array $request) {
        if ($request['role'] !== 'admin') {
            return "Erro: Permissão negada."; // Quebra a corrente!
        }
        \Log::info("Admin verificado. Passando adiante...");
        return parent::handle($request);
    }
}
```

### 3. O Cliente Montando e Usando a Cadeia
```php
$auth = new AuthMiddleware();
$role = new RoleMiddleware();

// Montando a corrente: Auth -> Role
$auth->setNext($role);

$requestAdmin = ['token' => '123', 'role' => 'admin'];
echo $auth->handle($requestAdmin); 
// Autenticado -> Verificado -> "Requisição Finalizada com Sucesso!"

$requestUser = ['token' => '123', 'role' => 'user'];
echo $auth->handle($requestUser); 
// Autenticado -> "Erro: Permissão negada."
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ SRP e OCP:** Desacopla a classe que invoca a operação das classes que realizam a operação. Novas validações podem ser adicionadas sem alterar o código existente.
- **✅ Flexibilidade de Ordem:** A ordem da corrente pode ser mudada em tempo de execução livremente.
- **❌ Risco de Loop Infinito ou Drop:** Se a cadeia for mal configurada ou o último elo esquecer de tratar a requisição, o pedido pode se perder no vácuo.
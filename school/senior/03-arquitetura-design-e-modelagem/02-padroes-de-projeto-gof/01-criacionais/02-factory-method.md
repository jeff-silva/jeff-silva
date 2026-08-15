# Factory Method (Método Fábrica)

## 📌 O que é?
O **Factory Method** é um padrão de projeto criacional que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

Diferente do Abstract Factory (que cria famílias inteiras de produtos), o Factory Method foca na criação de **apenas um produto** por vez, delegando a lógica de "qual produto exato instanciar" para as subclasses. É o que o Laravel usa por debaixo dos panos em recursos como o `LogManager` ou `DatabaseManager` (os famosos Drivers).

## 🎯 Quando usar?
- Quando você tem um componente que precisa trabalhar com diferentes "drivers" ou "provedores".
- Quando a lógica de criação de um objeto é complexa e precisa ser separada da regra de negócio principal.

---

## 💻 Exemplo Prático (Laravel / PHP)
Vamos imaginar que estamos construindo um sistema de notificações (`Notifier`). Podemos enviar notificações via SMS ou Email. Em vez de entupir nossa classe principal de `if/else`, usamos o Factory Method.

### 1. A Interface do Produto
Ambos os métodos de envio precisam do mesmo contrato.
```php
interface Transport {
    public function send(string $message): void;
}
```

### 2. Produtos Concretos
```php
class EmailTransport implements Transport {
    public function send(string $message): void {
        // Usa a facade Mail do Laravel, por exemplo
        \Log::info("📧 Enviando Email: {$message}");
    }
}

class SmsTransport implements Transport {
    public function send(string $message): void {
        // Integra com a API do Twilio/Zenvia
        \Log::info("📱 Enviando SMS: {$message}");
    }
}
```

### 3. A Classe Criadora (A Fábrica Abstrata)
Aqui definimos o **Factory Method** (`createTransport()`). A classe base pode até já ter lógica que usa o objeto criado.

```php
abstract class Notifier {
    // O Factory Method!
    abstract protected function createTransport(): Transport;

    // Regra de negócio que usa o produto
    public function notifyUser(string $message): void {
        $transport = $this->createTransport();
        
        // Pode ter regras antes de enviar...
        $message = "[Alerta do Sistema] " . $message;
        
        $transport->send($message);
    }
}
```

### 4. Criadores Concretos (Subclasses)
```php
class EmailNotifier extends Notifier {
    protected function createTransport(): Transport {
        return new EmailTransport();
    }
}

class SmsNotifier extends Notifier {
    protected function createTransport(): Transport {
        return new SmsTransport();
    }
}
```

### 5. Uso no Laravel
Você pode ter um Controller que recebe o notificador correto instanciado.

```php
namespace App\Http\Controllers;

class AlertController extends Controller {
    
    public function sendCriticalAlert() {
        // A decisão de qual fábrica usar pode vir de config(), banco ou via request.
        $type = config('alerts.default'); // 'sms' ou 'email'
        
        $notifier = $this->getNotifierFactory($type);
        $notifier->notifyUser("O servidor de banco de dados caiu!");
        
        return response()->json(['status' => 'alerta enviado']);
    }
    
    private function getNotifierFactory(string $type): Notifier {
        if ($type === 'sms') {
            return new SmsNotifier();
        }
        
        return new EmailNotifier();
    }
}
```

> **💡 Dica Laravel:** O Laravel implementa esse padrão o tempo todo na própria arquitetura do framework através do conceito de `Manager` (ex: `AuthManager`, `CacheManager`). O método interno `createDriver()` deles atua exatamente como o nosso Factory Method para construir o driver correto em tempo de execução.

---

## ✅ Vantagens
1. **Desacoplamento Forte:** A classe criadora base (`Notifier`) não sabe quais classes concretas (`EmailTransport` etc) está usando.
2. **Princípio Aberto/Fechado (OCP):** Facilita adicionar novos drivers (ex: `WhatsAppNotifier`) sem tocar no código base do notificador.
3. **Isolamento:** Toda a lógica de configuração complexa de um SMS ou Email fica contida nas subclasses.

## ❌ Desvantagens
- Se você tiver apenas um produto ou a chance de ter um segundo for minúscula, adicionar essa camada extra de abstração só vai complicar seu código desnecessariamente (YAGNI - *You Aren't Gonna Need It*).
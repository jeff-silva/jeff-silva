# Mediator (Mediador)

## 📌 O que é?
O **Mediator** é um padrão comportamental que restringe as comunicações diretas entre objetos e força-os a colaborar através de um objeto mediador. Reduz dependências caóticas transformando um emaranhado de "todos falam com todos" em "todos falam com o Mediador, e ele avisa os outros".

## 🎯 Quando usar?
- Quando várias classes estão fortemente acopladas umas às outras tentando se comunicar (Ex: O botão de formulário precisa desabilitar o input text, que precisa avisar a checkbox de termos de uso). O código fica impossível de reutilizar.
- O Laravel implementa isso lindamente através do **Sistema de Eventos (`Event Dispatcher`)**.

---

## 💻 Exemplo Prático (Laravel / PHP)
Em vez de um formulário enviar um e-mail diretamente e salvar num log e avisar a contabilidade, o controller notifica o Event Dispatcher (O Mediador), e os Listeners reagem.

### 1. Implementação Pura (Chat Room)
O caso clássico em aulas. Os usuários não conhecem as instâncias dos outros usuários diretamente. Eles enviam para a sala.

```php
interface Mediator {
    public function notify(object $sender, string $event, string $data): void;
}

class ChatRoom implements Mediator {
    private array $users = [];

    public function register(User $user) {
        $this->users[] = $user;
    }

    public function notify(object $sender, string $event, string $data): void {
        if ($event === 'message') {
            foreach ($this->users as $u) {
                if ($u !== $sender) { // Não manda de volta pra quem enviou
                    $u->receive($data);
                }
            }
        }
    }
}
```

Os usuários (Componentes) só conhecem o Mediador:
```php
class User {
    private Mediator $mediator;
    private string $name;

    public function __construct(Mediator $mediator, string $name) {
        $this->mediator = $mediator;
        $this->name = $name;
    }

    public function send(string $message): void {
        // Ele não fala com os outros usuários, ele envia pro Mediador!
        $this->mediator->notify($this, 'message', "{$this->name} diz: {$message}");
    }

    public function receive(string $message): void {
        echo "{$this->name} recebeu: {$message}\n";
    }
}
```

### 2. O Mediator no Laravel (Events & Listeners)
No Laravel, nós não precisamos construir a sala de chat ou o mediador. O framework já nos entrega o `Event Dispatcher` (A Facade `Event::` ou helper `event()`).

```php
// O Controller não fala com o Serviço de Email, nem com o Serviço de NF.
// Ele apenas fala com o Mediador (event helper).
class OrderController extends Controller {
    public function store() {
        $order = Order::create([...]);
        
        // Dispara o Evento pro Mediador do Laravel
        event(new OrderCreated($order)); 
        
        return response()->json($order);
    }
}

// Os Listeners estão inscritos no Mediador (EventServiceProvider)
class SendOrderConfirmationEmail {
    public function handle(OrderCreated $event) {
        // Envia o email...
    }
}

class GenerateInvoice {
    public function handle(OrderCreated $event) {
        // Gera a NF...
    }
}
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Desacoplamento:** Componentes não sabem nada uns dos outros, só conhecem o mediador (Single Responsibility Principle).
- **✅ Reutilização:** Componentes individuais podem ser extraídos para outros projetos facilmente porque não carregam um rastro de dependências acopladas.
- **❌ God Object:** O próprio Mediador pode se transformar num Monstro / Deus se concentrar lógica de negócio demais nele mesmo (ao invés de apenas rotear as mensagens). No Laravel, os eventos mitigam isso separando os Listeners em suas próprias classes isoladas.
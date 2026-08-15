# Observer (Observador)

## 📌 O que é?
O **Observer** é um padrão comportamental que estabelece uma relação de "um-para-muitos" entre objetos. Ele permite definir um mecanismo de assinatura (Publisher-Subscriber) para notificar vários objetos (Os Observadores) sobre quaisquer eventos ou mudanças de estado que aconteçam no objeto que eles estão observando (O Sujeito / Publisher).

## 🎯 Quando usar?
- Quando a mudança de estado em um objeto precisar causar mudanças ou reações em dezenas de outros objetos e você não quiser acoplá-los rigidamente (`$this->mail->send()`, `$this->log->write()`).
- O **Eloquent Observers** do Laravel é a implementação definitiva desse padrão. Ele escuta os eventos nativos do model (`creating`, `created`, `updating`, `deleted`) e dispara as classes observadoras automaticamente!

---

## 💻 Exemplo Prático (Laravel / PHP)

Vamos criar um Observer nativo usando a SPL (Standard PHP Library) e depois mostrar a abordagem do Laravel. O PHP possui as interfaces `SplSubject` e `SplObserver` nativas da linguagem.

### 1. Padrão Nativo PHP (`SplSubject` e `SplObserver`)

```php
// O Sujeito (Quem lança a novidade)
class Newsletter implements \SplSubject {
    private \SplObjectStorage $observers;
    public string $latestArticle;

    public function __construct() {
        $this->observers = new \SplObjectStorage();
    }

    public function attach(\SplObserver $observer): void {
        $this->observers->attach($observer);
    }

    public function detach(\SplObserver $observer): void {
        $this->observers->detach($observer);
    }

    public function notify(): void {
        foreach ($this->observers as $observer) {
            $observer->update($this);
        }
    }

    // Regra de Negócio!
    public function publishArticle(string $title): void {
        $this->latestArticle = $title;
        $this->notify(); // Grita pra todos os inscritos
    }
}

// O Observador (Quem escuta)
class EmailSubscriber implements \SplObserver {
    private string $email;
    public function __construct(string $email) { $this->email = $email; }

    public function update(\SplSubject $subject): void {
        echo "Mandando Email para {$this->email} sobre: {$subject->latestArticle}\n";
    }
}

// USO:
$newsletter = new Newsletter();
$newsletter->attach(new EmailSubscriber('jeff@example.com'));
$newsletter->attach(new EmailSubscriber('maria@example.com'));

$newsletter->publishArticle('Padrões de Projeto em PHP!'); 
// Manda os dois emails automaticamente.
```

### 2. O Observer no Laravel (Eloquent)
O Laravel facilita a vida e elimina todo aquele "attach" manual escondendo a sujeira dentro do `EventServiceProvider` ou da inicialização do Model.

```php
// 1. O Sujeito (O Model User)
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class User extends Model {
    // ...
}

// 2. O Observer (O Observador focado naquele Model)
namespace App\Observers;
use App\Models\User;

class UserObserver {
    // Método mágico invocado pelo Laravel após o Model ser salvo no BD
    public function created(User $user) {
        \Log::info("Novo usuário registrado com ID: {$user->id}");
        // SendWelcomeEmailJob::dispatch($user);
    }
    
    // Invocado quando o Model é deletado
    public function deleted(User $user) {
        \Log::info("Usuário Deletado e LGPD respeitada: {$user->id}");
    }
}

// 3. Como amarrar (Em um ServiceProvider, ex: AppServiceProvider)
use App\Models\User;
use App\Observers\UserObserver;

public function boot() {
    User::observe(UserObserver::class);
}
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Desacoplamento Absoluto:** O Controller que cria o Usuário não faz ideia de que o email está sendo enviado ou de que o Log está sendo escrito. O código dele fica de 1 linha: `User::create([...])`.
- **✅ Princípio Aberto/Fechado (OCP):** Podemos adicionar novos Observadores sem sequer tocar no código do Sujeito original.
- **❌ Fluxo Mágico e Sombrio:** Abusar de Observers pode tornar o debug um inferno (Anti-pattern). O programador olha pro controller e se pergunta: "Onde diabos esse email está sendo disparado?". A ordem de notificação também é aleatória. Para eventos críticos, muitos arquitetos preferem o uso do padrão Mediator/Event explícito direto no Controller.
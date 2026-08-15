# Bridge (Ponte)

## 📌 O que é?
O **Bridge** é um padrão estrutural que divide uma classe grande (ou um grupo de classes intimamente ligadas) em duas hierarquias separadas — **Abstração** (A interface de alto nível) e **Implementação** (A plataforma de baixo nível) — que podem ser desenvolvidas independentemente uma da outra.

## 🎯 Quando usar?
- Quando você quer evitar uma "explosão cartesiana" de subclasses. Exemplo: Você tem a classe `Notificacao` e subclasses `Alerta` e `Aviso`. Se você adicionar os meios de envio (`SMS` e `Email`), você precisará criar `AlertaSms`, `AlertaEmail`, `AvisoSms`, `AvisoEmail`. Isso sai de controle rápido.
- Quando você precisa trocar a implementação em tempo de execução.

---

## 💻 Exemplo Prático (Laravel / PHP)
Vamos resolver exatamente o problema citado acima, separando o **Tipo da Notificação** do **Canal de Envio**.

### 1. A Implementação (Os Canais / Plataformas)
```php
interface SenderInterface {
    public function sendMessage(string $text): void;
}

class SmsSender implements SenderInterface {
    public function sendMessage(string $text): void {
        \Log::info("Enviando via SMS (Twilio): {$text}");
    }
}

class EmailSender implements SenderInterface {
    public function sendMessage(string $text): void {
        \Log::info("Enviando via Email (SMTP): {$text}");
    }
}
```

### 2. A Abstração (Os Tipos de Notificação)
A Abstração delega o envio real para a Implementação através da propriedade `$sender`. Isso é a "Ponte".

```php
abstract class Notification {
    protected SenderInterface $sender;

    public function __construct(SenderInterface $sender) {
        $this->sender = $sender;
    }

    abstract public function notify(string $message): void;
}

// Variação 1
class AlertNotification extends Notification {
    public function notify(string $message): void {
        $this->sender->sendMessage("URGENTE/ALERTA: " . strtoupper($message));
    }
}

// Variação 2
class InfoNotification extends Notification {
    public function notify(string $message): void {
        $this->sender->sendMessage("Info: " . $message);
    }
}
```

### 3. O Uso (Mix and Match)
Agora nós podemos plugar qualquer "Notificação" em qualquer "Canal" sem precisar de classes mescladas como `AlertSmsNotification`.

```php
// No Laravel, você pode instanciar as coisas assim:
$smsSender = new SmsSender();
$emailSender = new EmailSender();

$alertaCritico = new AlertNotification($smsSender);
$alertaCritico->notify("O banco de dados caiu!"); 
// Output: Enviando via SMS (Twilio): URGENTE/ALERTA: O BANCO DE DADOS CAIU!

$avisoSimples = new InfoNotification($emailSender);
$avisoSimples->notify("O backup foi gerado com sucesso.");
// Output: Enviando via Email (SMTP): Info: O backup foi gerado com sucesso.
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Desenvolvimento Independente:** Você pode mexer no código dos Canais de Envio sem medo de quebrar as classes de Tipos de Notificação.
- **✅ OCP e SRP:** Foca em abstrações de alto nível separadas das lógicas de plataforma.
- **❌ Pode ser complexo demais:** Exige um bom entendimento arquitetural inicial e pode complicar o código em casos onde uma herança simples resolveria o problema provisoriamente.
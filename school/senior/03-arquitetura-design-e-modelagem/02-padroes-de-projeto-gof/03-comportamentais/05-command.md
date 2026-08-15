# Command (Comando)

## 📌 O que é?
O **Command** é um padrão comportamental que transforma um pedido/requisição em um objeto autônomo. Essa transformação permite parametrizar métodos com diferentes pedidos, enfileirar pedidos, agendá-los ou suportar operações que podem ser desfeitas (Undo).

## 🎯 Quando usar?
- Quando você precisa enfileirar lógicas assíncronas em Background (Ex: As famosas **Jobs / Queues** do Laravel).
- Quando você precisa de ferramentas de CLI no console (Ex: Os **Artisan Commands**).
- Quando precisar implementar operações reversíveis (ctrl+z).

---

## 💻 Exemplo Prático (Laravel / PHP)

No Laravel, o **Padrão Command** é a essência do sistema de Filas (`php artisan make:job ProcessPaymentJob`). O framework transforma a intenção "Processar Pagamento" em um objeto serializável que viaja até o Redis, espera na fila e depois é executado em outro servidor.

Vamos ver a implementação pura focada num cenário clássico do padrão: Ações reversíveis num editor de texto.

### 1. A Interface Command
Todo comando precisa de um método de execução (no Laravel, ele se chama `handle()`). Adicionamos o `undo()` para nosso exemplo.
```php
interface Command {
    public function execute(): void;
    public function undo(): void;
}
```

### 2. O Receiver (A Lógica de Negócio Real)
A classe que realmente sabe fazer o trabalho.
```php
class Editor {
    public string $text = "";
}
```

### 3. Os Comandos Concretos
Eles encapsulam os parâmetros e a chamada ao Receiver.
```php
class TypeTextCommand implements Command {
    private Editor $editor;
    private string $textToType;
    private int $previousLength;

    public function __construct(Editor $editor, string $text) {
        $this->editor = $editor;
        $this->textToType = $text;
    }

    public function execute(): void {
        $this->previousLength = strlen($this->editor->text);
        $this->editor->text .= $this->textToType;
    }

    public function undo(): void {
        // Restaura a string baseada no tamanho anterior (Ctrl+Z)
        $this->editor->text = substr($this->editor->text, 0, $this->previousLength);
    }
}
```

### 4. O Invoker (Quem dispara)
O botão da interface do usuário que guarda o histórico.
```php
class Application {
    private array $history = [];

    public function executeCommand(Command $command) {
        $command->execute();
        $this->history[] = $command; // Guarda na fila de histórico
    }

    public function undoLast() {
        if (!empty($this->history)) {
            $command = array_pop($this->history);
            $command->undo();
        }
    }
}
```

### 5. Uso
```php
$editor = new Editor();
$app = new Application();

$app->executeCommand(new TypeTextCommand($editor, "Olá "));
$app->executeCommand(new TypeTextCommand($editor, "Mundo!"));
echo $editor->text; // Olá Mundo!

$app->undoLast();
echo $editor->text; // Olá 
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Desacoplamento:** Separa quem invoca a operação de quem sabe como executá-la (Ex: A UI de botões não conhece a lógica do Editor).
- **✅ Recursos Poderosos:** Permite implementar Desfazer/Refazer (Undo/Redo), Macros (cadeia de comandos) e agendamento de Jobs assíncronos via banco/Redis.
- **❌ Código Volumoso:** Você acaba criando uma classe nova minúscula para cada ação individual possível do sistema.
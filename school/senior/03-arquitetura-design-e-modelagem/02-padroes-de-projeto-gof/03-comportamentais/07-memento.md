# Memento (Lembrança)

## 📌 O que é?
O **Memento** é um padrão comportamental que permite capturar e armazenar o estado atual de um objeto para que ele possa ser restaurado (desfeito) mais tarde, sem violar o encapsulamento (ou seja, sem expor as variáveis privadas desse objeto ao mundo exterior).

## 🎯 Quando usar?
- Para implementar recursos de *Desfazer/Refazer (Undo/Redo)*.
- Para salvar "Snapshots" (Fotografias) do estado do objeto.
- No Laravel, o Eloquent usa uma forma de Memento nativamente através do método `$model->getOriginal()`, que guarda o estado exato dos atributos assim que o modelo foi carregado do banco.

---

## 💻 Exemplo Prático (Laravel / PHP)
Vamos criar um rascunho de Artigo (`Article`) que o usuário pode salvar versões e, se quiser, dar um "Ctrl+Z".

### 1. O Originador (A classe que tem o Estado real)
```php
class Article {
    private string $title;
    private string $content;

    public function __construct(string $title, string $content) {
        $this->title = $title;
        $this->content = $content;
    }

    public function setContent(string $content): void {
        $this->content = $content;
    }

    // 🌟 A Mágica! Cria uma fotografia imutável do estado atual
    public function saveToMemento(): ArticleMemento {
        return new ArticleMemento($this->title, $this->content);
    }

    // Restaura o estado lendo a fotografia
    public function restoreFromMemento(ArticleMemento $memento): void {
        $this->title = $memento->getTitle();
        $this->content = $memento->getContent();
    }

    public function print(): void {
        echo "{$this->title} - {$this->content}\n";
    }
}
```

### 2. O Memento (A Fotografia)
A regra de ouro é: O Memento DEVE ser imutável (sem `setters`). Ele só guarda dados.
```php
class ArticleMemento {
    private string $title;
    private string $content;
    private string $date;

    public function __construct(string $title, string $content) {
        $this->title = $title;
        $this->content = $content;
        $this->date = date('Y-m-d H:i:s');
    }

    public function getTitle(): string { return $this->title; }
    public function getContent(): string { return $this->content; }
}
```

### 3. O Caretaker (Zelador / O Histórico)
Ele guarda os mementos. Ele sabe QUANDO salvar e QUANDO restaurar, mas NÃO sabe o que tem dentro da fotografia (encapsulamento respeitado).
```php
class ArticleHistory {
    private array $history = [];

    public function backup(ArticleMemento $memento): void {
        $this->history[] = $memento;
    }

    public function undo(): ?ArticleMemento {
        if (empty($this->history)) return null;
        return array_pop($this->history); // Remove a última fotografia salva
    }
}
```

### 4. O Uso
```php
$article = new Article("Padrões de Projeto", "Introdução...");
$history = new ArticleHistory();

// Salva o primeiro draft
$history->backup($article->saveToMemento());

// Continua editando e erra feio
$article->setContent("Introdução... blablabla apaguei tudo sem querer");
$article->print(); // Padrões de Projeto - Introdução... blablabla apaguei tudo sem querer

// Dá o CTRL+Z !
$article->restoreFromMemento($history->undo());
$article->print(); // Padrões de Projeto - Introdução... (RESTAURADO!)
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Encapsulamento Preservado:** A classe Caretaker armazena o histórico do objeto original sem conhecer os detalhes de implementação dele. O Memento funciona como uma "caixa preta".
- **❌ Consumo de Memória (RAM):** O histórico (Caretaker) pode explodir a memória se ele salvar Mementos gigantescos a cada mínimo caractere digitado (você teria 1.000 cópias quase idênticas do mesmo objeto pesado).
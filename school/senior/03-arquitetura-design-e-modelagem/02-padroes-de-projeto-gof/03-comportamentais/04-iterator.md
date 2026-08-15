# Iterator (Iterador)

## 📌 O que é?
O **Iterator** é um padrão comportamental que permite percorrer elementos de uma coleção (uma lista, uma árvore, etc) sem expor as representações internas da coleção ao cliente (array, stack, hash, etc).

Em PHP, esse padrão é suportado de forma nativa e brilhante pelas interfaces `Iterator` e `IteratorAggregate` da Standard PHP Library (SPL), o que nos permite usar um loop `foreach` comum em cima de Objetos Complexos.

## 🎯 Quando usar?
- Para ocultar a complexidade da navegação em estruturas de dados complexas (como árvores e grafos).
- Quando você precisa percorrer um conjunto de dados muito massivo do banco de dados e não pode carregar tudo num único Array da memória RAM (Ex: **Lazy Collections / Cursors** no Laravel).

---

## 💻 Exemplo Prático (Laravel / PHP)
No Laravel, quando usamos `DB::table('users')->cursor()`, o framework nos devolve um gerador (`LazyCollection`) que implementa o padrão Iterator por debaixo dos panos, mantendo um único registro na memória de cada vez.

Vamos construir o nosso próprio iterador simples usando recursos do PHP.

### 1. Implementando Iterator Nativo
```php
class UserCollection implements \Iterator {
    private array $users = [];
    private int $position = 0;

    public function __construct(array $users) {
        $this->users = $users;
    }

    public function rewind(): void { $this->position = 0; }
    public function current(): mixed { return $this->users[$this->position]; }
    public function key(): mixed { return $this->position; }
    public function next(): void { ++$this->position; }
    public function valid(): bool { return isset($this->users[$this->position]); }
}
```

**Uso:**
```php
$collection = new UserCollection(['Jeff', 'Maria', 'Pedro']);

// O PHP sabe exatamente como consumir esse objeto!
foreach ($collection as $key => $user) {
    echo "{$key}: {$user}\n";
}
```

### 2. O Iterador Moderno (Generators / yield)
Em PHP moderno, raramente precisamos escrever os 5 métodos do `Iterator`. O uso da palavra reservada `yield` (Generator) cria um Iterator automaticamente e resolve problemas pesados de memória!

```php
function getHeavyDataIterator() {
    for ($i = 0; $i < 1000000; $i++) {
        // Pausa a função e entrega UM registro por vez para o foreach
        yield "Registro " . $i; 
    }
}

// Isso NÃO estoura a memória RAM, pois o array de 1 milhão nunca existe por inteiro!
foreach (getHeavyDataIterator() as $registro) {
    // Processa linha por linha...
}
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ SRP:** Limpa o código cliente da lógica de percurso complexa.
- **✅ OCP:** Você pode implementar novas formas de percorrer a coleção (ex: Iterador Reverso, Iterador de Arvore Binária) sem alterar a coleção em si.
- **✅ Salva Vidas de RAM:** Essencial para lidar com Big Data no PHP (usando Yield/Generators).
- **❌ Excesso de Engenharia:** Pode ser *overkill* se a sua aplicação lida apenas com arrays simples.
# Composite (Compositor / Árvore)

## 📌 O que é?
O **Composite** é um padrão estrutural que permite agrupar objetos em estruturas de árvore e trabalhar com essas estruturas como se fossem objetos individuais.

## 🎯 Quando usar?
- Quando o modelo de domínio do seu problema puder ser representado logicamente como uma árvore (ex: objetos compostos por outros objetos menores, que por sua vez contêm outros objetos).
- Quando você quer que o código cliente trate tanto os objetos simples (Folhas) quanto os objetos complexos (Compostos) exatamente da mesma maneira, evitando lógicas do tipo `if is_array()`.

---

## 💻 Exemplo Prático (Laravel / PHP)
Imagine que você tem uma loja virtual. Um pedido (`Order`) é composto de Caixas (`Box`). Uma caixa pode ter Produtos (`Product`) avulsos dentro dela ou até mesmo caixas menores aninhadas. Você precisa calcular o preço total de frete ou o valor total desse pacote gigante.

### 1. A Interface do Componente Comum
Isso permite que a Caixa e o Produto sejam tratados igualmente perante a lei.
```php
interface OrderComponent {
    public function calculatePrice(): float;
}
```

### 2. A Folha (O Produto Simples)
Este é o objeto da ponta da árvore que não tem sub-elementos.
```php
class Product implements OrderComponent {
    private float $price;

    public function __construct(float $price) {
        $this->price = $price;
    }

    // A Folha apenas retorna seu próprio valor
    public function calculatePrice(): float {
        return $this->price;
    }
}
```

### 3. O Composto (A Caixa / Nó)
Este é o objeto complexo que pode conter folhas (Produtos) ou outros compostos (Outras Caixas menores).
```php
class Box implements OrderComponent {
    private array $children = [];

    public function add(OrderComponent $component): void {
        $this->children[] = $component;
    }

    public function calculatePrice(): float {
        $total = 0;
        
        // A mágica do Composite acontece aqui: 
        // A Caixa não sabe (nem se importa) se o child é um Produto ou outra Caixa.
        // Ela apenas delega a responsabilidade chamando o método comum da interface.
        foreach ($this->children as $child) {
            $total += $child->calculatePrice();
        }
        
        // Custos da própria caixa (ex: embalagem)
        return $total + 5.00; 
    }
}
```

### 4. Uso (Controller ou Service)
O código cliente só precisa chamar o método `calculatePrice()` da caixa master. O polimorfismo se encarrega de navegar por toda a árvore (recursão estrutural indireta).

```php
$iphone = new Product(5000.00);
$charger = new Product(200.00);
$cable = new Product(50.00);

$boxPequena = new Box(); // Custa + 5.00
$boxPequena->add($charger);
$boxPequena->add($cable);

$boxGrande = new Box(); // Custa + 5.00
$boxGrande->add($iphone);
$boxGrande->add($boxPequena); // Inserindo um composto dentro de outro composto!

// O cliente lida com a caixa grande como se fosse um único produto básico
echo "Total do Pedido: R$ " . $boxGrande->calculatePrice(); 
// Cálculo Oculto: 5000 (iPhone) + 5 (Box G) + 200 (charger) + 50 (cable) + 5 (Box P)
// Output: Total do Pedido: R$ 5260
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Polimorfismo Absoluto:** Trabalhar com estruturas complexas aninhadas se torna trivial com uma única interface.
- **✅ Princípio Aberto/Fechado (OCP):** Você pode introduzir novos tipos de Folhas ou Caixas no app sem quebrar o código das Caixas existentes.
- **❌ Generalização Demais:** Ao forçar uma interface comum para Folhas e Composites, você pode poluir a interface com métodos como `add()` ou `remove()`, que fazem sentido para a Caixa, mas quebrarão ou retornarão exceções quando chamados na Folha (`Product`), ferindo o Interface Segregation Principle.
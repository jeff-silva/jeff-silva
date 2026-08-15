# Builder (Construtor)

## 📌 O que é?
O **Builder** é um padrão de projeto criacional que permite a você construir objetos complexos passo a passo. Ele permite que você produza diferentes tipos e representações de um objeto usando o mesmo processo de construção.

A essência do padrão é extrair o código de construção da classe do produto (que, se fosse mantido lá, poderia gerar construtores gigantescos e confusos) e movê-lo para objetos separados chamados *builders* (construtores).

## 🎯 Quando usar?
- Para evitar o temido *Telescoping Constructor* — um anti-pattern onde uma classe tem um construtor com muitos parâmetros e a maioria deles é opcional, forçando você a preenchê-los com `null` repetidas vezes (`new User(1, "Jeff", null, null, null, true)`).
- Quando você deseja criar diferentes representações de um mesmo produto (ex: construir o mesmo relatório de dados, mas um no formato CSV e o outro em formato PDF, usando passos muito parecidos).
- Quando o objeto requer um setup muito complexo de dezenas de dependências antes de estar realmente "pronto" para uso.

---

## 💻 Exemplo Prático (Laravel / PHP)
O exemplo mais famoso desse padrão no dia a dia do desenvolvedor PHP/Laravel é, sem dúvidas, o **Query Builder** ou o **Eloquent Builder** (`DB::table('users')->where('id', 1)->orderBy('name')->get()`). 

Mas como construímos o nosso próprio builder do zero? Vamos usar a criação complexa de uma Fatura Fiscal (`Invoice`).

### 1. O Produto Complexo
A nossa classe Fatura. 

```php
class Invoice {
    public $customerName;
    public $items = [];
    public $taxRate = 0;
    public $discount = 0;
    public $isPaid = false;
    
    // O construtor não pede quase nada, as propriedades serão populadas aos poucos.
    public function __construct() {}
}
```

### 2. A Interface do Builder (Opcional, mas recomendado)
Define todas as etapas de construção possíveis.

```php
interface InvoiceBuilderInterface {
    public function setCustomer(string $name): self;
    public function addItem(string $item, float $price): self;
    public function applyTax(float $rate): self;
    public function applyDiscount(float $value): self;
    public function markAsPaid(): self;
    public function getInvoice(): Invoice;
}
```

### 3. O Builder Concreto
A classe responsável por executar cada etapa. O "pulo do gato" é que cada método configurador (setter) retorna `return $this;`. Isso cria a famosa "Interface Fluente" (Method Chaining).

```php
class InvoiceBuilder implements InvoiceBuilderInterface {
    private Invoice $invoice;

    public function __construct() {
        // Inicializa um objeto zerado logo no início
        $this->reset();
    }

    public function reset(): void {
        $this->invoice = new Invoice();
    }

    public function setCustomer(string $name): self {
        $this->invoice->customerName = $name;
        return $this; 
    }

    public function addItem(string $item, float $price): self {
        $this->invoice->items[] = ['name' => $item, 'price' => $price];
        return $this;
    }

    public function applyTax(float $rate): self {
        $this->invoice->taxRate = $rate;
        return $this;
    }

    public function applyDiscount(float $value): self {
        $this->invoice->discount = $value;
        return $this;
    }

    public function markAsPaid(): self {
        $this->invoice->isPaid = true;
        return $this;
    }

    public function getInvoice(): Invoice {
        $result = $this->invoice;
        // Prepara o builder para criar uma fatura nova caso seja reutilizado
        $this->reset(); 
        return $result;
    }
}
```

### 4. Uso no Laravel
Graças ao Method Chaining, o controller fica incrivelmente limpo e fácil de ler, assim como quando montamos queries.

```php
namespace App\Http\Controllers;

class InvoiceController extends Controller {
    
    public function generate() {
        $builder = new InvoiceBuilder();
        
        // Construção passo a passo e super fluida
        $invoice = $builder
            ->setCustomer("Empresa X LTDA")
            ->addItem("Consultoria Sênior", 5000.00)
            ->addItem("Serviço de Cloud", 250.00)
            ->applyTax(0.18) // 18% de imposto
            ->applyDiscount(500.00)
            ->markAsPaid()
            ->getInvoice();
            
        // Agora você tem um objeto $invoice completo e válido
        return response()->json($invoice);
    }
}
```

> **💡 Dica Avançada (O Diretor):** Se você passa a ter construções "repetitivas" (ex: uma Fatura de Cliente VIP que tem sempre desconto e isenção de imposto), você pode criar uma classe extra chamada `Director`. O diretor recebe o builder e centraliza "receitas de bolo" fixas, como `$director->buildVipInvoice($builder)`.

---

## ✅ Vantagens
1. **Controle Passo a Passo:** Permite adiar algumas etapas de construção para quando você realmente tiver os dados em mãos (ex: recuperar os itens do banco agora, mas setar o desconto só no final da request).
2. **Código Fluente e Legível:** O Method Chaining torna a leitura do código super natural, reduzindo o volume mental necessário para ler construtores enormes.
3. **Isolamento de Complexidade (SRP):** Remove o código de instanciação complexo da lógica de negócios, isolando-o dentro da classe do Builder.

## ❌ Desvantagens
- Aumenta o volume e a complexidade geral do código do sistema por exigir a criação de múltiplas classes novas (Produto, Interface do Builder, Builder e possivelmente o Diretor) para lidar com uma tarefa que, se o objeto fosse simples, seria resolvida com um simples `new Objeto()`.
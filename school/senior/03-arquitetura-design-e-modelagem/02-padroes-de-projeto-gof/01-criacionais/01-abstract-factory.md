# Abstract Factory (Fábrica Abstrata)

## 📌 O que é?
O **Abstract Factory** é um padrão de projeto criacional que permite produzir famílias de objetos relacionados sem ter que especificar suas classes concretas. 

Ele é como uma "super-fábrica" que cria outras fábricas.

## 🎯 Quando usar?
- Quando o sistema precisa ser independente de como seus produtos são criados, compostos ou representados.
- Quando seu código precisa trabalhar com diversas famílias de produtos relacionados, mas você não quer que ele dependa de classes concretas (para facilitar a manutenção e permitir a expansão futura).
- Para garantir que os produtos criados em uma mesma família sejam compatíveis entre si.

---

## 💻 Exemplo Prático (Laravel / PHP)
Imagine que você tem um e-commerce em Laravel que suporta múltiplos provedores de pagamento (ex: Stripe e PayPal). Cada provedor tem sua própria classe para processar o pagamento e sua própria classe para gerar o recibo fiscal. Você precisa garantir que não vai misturar um gateway do Stripe com um recibo do PayPal.

### 1. Interfaces dos Produtos (A Família)
```php
interface PaymentGateway {
    public function charge(float $amount): bool;
}

interface ReceiptGenerator {
    public function generate(string $transactionId): string;
}
```

### 2. Produtos Concretos (Família Stripe)
```php
class StripeGateway implements PaymentGateway {
    public function charge(float $amount): bool {
        // Lógica da API do Stripe
        return true;
    }
}

class StripeReceipt implements ReceiptGenerator {
    public function generate(string $transactionId): string {
        return "Recibo Stripe para a transação: {$transactionId}";
    }
}
```

### 3. Produtos Concretos (Família PayPal)
```php
class PayPalGateway implements PaymentGateway {
    public function charge(float $amount): bool {
        // Lógica da API do PayPal
        return true;
    }
}

class PayPalReceipt implements ReceiptGenerator {
    public function generate(string $transactionId): string {
        return "Recibo PayPal para a transação: {$transactionId}";
    }
}
```

### 4. A Fábrica Abstrata
```php
interface PaymentFactory {
    public function createGateway(): PaymentGateway;
    public function createReceipt(): ReceiptGenerator;
}
```

### 5. Fábricas Concretas
```php
class StripeFactory implements PaymentFactory {
    public function createGateway(): PaymentGateway { return new StripeGateway(); }
    public function createReceipt(): ReceiptGenerator { return new StripeReceipt(); }
}

class PayPalFactory implements PaymentFactory {
    public function createGateway(): PaymentGateway { return new PayPalGateway(); }
    public function createReceipt(): ReceiptGenerator { return new PayPalReceipt(); }
}
```

### 6. Uso no Laravel (Controller ou Service)
O Laravel pode resolver a fábrica correta via Service Container (usando `App::bind`), e o seu controller não precisa saber de qual gateway estamos falando.

```php
namespace App\Services;

class CheckoutService {
    protected $factory;

    // A injeção de dependência traz a fábrica correta
    public function __construct(PaymentFactory $factory) {
        $this->factory = $factory;
    }

    public function processOrder(float $amount) {
        // Cria os objetos compatíveis entre si
        $gateway = $this->factory->createGateway();
        $receipt = $this->factory->createReceipt();
        
        if ($gateway->charge($amount)) {
            return $receipt->generate(uniqid());
        }
        
        throw new \Exception("Pagamento falhou.");
    }
}

// Em um Provider (ex: AppServiceProvider.php):
// $this->app->bind(PaymentFactory::class, function ($app) {
//     return request('gateway') === 'paypal' ? new PayPalFactory() : new StripeFactory();
// });
```

---

## ✅ Vantagens
1. **Compatibilidade Garantida:** Você tem certeza de que os produtos (Gateway e Recibo) obtidos da mesma fábrica funcionam juntos.
2. **Desacoplamento:** O `CheckoutService` não conhece as classes concretas (`StripeGateway`, etc).
3. **Princípio Aberto/Fechado (OCP):** Se a empresa adotar o PagSeguro amanhã, você só cria uma `PagSeguroFactory` sem alterar o serviço de checkout.

## ❌ Desvantagens
- Pode gerar muita verbosidade e explosão de classes (muitas interfaces e classes pequeninas).
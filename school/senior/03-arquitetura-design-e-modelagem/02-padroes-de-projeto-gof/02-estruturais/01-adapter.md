# Adapter (Adaptador / Wrapper)

## 📌 O que é?
O **Adapter** é um padrão estrutural que permite que objetos com interfaces incompatíveis colaborem entre si.
Ele atua como um tradutor, envolvendo o objeto incompatível em uma camada "adaptadora" que o seu código entende.

## 🎯 Quando usar?
- Quando você quer usar uma classe existente (ou pacote do Composer), mas a interface dela não é compatível com o resto do seu código.
- Para criar uma camada anti-corrupção (Anti-Corruption Layer) entre o seu sistema e APIs de terceiros, garantindo que o seu sistema principal nunca chame códigos externos diretamente.

---

## 💻 Exemplo Prático (Laravel / PHP)
Imagine que sua aplicação Laravel dependa de uma interface `PaymentGateway`. Agora a diretoria fechou contrato com o **Stripe**, mas a SDK oficial do Stripe no PHP tem métodos e parâmetros totalmente diferentes dos que o seu sistema usa.

### 1. Nossa Interface Padrão (O que o Laravel espera)
```php
interface PaymentGateway {
    public function pay(float $amount): void;
}
```

### 2. A Classe Incompatível (A SDK do Stripe)
```php
class StripeApi {
    public function makePayment(float $amountInCents, string $currency): void {
        echo "Pagando " . ($amountInCents / 100) . " {$currency} via Stripe.\n";
    }
}
```

### 3. O Adapter
O Adapter implementa a nossa interface local, mas no coração dele ele delega as chamadas para a SDK externa, fazendo o "de/para" das regras de negócio.

```php
class StripeAdapter implements PaymentGateway {
    private StripeApi $stripeApi;

    public function __construct(StripeApi $stripeApi) {
        $this->stripeApi = $stripeApi;
    }

    // Traduz do nosso formato (float decimal) para o formato do Stripe (centavos em BRL)
    public function pay(float $amount): void {
        $amountInCents = $amount * 100;
        $this->stripeApi->makePayment($amountInCents, 'BRL');
    }
}
```

### 4. Uso no Laravel (Controller)
O seu código só conhece `PaymentGateway`. O adapter mascara a dependência externa.
```php
class CheckoutController extends Controller {
    public function process(PaymentGateway $gateway) {
        // O controller não faz ideia de que isso está batendo no Stripe.
        $gateway->pay(150.00); 
    }
}

// Num ServiceProvider do Laravel:
// $this->app->bind(PaymentGateway::class, function() {
//     return new StripeAdapter(new StripeApi());
// });
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ SRP:** Isola a conversão de dados da lógica de negócios.
- **✅ OCP:** Você pode introduzir novos adaptadores no programa (ex: `MercadoPagoAdapter`) sem quebrar o código cliente.
- **❌ Aumento de Complexidade:** Aumenta a quantidade geral de classes (interfaces, adapters) quando, às vezes, mudar a classe original seria mais fácil (caso você tivesse controle sobre ela).
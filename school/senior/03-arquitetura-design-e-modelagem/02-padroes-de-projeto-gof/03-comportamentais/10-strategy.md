# Strategy (Estratégia)

## 📌 O que é?
O **Strategy** é um padrão comportamental que permite definir uma "família" de algoritmos, colocar cada um deles em uma classe separada e fazer com que os objetos originais sejam intercambiáveis. 

Em vez de o objeto realizar o cálculo (ou a tarefa), ele delega a responsabilidade para a "Estratégia" que foi anexada a ele.

## 🎯 Quando usar?
- Quando você tem diversas formas ou variantes de resolver um problema na mesma classe (ex: vários `if/else` gigantes decidindo se a rota do Google Maps é de Carro, Bicicleta ou A Pé).
- É um dos padrões **MAIS USADOS** no Laravel junto ao Service Container para injetar lógicas diferentes (ex: Estratégias de Upload de Imagem, Estratégias de Pagamento) em tempo de execução.

---

## 💻 Exemplo Prático (Laravel / PHP)
O exemplo perfeito de e-commerce: Múltiplas formas de pagamento.

### 1. A Interface da Estratégia
Todas as estratégias devem implementar a mesma assinatura. O Contexto não vai saber quem é quem.
```php
interface PaymentStrategy {
    public function pay(float $amount): string;
}
```

### 2. Estratégias Concretas (A família de algoritmos)
Cada classe carrega um código (talvez com dependências externas pesadas) isolado das demais.
```php
class StripePayment implements PaymentStrategy {
    public function pay(float $amount): string {
        // Usa SDK do Stripe
        return "Pagamento de {$amount} processado pelo STRIPE.";
    }
}

class PayPalPayment implements PaymentStrategy {
    public function pay(float $amount): string {
        // Usa GuzzleHTTP pro PayPal
        return "Pagamento de {$amount} processado via PAYPAL.";
    }
}
```

### 3. O Contexto (O Checkout)
O `CheckoutService` do seu app não sabe nada sobre PayPal ou Stripe. Ele apenas recebe a Estratégia por injeção e manda ela processar.
```php
class CheckoutContext {
    private PaymentStrategy $strategy;

    // Você pode injetar a estratégia no construtor
    public function __construct(PaymentStrategy $strategy) {
        $this->strategy = $strategy;
    }

    // Ou pode permitir a troca de estratégia em Runtime (Comportamento Típico)
    public function setStrategy(PaymentStrategy $strategy): void {
        $this->strategy = $strategy;
    }

    public function processCheckout(float $total): string {
        // Delegação! O Contexto se isenta do trabalho sujo.
        return $this->strategy->pay($total);
    }
}
```

### 4. Uso no Laravel (Controller Dinâmico)
```php
namespace App\Http\Controllers;

class PaymentController extends Controller {
    
    public function charge(Request $request) {
        $method = $request->input('payment_method'); // 'stripe' ou 'paypal'
        $total = 150.00;
        
        // Padrão Strategy brilhando: O Controller instancia ou resolve a estratégia dinamicamente
        $strategy = $this->resolveStrategy($method);
        
        $checkout = new CheckoutContext($strategy);
        $message = $checkout->processCheckout($total);
        
        return response()->json(['success' => true, 'message' => $message]);
    }

    private function resolveStrategy(string $method): PaymentStrategy {
        if ($method === 'paypal') return new PayPalPayment();
        return new StripePayment();
    }
}
```

> **Diferença Clássica entre State e Strategy:** O Strategy foca em "formas diferentes de realizar a mesma tarefa" (ex: Pagar) e a estratégia é setada pelo Código Cliente. O State foca em "um objeto com comportamento que muda com o tempo" (ex: O Pedido que muda de Pending para Paid), onde o próprio Estado gerencia as regras de transição.

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ OCP e SRP Impecáveis:** Elimina condicionais complexas no código principal. Cada algoritmo de pagamento (Strategy) vive na sua própria bolha. Adicionar PIX no futuro não mexe uma vírgula na classe `CheckoutContext`.
- **✅ Testabilidade Mágica:** Você pode injetar um `MockPaymentStrategy` no seu teste unitário com absurda facilidade.
- **❌ Explosão de Classes:** Se a lógica do algoritmo for muito banal (ex: calcular descontos de 1 linha), criar classes inteiras pra isso pode poluir a base de código desnecessariamente (over-engineering).
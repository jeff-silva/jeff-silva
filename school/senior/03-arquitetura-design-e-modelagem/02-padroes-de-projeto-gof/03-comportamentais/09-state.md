# State (Estado)

## 📌 O que é?
O **State** é um padrão comportamental que permite que um objeto altere drasticamente o seu comportamento quando seu estado interno muda. O objeto parece ter mudado de classe de tão diferente que ele passa a agir.

## 🎯 Quando usar?
- Quando o comportamento de um objeto depende diretamente do seu "estado" (Status) atual.
- O padrão **State** é a cura suprema para a "Máquina de Estados Feia" (aquele bloco de dezenas de `if` ou `switch case` infinitos que poluem métodos como `pay()`, `cancel()`, verificando `$this->status == 'pendente'`, `$this->status == 'enviado'`).

---

## 💻 Exemplo Prático (Laravel / PHP)
Uma Máquina de Estados para Pedidos (`Order`). Um pedido pode estar "Pendente", "Pago" ou "Enviado". Você não pode cancelar um pedido que já foi enviado. Em vez de entupir a classe `Order` de `if`s, criamos classes separadas para cada Estado.

### 1. A Interface de Estado
Todos os estados compartilham essas mesmas ações.
```php
interface OrderState {
    public function pay(): void;
    public function cancel(): void;
    public function ship(): void;
}
```

### 2. O Contexto (O Pedido Original)
O Pedido armazena uma REFERÊNCIA para o Estado atual, e delega os métodos pra ele!
```php
class Order {
    private OrderState $state;

    public function __construct() {
        // Começa sempre pendente
        $this->transitionTo(new PendingState($this));
    }

    public function transitionTo(OrderState $newState): void {
        echo "Mudando de estado...\n";
        $this->state = $newState;
    }

    // Delegação
    public function pay(): void { $this->state->pay(); }
    public function cancel(): void { $this->state->cancel(); }
    public function ship(): void { $this->state->ship(); }
}
```

### 3. Os Estados Concretos
A genialidade é que a classe de Estado carrega o Contexto e **ela mesma se encarrega da transição**.
```php
abstract class StateBase implements OrderState {
    protected Order $order;
    public function __construct(Order $order) { $this->order = $order; }
}

class PendingState extends StateBase {
    public function pay(): void {
        echo "Pagamento efetuado com sucesso!\n";
        $this->order->transitionTo(new PaidState($this->order)); // Trocou de estado!
    }
    public function cancel(): void {
        echo "Pedido Cancelado no balcão.\n";
        // transitionTo(CancelledState)
    }
    public function ship(): void {
        throw new \Exception("Aguarde. Não podemos enviar um pedido sem pagamento.");
    }
}

class PaidState extends StateBase {
    public function pay(): void {
        throw new \Exception("Este pedido já foi pago.");
    }
    public function cancel(): void {
        echo "Estornando dinheiro e cancelando pedido.\n";
    }
    public function ship(): void {
        echo "Pacote na transportadora!\n";
        $this->order->transitionTo(new ShippedState($this->order));
    }
}

class ShippedState extends StateBase {
    public function pay(): void { throw new \Exception("Já está pago."); }
    public function cancel(): void { throw new \Exception("Tarde demais, já saiu pro correio."); }
    public function ship(): void { throw new \Exception("Já foi enviado."); }
}
```

### 4. O Uso Limpo
O Cliente apenas dá comandos no pedido. As transições são mágicas e blindadas a erros humanos.
```php
$order = new Order(); // Nasce Pending

$order->pay(); // Sucesso! Vira Paid
$order->ship(); // Sucesso! Vira Shipped

// $order->cancel(); // Dispara Exceção: Tarde demais!
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Código Elegante:** Elimina `switch/case` gigantes de status. O código é fatiado em classes especializadas, respeitando o Single Responsibility Principle (SRP).
- **✅ OCP Perfeito:** Para adicionar o status "Em Revisão de Fraude", você só cria a classe `FraudReviewState` e implementa a interface, sem tocar nas outras classes.
- **❌ Exagero (Overkill):** É desnecessário e infla o projeto (adicionando muitas classes) caso a máquina de estados tenha apenas 2 status ou os status raramente mudem de regras. Nesses casos, um simples ENUM nativo do PHP e um `match()` já bastam.
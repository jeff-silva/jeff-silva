# Abstract Factory (Fábrica Abstrata)

## 📌 O que é?
O **Abstract Factory** é um padrão de projeto criacional que permite produzir famílias de objetos relacionados sem ter que especificar suas classes concretas. 

Ele é como uma "super-fábrica" que cria outras fábricas.

## 🎯 Quando usar?
- Quando o sistema precisa ser independente de como seus produtos são criados, compostos ou representados.
- Quando seu código precisa trabalhar com diversas famílias de produtos relacionados, mas você não quer que ele dependa de classes concretas (para facilitar a manutenção e permitir a expansão futura).
- Para garantir que os produtos criados em uma mesma família sejam compatíveis entre si.

---

## 💻 Exemplo Prático (TypeScript / PHP Style)
Imagine que você está criando uma interface gráfica e precisa renderizar botões e checkboxes que devem seguir o estilo do sistema operacional (Mac ou Windows).

### 1. Interfaces dos Produtos
```typescript
interface Button {
    render(): void;
}

interface Checkbox {
    toggle(): void;
}
```

### 2. Produtos Concretos (Família Windows)
```typescript
class WinButton implements Button {
    render() { console.log("Renderizando Botão estilo Windows"); }
}

class WinCheckbox implements Checkbox {
    toggle() { console.log("Alternando Checkbox estilo Windows"); }
}
```

### 3. Produtos Concretos (Família Mac)
```typescript
class MacButton implements Button {
    render() { console.log("Renderizando Botão estilo Mac"); }
}

class MacCheckbox implements Checkbox {
    toggle() { console.log("Alternando Checkbox estilo Mac"); }
}
```

### 4. A Fábrica Abstrata
```typescript
interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}
```

### 5. Fábricas Concretas
```typescript
class WinFactory implements GUIFactory {
    createButton(): Button { return new WinButton(); }
    createCheckbox(): Checkbox { return new WinCheckbox(); }
}

class MacFactory implements GUIFactory {
    createButton(): Button { return new MacButton(); }
    createCheckbox(): Checkbox { return new MacCheckbox(); }
}
```

### 6. Código Cliente
O cliente não precisa saber se está no Mac ou Windows. Ele só pede para a fábrica genérica gerar os componentes:

```typescript
function renderUI(factory: GUIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    
    button.render();
    checkbox.toggle();
}

// Em tempo de execução, você injeta a fábrica correta:
const osType = "Mac"; // ou "Win"
let factory: GUIFactory;

if (osType === "Mac") {
    factory = new MacFactory();
} else {
    factory = new WinFactory();
}

renderUI(factory);
// Output: 
// Renderizando Botão estilo Mac
// Alternando Checkbox estilo Mac
```

---

## ✅ Vantagens
1. **Compatibilidade Garantida:** Você tem certeza de que os produtos que obtém de uma fábrica são compatíveis entre si.
2. **Desacoplamento:** Evita um vínculo forte entre o código cliente e os produtos concretos.
3. **Princípio de Responsabilidade Única (SRP):** Você pode extrair o código de criação do produto para um único lugar, facilitando a manutenção.
4. **Princípio Aberto/Fechado (OCP):** Você pode introduzir novas variantes de produtos sem quebrar o código cliente existente.

## ❌ Desvantagens
- O código pode se tornar mais complicado do que deveria ser, já que muitas novas interfaces e classes são introduzidas junto com o padrão.
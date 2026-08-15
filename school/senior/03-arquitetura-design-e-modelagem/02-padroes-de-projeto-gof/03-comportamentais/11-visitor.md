# Visitor (Visitante)

## 📌 O que é?
O **Visitor** é um padrão comportamental que permite adicionar novas operações e comportamentos a uma hierarquia de classes já existente, **sem alterar o código dessas classes**. 

Ele se baseia num mecanismo chamado *Double Dispatch* (Despacho Duplo), onde o Objeto Visível aceita um Visitante e, dentro dele, "chama de volta" o Visitante passando a si mesmo como parâmetro.

## 🎯 Quando usar?
- Quando você tem uma estrutura de objetos muito complexa (ex: Árvore do padrão *Composite*) e precisa executar lógicas diversas que não combinam com as classes (Ex: Extrair Exportação XML, JSON ou Cálculos de Frete Especiais para Fora da Classe).
- Para limpar a "sujeira". Se a classe `Empresa` precisar ter métodos `exportToPdf()`, `exportToXml()`, `calculateTaxes()`, ela ficará um monstro. O Visitor arranca essas responsabilidades pra fora.

---

## 💻 Exemplo Prático (Laravel / PHP)
Vamos extrair o comportamento de Exportação (JSON/XML) de uma estrutura de Objetos (Empresa, Departamento, Empregado) sem tocar em nenhuma linha de lógica de negócios deles.

### 1. A Interface do Elemento (O Aceitador)
Todas as classes originais só precisam de um método coringa: `accept()`.
```php
interface VisitableElement {
    public function accept(Visitor $visitor): string;
}
```

### 2. Os Elementos Concretos (As classes do negócio)
As classes aceitam a visita. Como a tipagem passa o tipo exato (ex: `$this` sendo `Company`), o Visitor saberá exatamente com quem está lidando.
```php
class Company implements VisitableElement {
    public string $name = "Super Corp";
    
    // O pulo do gato! Ele re-chama o visitor passando a si próprio! (Double Dispatch)
    public function accept(Visitor $visitor): string {
        return $visitor->visitCompany($this);
    }
}

class Department implements VisitableElement {
    public string $deptName = "Engenharia";
    
    public function accept(Visitor $visitor): string {
        return $visitor->visitDepartment($this);
    }
}
```

### 3. A Interface do Visitante
O Visitante tem um método supertipado para CADA elemento da nossa estrutura.
```php
interface Visitor {
    public function visitCompany(Company $company): string;
    public function visitDepartment(Department $dept): string;
}
```

### 4. Os Visitantes Concretos (Onde as novas operações ficam!)
Criamos a lógica de exportação em XML. No futuro, se quisermos JSON, é só criar a classe `JsonExportVisitor` sem mexer nas classes `Company` e `Department`!

```php
class XmlExportVisitor implements Visitor {
    
    public function visitCompany(Company $company): string {
        return "<company><name>{$company->name}</name></company>\n";
    }

    public function visitDepartment(Department $dept): string {
        return "<department><name>{$dept->deptName}</name></department>\n";
    }
}
```

### 5. O Uso
O cliente passa por todos os objetos, fazendo-os "aceitar" o visitante.
```php
$components = [
    new Company(),
    new Department()
];

$xmlExportVisitor = new XmlExportVisitor();

foreach ($components as $component) {
    // O polimorfismo e o Double Dispatch resolvem qual método XML chamar!
    echo $component->accept($xmlExportVisitor);
}
// Saída:
// <company><name>Super Corp</name></company>
// <department><name>Engenharia</name></department>
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ OCP Puríssimo:** Você pode adicionar novas operações (visitantes) a uma estrutura de classes sem alterar UMA VÍRGULA do código dessas classes que já rodam em produção há anos.
- **✅ Coesão Elevada (SRP):** Concentra todas as operações com propósitos semelhantes (ex: todas as regras de exportação XML) em um único arquivo de classe.
- **❌ Falta de Encapsulamento:** Para que o Visitante funcione, as classes concretas (`Company`) precisam expor suas variáveis internas (`public $name`) ou possuir "Getters" públicos, o que pode ferir o encapsulamento.
- **❌ Rigidez na Arquitetura:** Se você introduzir um novo "Elemento" (ex: classe `Employee`), terá que atualizar a Interface `Visitor` inteira e alterar todas as dezenas de implementações dos Visitantes. (Só use Visitor se a estrutura dos Elementos for super estável, mas as Operações mudarem bastante).
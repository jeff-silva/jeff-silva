# Interpreter (Intérprete)

## 📌 O que é?
O **Interpreter** é um padrão comportamental que especifica como avaliar frases em uma linguagem. Ele ajuda a construir uma árvore sintática para interpretar expressões matemáticas, regras de negócio em texto ou pequenos motores de busca.

## 🎯 Quando usar?
- Quando você tem um problema que ocorre com muita frequência e pode ser expresso como uma linguagem simples (ex: interpretar filtros em uma string `idade > 18 AND status = 'ativo'`).
- No desenvolvimento web (Laravel/PHP), ele é **raramente usado** diretamente, a não ser que você esteja construindo seu próprio parser de SQL, seu próprio motor de templates (como o Blade do Laravel) ou um gerador de relatórios dinâmicos.

---

## 💻 Exemplo Prático (PHP)
Vamos construir um interpretador muito simples de regras booleanas para verificar se um usuário tem acesso.

```php
interface Expression {
    public function interpret(array $context): bool;
}

// Terminal Expression
class RoleExpression implements Expression {
    private string $role;
    public function __construct(string $role) { $this->role = $role; }
    
    public function interpret(array $context): bool {
        return in_array($this->role, $context['roles'] ?? []);
    }
}

// Non-Terminal Expression (AND)
class AndExpression implements Expression {
    private Expression $expr1;
    private Expression $expr2;
    
    public function __construct(Expression $e1, Expression $e2) {
        $this->expr1 = $e1;
        $this->expr2 = $e2;
    }
    
    public function interpret(array $context): bool {
        return $this->expr1->interpret($context) && $this->expr2->interpret($context);
    }
}

// Uso
$isEditor = new RoleExpression('editor');
$isAdmin = new RoleExpression('admin');

// Regra: Precisa ser Admin E Editor (Extremamente abstrato!)
$isSuperUserRule = new AndExpression($isEditor, $isAdmin);

$userContext = ['roles' => ['admin', 'editor']];
echo $isSuperUserRule->interpret($userContext) ? 'Acesso Liberado' : 'Acesso Negado';
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Extensibilidade:** É fácil alterar e estender a gramática criando novas classes de Expressão.
- **❌ Manutenção Pesada:** Para gramáticas complexas, a árvore de classes cresce descontroladamente, tornando o padrão ineficiente comparado a *Parsers* e *Compiladores* reais.
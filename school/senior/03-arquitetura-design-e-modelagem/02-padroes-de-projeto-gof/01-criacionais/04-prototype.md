# Prototype (Prototipagem)

## 📌 O que é?
O **Prototype** é um padrão de projeto criacional que permite clonar objetos existentes sem fazer com que o seu código dependa das classes deles.

Em vez de criar um objeto a partir do zero usando o operador `new` (o que pode envolver chamadas de banco de dados pesadas ou configurações complexas), você pede a um objeto já existente que faça uma cópia de si mesmo.

## 🎯 Quando usar?
- Quando a criação de um objeto do zero for muito custosa (ex: requer muitas consultas ao banco, parse de arquivos grandes ou chamadas de rede) e você precisa de uma instância parecida.
- Quando seu código não deve depender das classes concretas dos objetos que você precisa copiar.
- Para reduzir o número de subclasses que apenas diferem na forma como inicializam seus objetos. Em vez de instanciar classes diferentes, você clona um protótipo com os atributos já pré-configurados.

---

## 💻 Exemplo Prático (Laravel / PHP)

No PHP, implementar o Prototype é algo muito nativo graças à palavra-chave `clone` e ao método mágico `__clone()`. Já no Laravel, temos um exemplo brilhante do padrão Prototype no dia a dia: o método `replicate()` do Eloquent.

Vamos ver ambas as abordagens.

### 1. Prototype Puro com PHP (`__clone`)
Imagine que temos um objeto `Relatorio` que demora segundos para ser instanciado porque busca dados em uma API externa.

```php
class Report {
    public $title;
    public $content;
    public $author;
    public $heavyData; // Dados que demoraram para ser processados

    public function __construct(string $title, string $content, string $author) {
        $this->title = $title;
        $this->content = $content;
        $this->author = $author;
        
        // Simula uma operação pesada e custosa na inicialização
        $this->heavyData = $this->fetchHeavyData(); 
    }

    private function fetchHeavyData(): array {
        sleep(2); // Simula lentidão
        return ['metric_1' => 100, 'metric_2' => 200];
    }

    // O método mágico intercepta a ação do operador "clone".
    // Usamos ele para alterar valores específicos na cópia ou
    // clonar objetos internos (Deep Copy).
    public function __clone() {
        $this->title = $this->title . " (Cópia)";
        $this->author = "Desconhecido"; // Reseta o autor
        
        // Se $heavyData fosse uma classe, precisaríamos fazer:
        // $this->heavyData = clone $this->heavyData;
    }
}
```

**Uso no Controller/Service:**
```php
$relatorioOriginal = new Report("Vendas Anuais", "Corpo do texto...", "Jeff");
// O código travou por 2 segundos aqui...

// Criar o segundo relatório usando Prototype não custa os 2 segundos!
$relatorioClonado = clone $relatorioOriginal;
$relatorioClonado->author = "Novo Analista";

echo $relatorioClonado->title; // Saída: Vendas Anuais (Cópia)
```

### 2. O Prototype no Eloquent do Laravel (O Método `replicate`)
Se você precisa duplicar uma "Campanha de Marketing" complexa que já tem dezenas de colunas configuradas no banco, você não dá um `new Campaign()`. O Laravel implementa o Prototype nativamente:

```php
namespace App\Http\Controllers;

use App\Models\Campaign;

class CampaignController extends Controller {
    
    public function duplicate(int $id) {
        $campaignOriginal = Campaign::findOrFail($id);
        
        // O replicate() é o padrão Prototype em ação pura no Laravel.
        // Ele clona todos os atributos na memória, ignorando IDs e timestamps.
        $novaCampanha = $campaignOriginal->replicate();
        
        // Fazemos as pequenas variações no nosso clone
        $novaCampanha->name = $novaCampanha->name . ' - Copia 2024';
        $novaCampanha->status = 'draft';
        
        // Salva o clone como uma nova linha na tabela
        $novaCampanha->save();
        
        return response()->json($novaCampanha);
    }
}
```

---

## ✅ Vantagens
1. **Performance Elevada:** Evita o custo (CPU/Memória/Tempo) de recriar objetos complexos do zero.
2. **Praticidade de Configuração:** Você pode clonar protótipos pré-configurados em vez de instanciar classes do zero e refazer dúzias de atribuições (`$obj->setX()`).
3. **Alternativa limpa à Herança:** Evita a criação de subclasses só para mudar um atributo padrão.

## ❌ Desvantagens
- Clonar objetos complexos que possuem referências a outros objetos aninhados ou referências circulares pode ser um pesadelo no PHP. O `clone` nativo faz uma "cópia rasa" (*Shallow Copy*), o que significa que referências a outros objetos não são duplicadas de verdade. Exige que você implemente manualmente o `__clone()` fazendo um *Deep Copy* cuidadoso.
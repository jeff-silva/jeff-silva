# Flyweight (Peso Mosca)

## 📌 O que é?
O **Flyweight** é um padrão estrutural puramente voltado à **Otimização Extrema de RAM**. Ele permite colocar uma quantidade cavalar de objetos na memória RAM restrita compartilhando pedaços idênticos de dados (o estado intrínseco) entre vários objetos, em vez de manter todos esses dados repetidos dentro de cada objeto individualmente.

## 🎯 Quando usar?
- É o padrão ouro do Desenvolvimento de Jogos: permite renderizar 100.000 árvores, soldados ou balas de metralhadora simultaneamente numa tela usando uma única textura (imagem pesada) e compartilhando ela entre todos os 100k objetos, mudando apenas as coordenadas X e Y de cada um deles.
- No desenvolvimento Web cotidiano (PHP puro), o uso é raro porque o ciclo de vida do PHP morre no fim do request HTTP. 
- No entanto, ele se torna vital em ferramentas como **Laravel Octane / Swoole** (onde a RAM não é limpa entre as requisições) ou em **scripts Artisan CLI** (comandos long-running de importação de milhões de linhas, como um job batch em tabelas do Data Warehouse) onde estourar os limites de memória da AWS seria desastroso.

---

## 💻 Exemplo Prático (Laravel / PHP)
Vamos imaginar um Job/Comando de CLI do Laravel que processa uma Carga de Dados massiva contendo o cadastro governamental de 1 Milhão de "Empresas", para depois exportá-las em um arquivo final. Cada empresa está vinculada a um "Regime Tributário" gigantesco (cheio de alíquotas de imposto, textos html das leis, cálculos fiscais complexos).

Se instanciarmos 1 Milhão de objetos `Tributacao` independentes, a memória do container vai estourar em segundos gerando um *Fatal Error: Allowed memory size exhausted*.

Como só existem alguns tipos base de regime tributário no Brasil (ex: Simples Nacional, Presumido, Lucro Real, MEI), nós podemos criar uma "Fábrica Inteligente" (Cache) que compartilha o mesmíssimo objeto na RAM.

### 1. O Objeto Flyweight (O Estado Intrínsico / Compartilhado / Constante)
Essa classe guarda os dados que custam muito caro de manter na memória e que são repetidos sempre.
```php
class TributacaoFlyweight {
    private string $nomeDoRegime;
    private array $aliquotasGerais;
    private string $legislacaoHtmlPesado;

    public function __construct(string $nome, array $aliquotas, string $legis) {
        $this->nomeDoRegime = $nome;
        $this->aliquotasGerais = $aliquotas;
        $this->legislacaoHtmlPesado = $legis;
    }
    
    // Exibe ou calcula relatórios injetando os dados mutáveis (Contexto Extrínseco) que vêm de fora
    public function renderizarImposto(float $faturamentoDaEmpresaEspecificaDaVez) {
        // Cálculo usando o estado compartilhado vs faturamento externo
    }
}
```

### 2. A Fábrica de Flyweight
Ela funciona como um Singleton condicional ou Cache indexado. Ela só cria a Tributação uma vez e guarda o ponteiro de memória para devolver a quem pedir depois.
```php
class TributacaoFactory {
    private static array $tributacoesPesadas = [];

    public static function getTributacao(string $nome): TributacaoFlyweight {
        if (!isset(self::$tributacoesPesadas[$nome])) {
            // Emula carga brutal (ex: ler arquivos pesados do disco na inicialização)
            echo "Criando o Flyweight de 10MB na RAM para: {$nome} \n";
            self::$tributacoesPesadas[$nome] = new TributacaoFlyweight($nome, [], "<html>Gigante...</html>");
        }
        
        // Retorna a REFERÊNCIA da memória, não a cópia!
        return self::$tributacoesPesadas[$nome];
    }
}
```

### 3. O Contexto / O Cliente (Estado Extrínseco / Variável)
Esse é o objeto "levinho". Ele guarda apenas as variáveis únicas que separam um CPF de outro CPF. Para saber das leis do país, ele aponta pra memória compartilhada.
```php
class EmpresaContext {
    public string $cnpj;
    public float $faturamento;
    
    // O pulo do gato! Essa variável apenas guarda um atalho (ponteiro de memória PHP)
    public TributacaoFlyweight $tributacaoReferencia;

    public function __construct(string $cnpj, float $fat, string $regime) {
        $this->cnpj = $cnpj;
        $this->faturamento = $fat;
        
        // Pega do Cache global a memória compartilhada
        $this->tributacaoReferencia = TributacaoFactory::getTributacao($regime);
    }
}
```

### 4. Uso do Comando (Salvando o Servidor de Explodir)
```php
$empresasProcessadasNaMemoria = [];

// Loop brutal importando 1 Milhão de empresas de um CSV via CLI
for ($i = 0; $i < 1000000; $i++) {
    
    // Vamos supor que 500 mil são MEI, 300 mil são Simples, etc.
    // Na 1ª vez que o código topar num MEI, o Factory aloca os 10MB na RAM e cria o Objeto Tributação.
    // Nas próximas 499.999 vezes que o CSV acusar MEI, o PHP só prega um "link" invisível (referência). O consumo de RAM é estático!
    
    $empresasProcessadasNaMemoria[] = new EmpresaContext("000" . $i, 1000, "MEI");
}

// O resultado: Ao invés de tentarmos manter 1.000.000 de instâncias absurdamente pesadas, nós instanciamos 1.000.000 de instâncias "leves" + EXATAMENTE 4 classes estáticas de tributação na RAM.
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Otimização Crítica de RAM:** Como foi detalhado no exemplo, o Flyweight é o padrão final na prevenção de exaustão de memória em sistemas PHP que executam *daemons*, microsserviços via Octane ou longos processos em lote com volumes assustadores.
- **❌ Perda de Velocidade (RAM por CPU):** Você reduz drásticamente o pico de memória ram, mas sempre acaba consumindo mais frações de tempo de CPU calculando a fábrica (identificando se a chave de cache existe, concatenando os estados toda hora que um método é evocado).
- **❌ Complexidade Extrema:** Você é obrigado a fatiar uma mesma classe de domínio (que no DDD seria uma entidade rica simples) em duas classes abstratas nada fáceis de visualizar: A classe do "Estado Imutável" e a classe de "Contexto que usa o Estado".
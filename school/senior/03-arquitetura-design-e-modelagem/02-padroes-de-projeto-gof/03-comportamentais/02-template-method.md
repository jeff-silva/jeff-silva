# Template Method (Método Modelo)

## 📌 O que é?
O **Template Method** é um padrão comportamental que define o esqueleto de um algoritmo na superclasse, mas deixa que as subclasses sobrescrevam etapas específicas desse algoritmo sem modificar sua estrutura (ordem de execução) principal.

## 🎯 Quando usar?
- Quando você tem várias classes que fazem quase a mesma coisa, na mesma ordem, mas com pequenas variações em algumas etapas.
- Para evitar duplicação de código transferindo o fluxo comum para uma classe abstrata base.

---

## 💻 Exemplo Prático (Laravel / PHP)
Gerar diferentes formatos de relatórios (CSV e PDF) que seguem as mesmas etapas: 1. Coletar dados -> 2. Formatar dados -> 3. Exportar.

### 1. A Classe Abstrata (O Template)
A função `generate()` está cravada e não deve ser alterada (pode ser `final`), ditando a ordem exata.
```php
abstract class ReportGenerator {
    
    // O Template Method propriamente dito
    final public function generate(): void {
        $data = $this->collectData();
        $formattedData = $this->formatData($data);
        $this->export($formattedData);
    }

    // Passos comuns a todos podem ser implementados aqui
    protected function collectData(): array {
        return ['venda' => 100, 'imposto' => 10]; // Ex: DB::table('sales')->get()
    }

    // Passos variáveis são obrigatórios nas subclasses
    abstract protected function formatData(array $data): string;
    abstract protected function export(string $data): void;
}
```

### 2. As Subclasses Concretas
```php
class CsvReport extends ReportGenerator {
    protected function formatData(array $data): string {
        return implode(",", array_keys($data)) . "\n" . implode(",", array_values($data));
    }

    protected function export(string $data): void {
        echo "Gerando relatorio.csv...\n";
    }
}

class PdfReport extends ReportGenerator {
    protected function formatData(array $data): string {
        return "<h1>Relatório</h1><p>Venda: {$data['venda']}</p>";
    }

    protected function export(string $data): void {
        echo "Gerando relatorio.pdf...\n";
    }
}
```

### 3. Uso
```php
$csv = new CsvReport();
$csv->generate(); // Executa o esqueleto padronizado!
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Reutilização de Código:** Centraliza todo o fluxo de lógica repetitiva na classe pai.
- **✅ Inversão de Controle:** O princípio de Hollywood ("Não nos chame, nós chamaremos você"). A classe pai controla o fluxo e chama as filhas.
- **❌ Rigidez:** As subclasses são forçadas a seguir a ordem estrutural exata da classe pai. Mudar a ordem para um caso específico pode ser difícil.
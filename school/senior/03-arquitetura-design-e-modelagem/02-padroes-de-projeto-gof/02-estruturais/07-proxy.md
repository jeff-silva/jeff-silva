# Proxy (Procurador)

## 📌 O que é?
O **Proxy** é um padrão estrutural que atua como um guarda-costas (um substituto ou um *placeholder*) para outro objeto (o objeto real de serviço). 

Um proxy é capaz de capturar e reter a requisição que o código-cliente mandou, controlando o acesso a essa requisição: ele decide o que fazer ANTES, DEPOIS, ou até se a requisição SEQUER pode chegar ao objeto real.

## 🎯 Quando usar?
A versatilidade desse padrão é gigante, gerando 3 nichos principais:
- **Proxy Virtual (Lazy Initialization):** Para adiar o instanciamento via `new` de um objeto excessivamente lento até o momento em que ele for *realmente* exigido por algum método da classe.
- **Proxy de Cache:** Para verificar um banco (Redis/Memcached) e devolver os dados imediatamente. Se não houver cache, ele deixa o serviço real do banco processar e guarda a resposta pra poupar idas na próxima chamada (super comum em APMs ou Repository Caching no Laravel).
- **Proxy de Proteção/Acesso:** Uma camada que verifica um Access Control List (Permissão) do usuário autenticado no sistema antes de disparar o destrutivo `delete()` na classe de serviço original.

---

## 💻 Exemplo Prático (Laravel / PHP)
Vamos desenhar uma integração com a API pesada do YouTube. Todo vídeo que pedimos lá atrasa o backend por causa da rede, então precisamos de um **Proxy de Cache** para garantir que a gente não bata lá duas vezes num intervalo de uma hora pro mesmo vídeo.

**"Mas espere aí, o Decorator não faz exatamente isso?"**
*(Sim, ambos engolem outro objeto usando o wrapper. A diferença conceitual fundamental é: o Decorator aprimora o objeto que foi injetado nele, já o Proxy muitas vezes GERENCIA e CRIA o objeto real que ele está mascarando porque ele detém o controle completo da situação de acesso, enquanto o Decorator não se envolve na responsabilidade de criação).*

### 1. A Interface Comum
O Controller do Laravel só precisa saber dessa interface e dos dados resultantes. Ele é alheio à existência de um Proxy de Cache ou da API verdadeira.
```php
interface YouTubeDownloaderInterface {
    public function getVideoInfo(string $videoId): string;
}
```

### 2. O Objeto Real (Demorado e Custoso)
```php
class RealYouTubeDownloader implements YouTubeDownloaderInterface {
    public function getVideoInfo(string $videoId): string {
        // Simula uma chamada de API REST (Guzzle, Http::get) com lentidão da rede
        \Log::info("Conectando aos servidores remotos do YouTube (Google)...");
        sleep(3);
        
        return "{ videoId: {$videoId}, title: 'Aulão Padrões de Projeto' }";
    }
}
```

### 3. O Proxy
O Proxy é a muralha de acesso. Ele checa o Cache nativo do Laravel na fachada. Se não tiver no cache, ele mesmo se encarrega de aplicar a **Inicialização Lenta (Lazy Initialization)** (criar o serviço real pela primeira vez), rodar o fluxo e salvar de volta pro cache.

```php
use Illuminate\Support\Facades\Cache;

class YouTubeCacheProxy implements YouTubeDownloaderInterface {
    
    // Mantém uma referência atrasada ao serviço pesado (null de início!)
    private ?RealYouTubeDownloader $youtubeService = null;

    public function getVideoInfo(string $videoId): string {
        // 1. Tenta estrangular o ciclo da requisição já de cara consultando o Laravel Cache (Memória)
        $cacheKey = "youtube_video_data_{$videoId}";
        
        if (Cache::has($cacheKey)) {
            \Log::info("Retornado do Cache Instantaneamente! Custo Zero.");
            return Cache::get($cacheKey);
        }

        // 2. Não tava no Cache? Aplica Lazy Initialization.
        // O "new" pesado do serviço só é chamado quando a chance de escape por cache se esgotou.
        if ($this->youtubeService === null) {
            $this->youtubeService = new RealYouTubeDownloader();
        }

        // 3. Deixa o serviço original sofrer os atrasos de conexão HTTP e processa os dados
        $data = $this->youtubeService->getVideoInfo($videoId);
        
        // Cacheia a resposta pra proteger a classe real pelos próximos 60 minutos
        Cache::put($cacheKey, $data, 3600); 

        return $data;
    }
}
```

### 4. O Uso no Laravel
```php
// Num Service Container (AppServiceProvider):
// Dizemos: "Sempre que alguém pedir a Interface de YouTube, entregue o Guarda-Costas Proxy."
// $app->bind(YouTubeDownloaderInterface::class, YouTubeCacheProxy::class);

class CourseVideoController extends Controller {
    public function show(string $id, YouTubeDownloaderInterface $youtube) {
        
        // Chamada 1: Um aluno clica no vídeo pela manhã.
        // O proxy analisa. Erro de cache. O Proxy dá um `new` na classe real.
        // O código vai levar 3 longos segundos na rede e voltar os dados da Google.
        $video1 = $youtube->getVideoInfo($id); 

        // Chamada 2: Minutos depois, outro aluno do mesmo curso atualiza a página no app.
        // O Proxy detecta sucesso na memória redis! Sem estanciar a classe remota, sem atraso.
        // O código responde em <0.02ms na tela da pessoa!
        $video2 = $youtube->getVideoInfo($id); 
    }
}
```

---

## ✅ Vantagens e ❌ Desvantagens
- **✅ Prevenção Extrema de Gargalos (Lazy Initialization):** Objetos de grande porte com lógicas onerosas em construtores só serão materializados na memória RAM se absolutamente necessários.
- **✅ Camada Securitária Clara (Proxy de Proteção):** Concentra cheques de validação e *policies* blindando seus serviços isoladamente.
- **✅ OCP Perfeito:** A classe de origem (`RealYouTubeDownloader`) fica intocada na versão final. Os proxies garantem todo o ciclo extra sem precisar colocar 1 `if` a mais nela.
- **❌ Camada Extra:** Exatamente como o Decorator, adiar ou intermediar processos cria lentidões milissegundares do interpretador PHP e expande a proliferação de muitas classes e interfaces ao projeto para resolver lógicas que talvez não exijam robustez arquitetural tão profunda.
# Roadmap de Estudos - Nível Sênior

Este arquivo gerencia o progresso dos seus estudos.

> [!IMPORTANT]
> **Sincronização de Estrutura:** A árvore abaixo é um espelho exato dos arquivos reais no disco. A estrutura, a ordem e a nomenclatura dos arquivos e pastas reais devem seguir fielmente o que está documentado aqui. Qualquer novo conteúdo ou alteração na hierarquia deve ser refletido primeiro nesta lista para manter a organização impecável.

```text
senior/ [40/79] (50%)
├── 📁 01-construcao-e-codigo/ [11/14] (78%)
│   ├── 📁 01-poo-e-paradigmas/ [3/3] (100%)
│   │   ├── ✅ 01-classes-e-objetos.md
│   │   ├── ✅ 02-polimorfismo-e-encapsulamento.md
│   │   └── ✅ 03-principios-solid.md
│   ├── 📁 02-desenvolvimento-web-fullstack/ [3/3] (100%)
│   │   ├── ✅ 01-apis-restful.md
│   │   ├── ✅ 02-renderizacao-ssr-ssg.md
│   │   └── ✅ 03-integracao-ponta-a-ponta.md
│   ├── 📁 03-algoritmos-e-estruturas-base/ [3/3] (100%)
│   │   ├── ✅ 01-arrays-e-listas.md
│   │   ├── ✅ 02-filas-e-pilhas.md
│   │   └── ✅ 03-buscas-lineares-e-binarias.md
│   ├── 📁 04-estruturas-avancadas-e-algoritmos-complexos/ [2/2] (100%)
│   │   ├── ✅ 01-arvores-bst-avl-e-grafos.md
│   │   └── ✅ 02-ordenacao-eficiente-e-analise-big-o.md
│   └── 📁 05-desenvolvimento-mobile/ [0/3] (0%)
│       ├── ⏳ 01-frameworks-hibridos-react-native-flutter.md
│       ├── ⏳ 02-ciclo-de-vida-mobile-foreground-background.md
│       └── ⏳ 03-build-assinatura-e-lojas-app-store-play-console.md
│
├── 📁 02-frontend-avancado-e-arquitetura-web/ [7/13] (53%)
│   ├── 📁 01-frameworks-modernos/ [1/1] (100%)
│   │   └── ✅ 01-vuejs-composition-api-e-reatividade.md
│   ├── 📁 02-estilizacao-e-ui/ [1/1] (100%)
│   │   └── ✅ 01-tailwind-css-layouts-responsivos.md
│   ├── 📁 03-renderizacao-moderna/ [1/1] (100%)
│   │   └── ✅ 01-nuxtjs-ssr-ssg-e-rotas-dinamicas.md
│   ├── 📁 04-react-avancado/ [3/3] (100%)
│   │   ├── ✅ 01-padroes-avancados-compound-control-props-slots.md
│   │   ├── ✅ 02-motor-fiber-reconciliacao-e-hooks.md
│   │   └── ✅ 03-react-server-components-e-nextjs-app-router.md
│   ├── 📁 05-performance-e-core-web-vitals/ [1/2] (50%)
│   │   ├── ✅ 01-metricas-lcp-cls-inp.md
│   │   └── ⏳ 02-otimizacao-de-bundles-e-code-splitting.md
│   ├── 📁 06-gerenciamento-de-estado-de-servidor/ [0/2] (0%)
│   │   ├── ⏳ 01-tanstack-query-e-pinia-avancado.md
│   │   └── ⏳ 02-invalidacao-de-cache-e-optimistic-updates.md
│   ├── 📁 07-seguranca-no-browser/ [0/2] (0%)
│   │   ├── ⏳ 01-content-security-policy-csp-e-mitigacao-xss-csrf.md
│   │   └── ⏳ 02-politicas-de-cookies-samesite-httponly.md
│   └── 📁 08-arquitetura-e-design-systems/ [0/1] (0%)
│       └── ⏳ 01-componentes-reutilizaveis-a11y-e-micro-frontends.md
│
├── 📁 03-arquitetura-design-e-modelagem/ [13/27] (48%)
│   ├── 📁 01-modelagem-de-sistemas/ [1/1] (100%)
│   │   └── ✅ 01-diagramas-uml-e-modelagem-er.md
│   ├── 📁 02-padroes-de-projeto-gof/ [12/23] (52%)
│   │   ├── 📁 01-criacionais/ [5/5] (100%)
│   │   │   ├── ✅ 01-abstract-factory.md
│   │   │   ├── ✅ 02-factory-method.md
│   │   │   ├── ✅ 03-builder.md
│   │   │   ├── ✅ 04-prototype.md
│   │   │   └── ✅ 05-singleton.md
│   │   ├── 📁 02-estruturais/ [7/7] (100%)
│   │   │   ├── ✅ 01-adapter.md
│   │   │   ├── ✅ 02-bridge.md
│   │   │   ├── ✅ 03-composite.md
│   │   │   ├── ✅ 04-decorator.md
│   │   │   ├── ✅ 05-facade.md
│   │   │   ├── ✅ 06-flyweight.md
│   │   │   └── ✅ 07-proxy.md
│   │   └── 📁 03-comportamentais/ [0/11] (0%)
│   │       ├── ⏳ 01-interpreter.md
│   │       ├── ⏳ 02-template-method.md
│   │       ├── ⏳ 03-chain-of-responsibility.md
│   │       ├── ⏳ 04-iterator.md
│   │       ├── ⏳ 05-command.md
│   │       ├── ⏳ 06-mediator.md
│   │       ├── ⏳ 07-memento.md
│   │       ├── ⏳ 08-observer.md
│   │       ├── ⏳ 09-state.md
│   │       ├── ⏳ 10-strategy.md
│   │       └── ⏳ 11-visitor.md
│   ├── 📁 03-enterprise-patterns/ [0/1] (0%)
│   │   └── ⏳ 01-repository-e-unit-of-work.md
│   ├── 📁 04-arquitetura-de-software-e-microsservicos/ [0/1] (0%)
│   │   └── ⏳ 01-monolitos-modulares-ddd-e-padroes-saga-outbox.md
│   └── 📁 05-sistemas-distribuidos-e-mensageria/ [0/1] (0%)
│       └── ⏳ 01-event-driven-filas-rabbitmq-sqs-e-idempotencia.md
│
├── 📁 04-qualidade-testes-e-engenharia-de-requisitos/ [1/4] (25%)
│   ├── 📁 01-engenharia-de-requisitos/ [1/1] (100%)
│   │   └── ✅ 01-mapeamento-de-escopo-regras-e-historias-de-usuario.md
│   ├── 📁 02-piramide-de-testes/ [0/1] (0%)
│   │   └── ⏳ 01-testes-unitarios-integracao-e-mocks.md
│   ├── 📁 03-testes-e2e-e-qa/ [0/1] (0%)
│   │   └── ⏳ 01-automacao-regressao-contratos-e-testes-de-carga.md
│   └── 📁 04-gerencia-de-configuracao/ [0/1] (0%)
│       └── ⏳ 01-versionamento-semantico-feature-flags-e-releases.md
│
├── 📁 05-gestao-agil-devops-e-observabilidade/ [4/7] (57%)
│   ├── 📁 01-metodologias-ageis/ [1/1] (100%)
│   │   └── ✅ 01-scrum-kanban-e-entregas-iterativas.md
│   ├── 📁 02-conteinerizacao-base/ [1/1] (100%)
│   │   └── ✅ 01-docker-e-docker-compose.md
│   ├── 📁 03-ci-cd-basico/ [1/1] (100%)
│   │   └── ✅ 01-pipelines-de-build-deploy-e-git.md
│   ├── 📁 04-gestao-de-projetos-ti/ [1/1] (100%)
│   │   └── ✅ 01-priorizacao-e-alinhamento-com-stakeholders.md
│   ├── 📁 05-cloud-e-infraestrutura/ [0/2] (0%)
│   │   ├── ⏳ 01-aws-ec2-vms-security-groups-e-finops.md
│   │   └── ⏳ 02-aws-ecs-orquestracao-e-auto-scaling.md
│   └── 📁 06-observabilidade/ [0/1] (0%)
│       └── ⏳ 01-opentelemetry-grafana-e-metricas-p95.md
│
├── 📁 06-infraestrutura-de-dados-resiliencia-e-seguranca/ [2/6] (33%)
│   ├── 📁 01-bancos-de-dados-relacionais/ [1/1] (100%)
│   │   └── ✅ 01-sql-queries-complexas-indices-e-transacoes.md
│   ├── 📁 02-bancos-nosql/ [1/1] (100%)
│   │   └── ✅ 01-chave-valor-redis-e-orientados-a-documentos.md
│   ├── 📁 03-resiliencia-e-alta-concorrencia/ [0/2] (0%)
│   │   ├── ⏳ 01-cache-avancado-e-connection-poolers-pgbouncer.md
│   │   └── ⏳ 02-circuit-breaker-rate-limiting-e-bulkhead.md
│   └── 📁 04-seguranca-e-consistencia/ [0/2] (0%)
│       ├── ⏳ 01-hardening-containers-non-root-e-gestao-de-segredos.md
│       └── ⏳ 02-rbac-row-level-security-e-teorema-cap.md
│
├── 📁 07-base-exata-e-fundamentos-quantitativos/ [1/4] (25%)
│   ├── 📁 01-logica-matematica/ [1/1] (100%)
│   │   └── ✅ 01-algebra-booleana-e-tabelas-verdade.md
│   ├── 📁 02-calculo-aplicado/ [0/1] (0%)
│   │   └── ⏳ 01-derivadas-taxas-de-variacao-e-gradiente.md
│   ├── 📁 03-algebra-linear/ [0/1] (0%)
│   │   └── ⏳ 01-vetores-matrizes-e-embeddings.md
│   └── 📁 04-estatistica-aplicada/ [0/1] (0%)
│       └── ⏳ 01-distribuicoes-desvio-padrao-e-percentis-p50-p95-p99.md
│
├── 📁 08-inteligencia-artificial-aplicada/ [1/3] (33%)
│   ├── 📁 01-protocolos-de-ia/ [1/1] (100%)
│   │   └── ✅ 01-model-context-protocol-mcp.md
│   ├── 📁 02-avaliacao-e-otimizacao/ [0/1] (0%)
│   │   └── ⏳ 01-evals-precisao-rag-e-semantic-caching.md
│   └── 📁 03-engenharia-de-prompt/ [0/1] (0%)
│       └── ⏳ 01-structured-outputs-function-calling-e-json-schema.md
│
└── 📁 09-etapa-final-e-solucoes-de-mercado/ [0/1] (0%)
    └── 📁 01-portfolio-senior/ [0/1] (0%)
        └── ⏳ 01-arquiteturas-distribuidas-alta-disponibilidade-e-adrs.md
```

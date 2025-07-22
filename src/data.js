import format from "./format.js";

let data = {
  $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/refs/heads/v1.0.0/schema.json",
  basics: format.jsonResumeBasics({
    name: "Jeferson Silva",
    label: "Fullstack Sênior | AI | Tech Lead | Laravel | Vue.js | React.js | Docker | Node.js | NestJS",
    image: "",
    email: "jeferson.i.silva@gmail.com",
    phone: "+55 31 99527-1426",
    url: "https://jeff-silva.github.io",
    summary: `
      **Desenvolvedor Full-stack Sênior e Tech Lead** com mais de 10 anos de experiência em transformar desafios complexos em soluções tecnológicas eficazes e escaláveis. Especialista em:

      * **Integração de Sistemas** e implementação de **Inteligência Artificial** para otimização de processos.
      * **Arquiteturas de Alta Escalabilidade** e otimização de performance (incluindo SEO).
      * **Boas Práticas de Código** e liderança técnica em projetos complexos.

      Liderei o desenvolvimento de soluções que **reduziram significativamente os tempos de entrega** e **aprimoraram a experiência do usuário**, sempre com foco em qualidade e arquitetura robusta.
      <br />

      Pronto para desenvolver e integrar soluções que impulsionem o crescimento do seu negócio. **Vamos construir o futuro da sua tecnologia juntos.**
    `,
    location: {
      address: "",
      postalCode: "",
      city: "Belo Horizonte",
      region: "Minas Gerais",
      countryCode: "BR",
    },
    profiles: [
      {
        network: "Website",
        username: "jeff-silva",
        url: "https://jeff-silva.github.io/",
      },
      {
        network: "LinkedIn",
        username: "jeferson-siqueira",
        url: "https://www.linkedin.com/in/jeferson-siqueira/",
      },
      {
        network: "Github",
        username: "jeff-silva",
        url: "https://github.com/jeff-silva",
      },
    ],
  }),
  work: [
    // format.jsonResumeWork({
    //   name: "Labscript.dev (Empresa própria)",
    //   position: "Dev Fullstack",
    //   url: "https://labscript.dev",
    //   summary: `
    //     * Fundei e gerencio a Labscript.dev, uma empresa de serviços de desenvolvimento freelancer onde aplico minha expertise Fullstack para entregar soluções personalizadas para diversos clientes e projetos. <br />
    //     * Atuo em todo o ciclo de desenvolvimento, desde a concepção e arquitetura de sistemas até a implementação, testes e deploy, garantindo soluções escaláveis, eficientes e alinhadas com as necessidades de cada projeto. <br />
    //     * Minha experiência como freelancer me proporcionou a capacidade de me adaptar rapidamente a diferentes stacks tecnológicos, desafios de negócios e prazos, além de desenvolver excelentes habilidades de comunicação e gestão de projetos com clientes.
    //   `,
    //   startDate: "2011-01-01",
    //   // endDate: "",
    //   highlights: ["Empresa própria"],
    //   meta: {
    // summaryShort: `Fundador e gerente da Labscript.dev, onde atuo como Fullstack,
    //   entregando soluções personalizadas do planejamento ao deploy. Adapto-me a diversas stacks e
    //   gerencio projetos com excelência, garantindo escalabilidade e alinhamento com
    //   os objetivos do cliente.`,
    //   },
    // }),
    // format.jsonResumeWork({
    //   name: "Timesystem",
    //   position: "Dev Fullstack",
    //   summary: "Empresa voltada para segurança veicular.Desenvolvimento dos produtos internos da empresa.",
    //   startDate: "2024-12-15",
    //   endDate: "2025-05-15",
    // }),
    // format.jsonResumeWork({
    //   name: "Tecnol Sistemas de Autmoação",
    //   position: "Dev Fullstack",
    //   url: "https://sistemastecnol.com.br",
    //   summary: "Empresa voltada para segurança veicular. Desenvolvimento dos produtos internos da empresa.",
    //   startDate: "2024-01-29",
    //   endDate: "2024-06-07",
    // }),
    format.jsonResumeWork({
      name: "Cardcom",
      position: "Tech Lead",
      url: "http://capp2.cardcombh.com.br",
      summary: `
        * Liderei a reengenharia e implementação do sistema central da empresa do zero, migrando a arquitetura de Laravel 4 para NestJS.
        * Desenvolvi integralmente o painel administrativo e as interfaces específicas para clientes e diferentes setores (administração, produção, expedição), otimizando o fluxo de trabalho.
        * Automatizei o ciclo de vida do serviço de impressão de cartões de alta qualidade, desde o pedido do cliente, aprovação administrativa, até a gestão da produção e expedição.
        * Responsável pela construção completa da plataforma, garantindo escalabilidade, manutenção e aprimoramento contínuo dos processos internos e externos.
      `,
      startDate: "2023-12-01",
      endDate: "2025-05-01",
      meta: {
        summaryShort: `Liderança e reengenharia de um sistema central do zero (Laravel 4 para NestJS),
          incluindo desenvolvimento de painel administrativo e automação completa do ciclo de impressão de cartões.
          Assegurei escalabilidade e otimização de processos do pedido à expedição.`,
      },
    }),
    format.jsonResumeWork({
      name: "Search and Stay",
      position: "Dev Fullstack",
      url: "https://www.linkedin.com/company/search-and-stay/",
      startDate: "2022-12-31",
      endDate: "2023-11-30",
      summary: `
        * Responsável por realizar implementações de novas funcionalidades e correções de bugs no sistema Search and Stay. <br />
        * Atuação no desenvolvimento do frontend utilizando Vue.js e Nuxt.js, focando na [Mencione um aspecto específico do frontend, ex: usabilidade, performance, novas seções]. <br />
        * Desenvolvimento e manutenção do backend utilizando o framework Laravel, incluindo a criação e consumo de APIs e a lógica de negócio da aplicação. <br />
        * Trabalho com o plugin WordPress, realizando integrações ou modificações conforme a necessidade do sistema. <br />
        * Colaboração com a equipe para garantir a qualidade do código e a entrega de soluções eficientes.
      `,
    }),
    // format.jsonResumeWork({
    //   name: "Rehagro",
    //   position: "Dev Fullstack",
    //   url: "https://www.linkedin.com/company/rehagro/",
    //   summary: `Implementações e correções no sistema Rehagro.`,
    //   startDate: "2022-09-12",
    //   endDate: "2022-12-09",
    // }),
    // format.jsonResumeWork({
    //   name: "Iterative;",
    //   position: "Frontend Developer",
    //   summary: ``,
    //   startDate: "2022-08-01",
    //   endDate: "2022-09-12",
    // }),
    format.jsonResumeWork({
      name: "Listra",
      position: "Dev Fullstack",
      url: "https://www.linkedin.com/company/listradigital/",
      startDate: "2020-10-31",
      endDate: "2022-04-30",
      summary: `
        * Atuei como Desenvolvedor Fullstack, participando ativamente do desenvolvimento de sistemas web de alta visibilidade para clientes como Unidas Seminovos (busca de veículos), Samy Dana (site Alugar ou Comprar) e EPA Supermercados. <br />
        * Experiência no desenvolvimento de soluções completas, abrangendo tanto o frontend (com Vue.js e React.js) quanto o backend (utilizando frameworks como Laravel e CakePHP). <br />
        * Colaboração em equipes multidisciplinares para entregar funcionalidades complexas e otimizar a performance das aplicações. <br />
        * Contribuição para a criação de interfaces de usuário intuitivas e eficientes, além da implementação de lógicas de negócio robustas no backend.
      `,
    }),
    format.jsonResumeWork({
      name: "Codificar Sistemas Tecnológicos",
      position: "Dev Fullstack",
      url: "https://www.linkedin.com/company/codificar/",
      startDate: "2017-02-28",
      endDate: "2017-10-31",
      summary: `
        * Atuei como Desenvolvedor Fullstack, participando ativamente do ciclo de vida de diversos sistemas web. <br />
        * Experiência no desenvolvimento de soluções tanto no frontend (com Vue.js e React.js) quanto no backend (principalmente com Laravel). <br />
        * Expertise em integrações com APIs externas, incluindo a API da Google para funcionalidades como sincronização de agendas e calendários. <br />
        * Colaboração com a equipe no desenvolvimento e implementação de funcionalidades complexas em diferentes projetos web.
      `,
    }),
    format.jsonResumeWork({
      name: "Agência de Criação",
      position: "Dev Fullstack",
      url: "https://www.linkedin.com/company/ag%C3%AAncia-de-cria%C3%A7%C3%A3o/",
      startDate: "2015-01-31",
      endDate: "2017-02-28",
      summary: `
        * Responsável pelo desenvolvimento e evolução do CMS proprietário da agência, com foco nas tecnologias frontend Vue.js e Angular.js. <br />
        * Atuação direta na identificação e implementação de melhorias arquiteturais e de código. <br />
        * Contribuição significativa para otimizar a velocidade de correção de bugs e o tempo de entrega de projetos web.
      `,
    }),
    format.jsonResumeWork({
      name: "Cushman & Wakefield",
      position: "Dev Fullstack",
      url: "https://www.linkedin.com/company/cushman-and-wakefield/",
      startDate: "2012-05-02",
      endDate: "2013-11-08",
      summary: `
        * Atuei como Desenvolvedor Fullstack terceirizado para a Vale do Rio Doce, sendo responsável pela análise das necessidades dos engenheiros e pela transformação de planilhas complexas em aplicações web robustas e intuitivas ([Mencione as tecnologias principais aqui, ex: PHP, Javascript, algum framework específico]). <br />
        * Impacto: Eliminei os problemas recorrentes de perda de dados devido à corrupção de arquivos Excel e desbloqueei a colaboração simultânea de múltiplos engenheiros em um mesmo projeto, aumentando a eficiência do trabalho em equipe. <br />
        * Em um projeto específico, desenvolvi uma interface inovadora com um gráfico de curva de Gauss para automatizar o preenchimento de dados de contratação mensal, reduzindo o tempo necessário para essa tarefa. A solução recebeu feedback positivo significativo pela sua usabilidade e eficiência.
      `,
    }),
    format.jsonResumeWork({
      name: "Netranet Networking",
      position: "Dev Fullstack",
      url: "https://www.linkedin.com/company/netranet-networking/",
      startDate: "2011-01-13",
      endDate: "2012-01-13",
      summary: `
        * Responsável pelo desenvolvimento do CMS proprietário da agência, desde a concepção da arquitetura até a implementação das funcionalidades utilizando como base PHP, Javascript e MySQL juntamente com outras bibliotecas amplamente utilizadas na época. <br />
        * Liderança na criação de uma plataforma que aumentou significativamente o controle da agência sobre o código fonte, permitindo uma resolução de problemas mais rápida e eficiente. <br />
        * A implementação do novo CMS elevou a flexibilidade das soluções oferecidas aos clientes, possibilitando a criação de produtos mais personalizados e adaptáveis às suas necessidades.
      `,
    }),
    format.jsonResumeWork({
      name: "Web BH Escola de Informática",
      position: "Instrutor",
      // url: null,
      startDate: "2010-01-31",
      endDate: "2011-01-31",
      summary: `
        * Atuei como instrutor de diversos cursos de desenvolvimento web, incluindo PHP, MySQL, SQL Server, CSS, Javascript, HTML5, Tableless e Action script, para alunos de diferentes níveis de conhecimento. <br />
        * Responsável por planejar e ministrar aulas teóricas e práticas, criar materiais didáticos e avaliar o progresso dos alunos, garantindo a assimilação dos conceitos e o desenvolvimento de habilidades práticas. <br />
        * Desenvolvi fortes habilidades de comunicação, didática e liderança técnica ao guiar os alunos no aprendizado de tecnologias fundamentais para o desenvolvimento web. <br />
        * A experiência como instrutor me proporcionou uma compreensão aprofundada dos conceitos básicos e avançados dessas tecnologias, além da capacidade de explicar temas complexos de forma clara e acessível.
      `,
    }),
  ],
  volunteer: [
    // format.jsonResumeVolunteer({}),
  ],
  education: [
    format.jsonResumeEducation({
      institution: "WebBH Escola de Informática",
      area: "Desenvolvimento Web",
      studyType: "Ensino Técnico",
      startDate: "2009-03-31",
      endDate: "2010-09-30",
      courses: ["PHP", "MySQL", "SQL Server", "CSS", "Javascript", "HTML5", "Tableless", "Action script"],
    }),
    // format.jsonResumeEducation({
    //   institution: "Centro Universitário UNA",
    //   area: "Cinema e Audiovisual",
    //   studyType: "Bacharelado",
    //   startDate: "2014-12-31",
    //   endDate: "2017-12-31",
    //   courses: [
    //     "História da Arte",
    //     "História do Cinema",
    //     "Roteiro",
    //     "Direção",
    //     "Fotografia",
    //     "Direção de fotografia",
    //     "Direção de Arte",
    //     "Teoria do Som",
    //     "Captação de Som",
    //     "Montagem e Edição",
    //     "Análise Crítica",
    //     "Animação",
    //     "Semiótica",
    //     "Legislação e Direito Autoral",
    //   ],
    // }),
    format.jsonResumeEducation({
      institution: "Unicesumar",
      area: "Inteligência Artificial e Machine Learning",
      studyType: "Bacharelado",
      startDate: "2025-01-01",
      // endDate: "2017-12-31",
      courses: [
        "Inteligência Artificial e Machine Learning",
        "Fundamentos de Big Data",
        "Go - Projeto de Vida",
        "Matemática Aplicada à Computação",
      ],
    }),
  ],
  awards: [
    // format.jsonResumeAward({}),
  ],
  certificates: [
    // format.jsonResumeCertificate({}),
  ],
  publications: [
    // format.jsonResumePublication({}),
  ],
  skills: [
    format.jsonResumeSkill({ name: "Vue 3", keywords: ["Frontend", "Main Stack"] }),
    format.jsonResumeSkill({ name: "Laravel", keywords: ["Backend", "Main Stack"] }),
    format.jsonResumeSkill({ name: "React", keywords: ["Frontend"] }),
    format.jsonResumeSkill({ name: "Node.js", keywords: ["Backend", "Main Stack"] }),
    format.jsonResumeSkill({ name: "PHP", keywords: ["Backend", "Main Stack"] }),
    format.jsonResumeSkill({ name: "Docker", keywords: ["Main Stack"] }),
    format.jsonResumeSkill({ name: "Docker Compose", keywords: ["Main Stack"] }),
    format.jsonResumeSkill({ name: "Nuxt 3", keywords: ["Main Stack"] }),
    format.jsonResumeSkill({ name: "API REST", keywords: [] }),
    format.jsonResumeSkill({ name: "Bootstrap", keywords: [] }),
    format.jsonResumeSkill({ name: "Otimização de página", keywords: [] }),
    format.jsonResumeSkill({ name: "Arquitetura MVC", keywords: [] }),
    format.jsonResumeSkill({ name: "Documentação", keywords: [] }),
    format.jsonResumeSkill({ name: "SOAP", keywords: [] }),
    format.jsonResumeSkill({ name: "HTML5", keywords: [] }),
    format.jsonResumeSkill({ name: "Git", keywords: ["Main Stack"] }),
    format.jsonResumeSkill({ name: "PWA", keywords: [] }),
    format.jsonResumeSkill({ name: "Unity", keywords: ["Game"] }),
    format.jsonResumeSkill({ name: "Firebase", keywords: [] }),
    format.jsonResumeSkill({ name: "MySQL", keywords: ["Main Stack", "Database"] }),
    format.jsonResumeSkill({ name: "Elementor", keywords: [] }),
    format.jsonResumeSkill({ name: "YARN", keywords: [] }),
    format.jsonResumeSkill({ name: "Javascript", keywords: ["Main Stack"] }),
    format.jsonResumeSkill({ name: "Typescript", keywords: ["Main Stack"] }),
    format.jsonResumeSkill({ name: "WooCommerce", keywords: [] }),
    format.jsonResumeSkill({ name: "Responsividade", keywords: [] }),
    format.jsonResumeSkill({ name: "Vuetify", keywords: ["Main Stack"] }),
    format.jsonResumeSkill({ name: "Linux", keywords: ["Main Stack"] }),
    format.jsonResumeSkill({ name: "JQuery", keywords: [] }),
    format.jsonResumeSkill({ name: "WordPress", keywords: [] }),
    format.jsonResumeSkill({ name: "NPM", keywords: [] }),
    format.jsonResumeSkill({ name: "Scrum", keywords: [] }),
    format.jsonResumeSkill({ name: "CSS3", keywords: [] }),
    format.jsonResumeSkill({ name: "Postgres", keywords: ["Main Stack"] }),
    format.jsonResumeSkill({ name: "Keycloak", keywords: [] }),
    format.jsonResumeSkill({ name: "Clean Architecture", keywords: [] }),
    format.jsonResumeSkill({ name: "Clean Code", keywords: [] }),
    format.jsonResumeSkill({ name: "DynamoDB", keywords: [] }),
    format.jsonResumeSkill({ name: "SEO", keywords: [] }),
    format.jsonResumeSkill({ name: "Design Patterns", keywords: [] }),
    format.jsonResumeSkill({ name: "Express.js", keywords: [] }),
    format.jsonResumeSkill({ name: "Three.js", keywords: ["Game"] }),
    format.jsonResumeSkill({ name: "Babylon", keywords: ["Game"] }),
    format.jsonResumeSkill({ name: "Pagseguro", keywords: ["Gateway de Pagamento"] }),
    format.jsonResumeSkill({ name: "Stripe", keywords: ["Gateway de Pagamento"] }),
    format.jsonResumeSkill({ name: "SASS", keywords: [] }),
    format.jsonResumeSkill({ name: "LESS", keywords: [] }),
    format.jsonResumeSkill({ name: "Rapier.js", keywords: ["Game"] }),
    format.jsonResumeSkill({ name: "Composer", keywords: [] }),
    format.jsonResumeSkill({ name: "VuePress", keywords: [] }),
    format.jsonResumeSkill({ name: "MongoDB", keywords: [] }),
    format.jsonResumeSkill({ name: "Google Compute Engine", keywords: [] }),
    format.jsonResumeSkill({ name: "Integração AI", keywords: [] }),
    format.jsonResumeSkill({ name: "Python", keywords: [] }),
    format.jsonResumeSkill({ name: "AdonisJS 6", keywords: [] }),
    format.jsonResumeSkill({ name: "Cálculos geospaciais", keywords: [] }),
    format.jsonResumeSkill({ name: "Mapas", keywords: [] }),
    format.jsonResumeSkill({ name: "NestJS", keywords: ["Main Stack"] }),
  ],
  languages: [
    format.jsonResumeLanguage({ language: "Português Brasileiro", fluency: "Nativo" }),
    format.jsonResumeLanguage({ language: "Inglês", fluency: "Leitura e Escrita" }),
  ],
  interests: [
    format.jsonResumeInterest({ name: "Ciclismo", keywords: ["Bem Estar", "Desafios"] }),
    format.jsonResumeInterest({
      name: "Música (Tocar)",
      keywords: ["Disciplina", "Habilidades Motoras", "Criatividade"],
    }),
  ],
  references: [
    // format.jsonResumeReference({}),
  ],
  projects: [
    format.jsonResumeProject({
      name: "Corapost",
      description: `
        Desenvolvimento da interface do usuário (UI) para o projeto Corapost, com base no design fornecido no Figma. Utilizei Vue.js, HTML, CSS e JavaScript criando um plugin Wordpress para transformar o design em um frontend funcional e responsivo.
      `,
      url: "https://corapost.com",
      startDate: "2024-07-01",
      endDate: "2024-04-30",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Search and Stay",
      description: `
        Responsável pela evolução contínua do sistema Search and Stay, atuando no desenvolvimento de novas funcionalidades e na resolução eficiente de bugs. Minha expertise abrange a criação de interfaces de usuário dinâmicas e responsivas com Vue.js e Nuxt.js no frontend, a construção de um backend robusto e escalável utilizando Laravel, e a integração e personalização do plugin WordPress para atender requisitos específicos do sistema. Colaborei ativamente com a equipe para garantir a entrega de um produto de alta qualidade e performance.
      `,
      url: "https://searchandstay.com",
      startDate: "2022-12-31",
      endDate: "2023-11-30",
    }),
    format.jsonResumeProject({
      name: "O Novo Mercado",
      description: `
        Responsável pelo desenvolvimento do frontend da plataforma interna de vídeos e hub de profissionais "O Novo Mercado", utilizando Vue.js e a biblioteca de componentes Vuetify. Minha atuação focou na criação de uma interface de usuário intuitiva, responsiva e visualmente atraente para facilitar a navegação e a interação dos usuários com o conteúdo de vídeo e o perfil dos profissionais. Otimizei a performance da aplicação para garantir uma experiência fluida e eficiente, contribuindo para o engajamento dos usuários na plataforma.
      `,
      url: "https://onovomercado.com/",
      startDate: "2022-02-28",
      endDate: "2022-07-31",
    }),
    format.jsonResumeProject({
      name: "Assinar ou comprar",
      description: `
        Responsável pelo desenvolvimento da calculadora "Assinar ou Comprar", uma ferramenta estratégica desenvolvida em parceria com a Unidas e Samy Dana para auxiliar usuários na decisão entre comprar ou alugar um carro. Atuei no desenvolvimento Fullstack, utilizando Laravel, Vue.js e Element UI para criar uma aplicação intuitiva e precisa. O foco foi em implementar a lógica de cálculo complexa de forma eficiente e apresentar os resultados de maneira clara e acessível aos usuários, impactando diretamente na tomada de decisão informada sobre mobilidade.
      `,
      url: "https://web.archive.org/web/20211217154133/https://assinaroucomprar.com.br/",
      startDate: "2021-12-31",
      endDate: "2021-12-31",
      highlights: ["Listra"],
    }),
    format.jsonResumeProject({
      name: "Samarco",
      description: `
        Em colaboração estratégica com a agência Belo Horizontina Digital Pixel, liderei o desenvolvimento e a implementação de um eficiente gerenciador de conteúdo para a Samarco, utilizando a combinação poderosa de Wordpress e Elementor. Minha atuação envolveu a criação de um sistema dinâmico e versátil que simplificou a administração e apresentação de conteúdo online, resultando em maior eficácia na comunicação digital da Samarco. A expertise na integração da flexibilidade do Wordpress com a intuitividade do Elementor permitiu a construção de uma solução robusta, focada na facilidade de uso para o cliente e na entrega de uma experiência de usuário aprimorada através de design avançado e interatividade otimizada.
      `,
      url: "https://web.archive.org/web/20220130172103/https://www.samarco.com/",
      startDate: "2020-08-31",
      endDate: "2020-10-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Faculdade Faveni",
      description: `
        Responsável pela estilização avançada e customização de componentes do tema da Faculdade Faveni, utilizando a plataforma Wordpress com arquitetura Multisite. Minha atuação envolveu a adaptação visual e funcional do tema para atender às necessidades específicas de cada site da rede, garantindo a identidade visual da instituição e aprimorando a experiência do usuário. Trabalhei na otimização do CSS e na manipulação de funcionalidades através de hooks e filtros do Wordpress, assegurando a consistência e a performance da plataforma Multisite.
      `,
      url: "https://web.archive.org/web/20220131193706/https://faveni.edu.br/",
      startDate: "2020-12-31",
      endDate: "2021-12-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Orbitae",
      description: `Desenvolvemos apresentações de produtos especializados em perícia forense,
        integrando Wordpress e Elementor com elementos personalizados.
        Essa parceria estratégica com a Partners Comunicação Pro Business resultou em uma plataforma
        dinâmica e visualmente cativante. Combinando a flexibilidade do Wordpress e a criatividade do Elementor,
        criamos uma experiência de usuário impactante para os produtos, garantindo destaque e acessibilidade
        aos detalhes técnicos. Essa colaboração permitiu a construção de uma plataforma dinâmica e eficiente,
        facilitando a apresentação e a compreensão dos produtos para um público amplo e diversificado.`,
      url: "https://web.archive.org/web/20210517192720/https://orbitae.com.br/",
      startDate: "2019-01-31",
      endDate: "2019-08-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Blog Banco da Amazônia",
      description: `
        Em parceria com a Partners Comunicação Pro Business, desenvolvi e mantive o blog de Notícias e Utilidades do Banco da Amazônia, utilizando a plataforma Wordpress e o page builder Elementor. Minha atuação envolveu a criação e customização de elementos personalizados para atender às necessidades específicas do conteúdo e da identidade visual do Banco. Trabalhei na estruturação do layout, na otimização da experiência do usuário e na garantia da responsividade do site, contribuindo para uma comunicação eficaz e acessível das informações do Banco da Amazônia.
      `,
      url: "https://web.archive.org/web/20211229163534/https://basablog.com.br/",
      startDate: "2019-12-31",
      endDate: "2019-12-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Habitat Group",
      description: `
        Responsável pelo desenvolvimento completo do website da clínica veterinária Habitat Group, utilizando a plataforma Wordpress e o page builder Elementor. Meu foco principal foi criar uma interface amigável e personalizada que facilitasse o acesso dos tutores às informações sobre os serviços da clínica, a qualificação dos profissionais e o sistema de agendamento de consultas. A arquitetura do site foi pensada para proporcionar uma experiência de usuário intuitiva e eficiente, refletindo o compromisso da Habitat Group com o atendimento de qualidade aos animais de estimação e seus tutores.
      `,
      url: "https://web.archive.org/web/20220110082741/https://habitatgroup.com.br/",
      startDate: "2019-12-31",
      endDate: "2019-12-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Cocks Skate",
      description: `
        Responsável pelo desenvolvimento e otimização do e-commerce especializado em produtos para skatistas "Cocks Skate", utilizando a plataforma Wordpress, o plugin WooCommerce e o page builder Elementor com elementos customizados. Minha atuação focou na criação de uma experiência de compra personalizada e intuitiva, com navegação e busca de produtos facilitadas. A integração dessas ferramentas garantiu um site dinâmico, com funcionalidades de e-commerce completas, um design atraente e responsivo, visando atender às necessidades e interesses específicos do público skatista e impulsionar as vendas.
      `,
      url: "https://web.archive.org/web/20211226170044/https://cocksskate.com.br/",
      startDate: "2018-12-31",
      endDate: "2018-12-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Don Desenvolvimento",
      description: `
        Responsável por realizar alterações no layout original e fornecer manutenções pontuais no website da Don Desenvolvimento, utilizando a plataforma Wordpress e a biblioteca JavaScript Vue.js. Minha atuação envolveu a adaptação e otimização do design existente, a implementação de novas funcionalidades utilizando Vue.js para uma experiência de usuário mais interativa, e a resolução eficiente de problemas e bugs para garantir a estabilidade e o bom funcionamento do site.
      `,
      url: "https://web.archive.org/web/20181224004334/http://dondesenvolvimento.com.br/",
      startDate: "2018-12-31",
      endDate: "2018-12-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Eiriz Saúde",
      description: `
        Responsável pela concepção e desenvolvimento exclusivo do sistema Wordpress para a clínica odontológica Eiriz Saúde, localizada em Porto, Portugal. Este projeto foi uma parceria dedicada a aprimorar a experiência do usuário e a eficiência dos serviços oferecidos online. O sistema incorporou recursos avançados de gerenciamento de conteúdo, com foco em usabilidade e interação fluida, garantindo a apresentação precisa dos serviços, a transmissão eficaz de informações aos pacientes e proporcionando uma experiência online completa e informativa.
      `,
      url: "http://eiriz-saude.unbox.pt",
      startDate: "2018-12-31",
      endDate: "2018-12-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Águas do Acuruí",
      description: `
        Responsável pelo desenvolvimento completo e personalizado do website para a cidade de Águas do Acuruí, utilizando a plataforma Wordpress como base. O projeto envolveu a construção meticulosa de um tema exclusivo, projetado sob medida para atender às demandas específicas e refletir a identidade singular da cidade, visando promover a região de forma cativante e informativa. Cada elemento do design e funcionalidade foi cuidadosamente planejado e implementado para destacar a autenticidade e os pontos fortes de Águas do Acuruí, proporcionando uma experiência online única e envolvente para os visitantes.
      `,
      url: "https://web.archive.org/web/20210302055106/http://aguasdoacurui.com.br/",
      startDate: "2017-12-31",
      endDate: "2017-12-31",
      highlights: ["Agência de Criação"],
    }),
    format.jsonResumeProject({
      name: "Cantor Beto Santos",
      description: `
        Responsável pelo desenvolvimento completo do website do Cantor Beto Santos, implementando um CMS personalizado com recursos únicos, incluindo um player de música integrado. Uma funcionalidade chave do projeto foi a criação de um sistema intuitivo que permite o upload e a reprodução das músicas do cantor diretamente através do painel administrativo. Destaque para o design estratégico dos controles de reprodução, posicionados tanto no topo quanto no corpo do site, proporcionando uma experiência de usuário fluida e ininterrupta na audição das músicas durante a navegação.
      `,
      url: "https://web.archive.org/web/20211127021144/http://betosantos.net/",
      startDate: "2017-12-31",
      endDate: "2017-12-31",
      highlights: ["Agência de Criação"],
    }),
    format.jsonResumeProject({
      name: "Estrela Rural",
      description: `
        Responsável pelo desenvolvimento e implementação de um sistema de gerenciamento de conteúdo (CMS) e de leilões totalmente personalizado para atender às necessidades específicas da Estrela Rural. O projeto envolveu a concepção e a construção meticulosa de uma solução completa, baseada na plataforma customizada da agência, que otimizou a administração de conteúdo e a realização de leilões online de forma eficiente. A expertise aplicada na criação desta solução sob medida demonstrou a capacidade de entregar ferramentas que agregam valor significativo e melhoram a eficiência dos processos de gestão e negócios do cliente.
      `,
      url: "https://web.archive.org/web/20220110211402/http://estrelarural.com.br/",
      startDate: "2012-12-31",
      endDate: "2012-12-31",
      highlights: ["Agência de Criação"],
    }),
    format.jsonResumeProject({
      name: "ASSEMG",
      description: `
        Responsável pelo desenvolvimento e adaptação de um CMS exclusivo para o website da ASSEMG (Associação dos Empregados da MGS), com foco em atender às necessidades específicas da associação e proporcionar uma experiência de usuário única aos membros. O trabalho envolveu a customização meticulosa do CMS para garantir uma plataforma eficiente e funcional, oferecendo ferramentas específicas para a gestão interna, comunicação segura e interação personalizada entre os membros, facilitando a administração dos recursos disponíveis e agregando valor à experiência associativa online.
      `,
      url: "https://web.archive.org/web/20170612004919/http://assemg.org/",
      startDate: "2012-12-31",
      endDate: "2012-12-31",
      highlights: ["Agência de Criação"],
    }),
    format.jsonResumeProject({
      name: "Manduí",
      description: `
        Responsável pelo desenvolvimento completo do website da Escola Infantil Manduí, uma plataforma criada para refletir seu ambiente acolhedor e abordagem educacional abrangente para crianças de 4 meses a 6 anos. O projeto utilizou tecnologias avançadas como Nuxt 3, Vue 3 e Vuetify 3 no frontend para garantir uma experiência interativa e informativa para pais e responsáveis. Para o backend, desenvolvi uma interface intuitiva com um painel lateral dinâmico para edição de elementos, com persistência de dados serverless através do Firebase, assegurando escalabilidade e eficiência.
      `,
      url: "https://mandui.com.br",
      startDate: "2023-01-01",
      endDate: "2023-01-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Safe Register Car",
      description: `
        Participei ativamente da construção do sistema Safe Register Car, uma solução desenvolvida pela Tecnol para otimizar o processo de envio de documentação veicular para seguradoras em nível nacional. Minha atuação como Desenvolvedor Fullstack envolveu a criação de uma interface de usuário intuitiva e simples para o cliente final utilizando Vue.js no frontend, facilitando o envio eficiente dos documentos necessários. No backend, utilizei Laravel para desenvolver a lógica da aplicação, o gerenciamento dos dados e a comunicação com as seguradoras, contribuindo para um fluxo de trabalho mais ágil e eficaz.
      `,
      url: "https://saferegistercar.com.br",
      startDate: "2023-12-15",
      endDate: "2024-06-01",
      highlights: [],
    }),
    format.jsonResumeProject({
      name: "Tecnohub",
      description: `
        Participei da construção e evolução do Tecnohub, uma plataforma centralizada da Tecnol que visa otimizar a comunicação e a interação entre a empresa, seus apoiadores, clientes e seguradoras. Minha atuação como Desenvolvedor Fullstack envolveu o desenvolvimento de funcionalidades para facilitar o fluxo de informações e a colaboração entre esses diferentes stakeholders. Trabalhei tanto no frontend, criando interfaces intuitivas para cada tipo de usuário, quanto no backend, desenvolvendo a lógica de negócio e as APIs necessárias para integrar os diversos serviços e garantir uma comunicação eficiente e transparente dentro do ecossistema Tecnol.
      `,
      startDate: "2023-12-15",
      endDate: "2024-06-01",
      highlights: [],
    }),
    // format.jsonResumeProject({
    //   name: "EPA",
    //   url: "https://www.epa.com.br",
    // }),
    // format.jsonResumeProject({
    //   name: "Unidas Seminovos",
    //   url: "https://seminovos.unidas.com.br",
    // }),
    // format.jsonResumeProject({
    //   name: "Rehagro",
    //   url: "https://rehagro.com.br",
    // }),
  ],
  meta: {
    version: "v1.0.0",
    canonical: "https://github.com/jsonresume/resume-schema/blob/v1.0.0/schema.json",
    updatedAt: {
      date: "2023-12-06T14:20:14-03:00",
      formatted: "Dec 2023",
    },
  },
};

const dateStartEndSort = (a, b) => {
  if (a.endDate === null && b.endDate !== null) {
    return -1;
  }

  if (a.endDate !== null && b.endDate === null) {
    return 1;
  }

  const dateA = new Date(a.startDate);
  const dateB = new Date(b.startDate);

  if (dateA > dateB) {
    return -1;
  }
  if (dateA < dateB) {
    return 1;
  }

  return 0;
};

data.work = data.work.sort(dateStartEndSort);
data.projects = data.projects.sort(dateStartEndSort);
data.education = data.education.sort(dateStartEndSort);

data.skills = data.skills.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

export default data;

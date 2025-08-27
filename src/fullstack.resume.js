import Resume from "./resume.js";

export default class FullstackResume extends Resume {
  profile = "fullstack-dev";

  getData() {
    const experienceYears = new Date().getFullYear() - 2011;

    return {
      $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/refs/heads/v1.0.0/schema.json",
      meta: {
        version: "v1.0.0",
        canonical: "https://github.com/jsonresume/resume-schema/blob/v1.0.0/schema.json",
        updatedAt: {
          date: "2023-12-06T14:20:14-03:00",
          formatted: "Dec 2023",
        },
      },
      basics: {
        name: "Jeferson Silva",
        label: "Fullstack Sênior | AI | Tech Lead | Laravel | Vue.js | Docker | Node.js | NestJS",
        image: "",
        email: "jeferson.i.silva@gmail.com",
        phone: "+55 31 99527-1426",
        url: "https://jeff-silva.github.io",
        summary: `
          **Desenvolvedor Full-stack Sênior e Tech Lead** há **${experienceYears} anos** transformarmando desafios complexos em soluções tecnológicas eficazes e escaláveis. Especialista em:

          * **Integração de Sistemas** e implementação de **Inteligência Artificial**, para otimização de processos.
          * **Arquiteturas de Alta Escalabilidade** e otimização de performance (incluindo SEO).
          * **Boas Práticas de Código** e liderança técnica em projetos complexos.

          Liderei o desenvolvimento de soluções que **reduziram significativamente os tempos de entrega** e **aprimoraram a experiência do usuário**, sempre com foco em qualidade e arquitetura robusta.
          <br />

          Pronto para desenvolver e integrar soluções que impulsionem o crescimento do seu negócio. **Vamos construir o futuro da sua tecnologia juntos**.
        `,
        location: this.locationDefault({
          address: "",
          postalCode: "",
          city: "Belo Horizonte",
          region: "Minas Gerais",
          countryCode: "BR",
        }),
        profiles: [
          this.basicsProfilesDefault({
            network: "Website",
            username: "jeff-silva",
            url: "https://jeff-silva.github.io/",
          }),
          this.basicsProfilesDefault({
            network: "LinkedIn",
            username: "jeferson-siqueira",
            url: "https://www.linkedin.com/in/jeferson-siqueira/",
          }),
          this.basicsProfilesDefault({
            network: "Github",
            username: "jeff-silva",
            url: "https://github.com/jeff-silva",
          }),
        ],
      },
      work: [
        // this.workDefault({
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
        // this.workDefault({
        //   name: "Timesystem",
        //   position: "Dev Fullstack",
        //   summary: "Empresa voltada para segurança veicular.Desenvolvimento dos produtos internos da empresa.",
        //   startDate: "2024-12-15",
        //   endDate: "2025-05-15",
        // }),
        // this.workDefault({
        //   name: "Tecnol Sistemas de Autmoação",
        //   position: "Dev Fullstack",
        //   url: "https://sistemastecnol.com.br",
        //   summary: "Empresa voltada para segurança veicular. Desenvolvimento dos produtos internos da empresa.",
        //   startDate: "2024-01-29",
        //   endDate: "2024-06-07",
        // }),
        this.workDefault({
          name: "Cardcom",
          position: "Tech Lead",
          url: "http://capp2.cardcombh.com.br",
          summary: `
        * **Liderança** e **reengenharia** do **sistema central** da empresa do zero, migrando a arquitetura de **Laravel 4 para NestJS**.
        * Desenvolvimento **full-stack** de painel administrativo e interfaces para clientes e setores (administração, produção, expedição), **otimizando fluxos de trabalho**.
        * **Automação completa** do ciclo de impressão de cartões: do pedido do cliente, aprovação administrativa, até gestão de produção e expedição, garantindo **eficiência e qualidade**.
        * Construção de uma plataforma **escalável** e de **alta manutenção**, com foco no aprimoramento contínuo dos processos.
      `,
          startDate: "2023-12-01",
          endDate: "2025-05-01",
          meta: {
            summaryShort: `Liderança e reengenharia de um sistema central do zero (Laravel 4 para NestJS),
          incluindo desenvolvimento de painel administrativo e automação completa do ciclo de impressão de cartões.
          Assegurei escalabilidade e otimização de processos do pedido à expedição.`,
          },
        }),
        this.workDefault({
          name: "Search and Stay",
          position: "Dev Fullstack",
          url: "https://www.linkedin.com/company/search-and-stay/",
          startDate: "2022-12-31",
          endDate: "2023-11-30",
          summary: `
        * Desenvolvimento **Full-stack** (Vue.js, Nuxt.js, Laravel) no sistema Search and Stay, focando na **implementação de funcionalidades, correção de bugs e otimização de performance do frontend**.
        * Criação e manutenção de **APIs** e lógica de negócio no backend, além de integrações e customizações com **WordPress**.
        * Colaboração ativa com a equipe para garantir a **qualidade do código** e a **eficiência das entregas**.
      `,
        }),
        // this.workDefault({
        //   name: "Rehagro",
        //   position: "Dev Fullstack",
        //   url: "https://www.linkedin.com/company/rehagro/",
        //   summary: `Implementações e correções no sistema Rehagro.`,
        //   startDate: "2022-09-12",
        //   endDate: "2022-12-09",
        // }),
        // this.workDefault({
        //   name: "Iterative;",
        //   position: "Frontend Developer",
        //   summary: ``,
        //   startDate: "2022-08-01",
        //   endDate: "2022-09-12",
        // }),
        this.workDefault({
          name: "Listra",
          position: "Dev Fullstack",
          url: "https://www.linkedin.com/company/listradigital/",
          startDate: "2020-10-31",
          endDate: "2022-04-30",
          summary: `
        * Atuação **Fullstack** (Vue.js, React.js, Laravel, CakePHP) no desenvolvimento de **sistemas web de alta visibilidade** para grandes clientes como Unidas Seminovos, Samy Dana e EPA Supermercados.
        * Responsável pela entrega de **soluções completas**, desde interfaces intuitivas até lógicas de negócio robustas no backend.
        * Colaboração em equipes multidisciplinares para desenvolver **funcionalidades complexas** e **otimizar a performance** de aplicações de larga escala.
      `,
        }),
        this.workDefault({
          name: "Codificar Sistemas Tecnológicos",
          position: "Dev Fullstack",
          url: "https://www.linkedin.com/company/codificar/",
          startDate: "2017-02-28",
          endDate: "2017-10-31",
          summary: `
        * Atuação **Fullstack** (Vue.js, React.js, Laravel) no desenvolvimento e implementação de **sistemas web diversos**.
        * **Expertise em integrações com APIs externas**, incluindo a API da Google para sincronização de agendas e calendários.
        * Colaboração em equipe para desenvolver **funcionalidades complexas** em diferentes projetos web.
      `,
        }),
        this.workDefault({
          name: "Agência de Criação",
          position: "Dev Fullstack",
          url: "https://www.linkedin.com/company/ag%C3%AAncia-de-cria%C3%A7%C3%A3o/",
          startDate: "2015-01-31",
          endDate: "2017-02-28",
          summary: `
        * **Desenvolvimento e evolução do CMS proprietário** da agência (Vue.js, Angular.js), com foco em **melhorias arquiteturais e de código**.
        * Contribuição significativa para a **otimização da velocidade de correção de bugs** e a **redução do tempo de entrega** de projetos web.
      `,
        }),
        this.workDefault({
          name: "Cushman & Wakefield",
          position: "Dev Fullstack",
          url: "https://www.linkedin.com/company/cushman-and-wakefield/",
          startDate: "2012-05-02",
          endDate: "2013-11-08",
          summary: `
        * Atuação **Fullstack** (PHP, JavaScript, [Mencione o framework específico aqui, ex: jQuery, Vue.js inicial]) como terceirizado para a **Vale do Rio Doce**, transformando **planilhas complexas em aplicações web robustas**.
        * **Impacto Direto:** **Eliminei a perda de dados** por corrupção de Excel e **desbloqueei a colaboração simultânea**, **aumentando a eficiência** da equipe de engenharia.
        * Desenvolvi **interface inovadora com automação** (gráfico de curva de Gauss) que **reduziu o tempo de preenchimento de dados** de contratação mensal, com **feedback positivo** pela usabilidade.
      `,
        }),
        this.workDefault({
          name: "Netranet Networking",
          position: "Dev Fullstack",
          url: "https://www.linkedin.com/company/netranet-networking/",
          startDate: "2011-01-13",
          endDate: "2012-01-13",
          summary: `
        * **Liderança** no desenvolvimento e implementação de um **CMS proprietário** (PHP, JavaScript, MySQL), que **aumentou o controle** sobre o código-fonte e a **flexibilidade** na entrega de soluções personalizadas, **agilizando a resolução de problemas**.
      `,
        }),
        this.workDefault({
          name: "Web BH Escola de Informática",
          position: "Instrutor",
          // url: null,
          startDate: "2010-01-31",
          endDate: "2011-01-31",
          summary: `
        * Atuação como instrutor de desenvolvimento web (PHP, MySQL, Javascript, HTML/CSS), capacitando alunos em diversas tecnologias e aprimorando **habilidades de comunicação, didática e liderança técnica**.
      `,
        }),
      ],
      volunteer: [
        // this.volunteerDefault({}),
      ],
      education: [
        this.educationDefault({
          institution: "WebBH Escola de Informática",
          area: "Desenvolvimento Web",
          studyType: "Ensino Técnico",
          startDate: "2009-03-31",
          endDate: "2010-09-30",
          courses: ["PHP", "MySQL", "SQL Server", "CSS", "Javascript", "HTML5", "Tableless", "Action script"],
        }),
        // this.educationDefault({
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
        this.educationDefault({
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
        // this.awardsDefault({}),
      ],
      certificates: [
        // this.certificatesDefault({}),
      ],
      publications: [
        // this.publicationsDefault({}),
      ],
      skills: [
        this.skillsDefault({ name: "Vue 3", keywords: ["Frontend", "Main Stack"] }),
        this.skillsDefault({ name: "Laravel", keywords: ["Backend", "Main Stack"] }),
        this.skillsDefault({ name: "React", keywords: ["Frontend"] }),
        this.skillsDefault({ name: "Node.js", keywords: ["Backend", "Main Stack"] }),
        this.skillsDefault({ name: "PHP", keywords: ["Backend", "Main Stack"] }),
        this.skillsDefault({ name: "Docker", keywords: ["Main Stack"] }),
        this.skillsDefault({ name: "Docker Compose", keywords: ["Main Stack"] }),
        this.skillsDefault({ name: "Nuxt 3", keywords: ["Main Stack"] }),
        this.skillsDefault({ name: "API REST", keywords: [] }),
        this.skillsDefault({ name: "Bootstrap", keywords: [] }),
        this.skillsDefault({ name: "Otimização de página", keywords: [] }),
        this.skillsDefault({ name: "Arquitetura MVC", keywords: [] }),
        this.skillsDefault({ name: "Documentação", keywords: [] }),
        this.skillsDefault({ name: "SOAP", keywords: [] }),
        this.skillsDefault({ name: "HTML5", keywords: [] }),
        this.skillsDefault({ name: "Git", keywords: ["Main Stack"] }),
        this.skillsDefault({ name: "PWA", keywords: [] }),
        this.skillsDefault({ name: "Unity", keywords: ["Game"] }),
        this.skillsDefault({ name: "Firebase", keywords: [] }),
        this.skillsDefault({ name: "MySQL", keywords: ["Main Stack", "Database"] }),
        this.skillsDefault({ name: "Elementor", keywords: [] }),
        this.skillsDefault({ name: "YARN", keywords: [] }),
        this.skillsDefault({ name: "Javascript", keywords: ["Main Stack"] }),
        this.skillsDefault({ name: "Typescript", keywords: ["Main Stack"] }),
        this.skillsDefault({ name: "WooCommerce", keywords: [] }),
        this.skillsDefault({ name: "Responsividade", keywords: [] }),
        this.skillsDefault({ name: "Vuetify", keywords: ["Main Stack"] }),
        this.skillsDefault({ name: "Linux", keywords: ["Main Stack"] }),
        this.skillsDefault({ name: "JQuery", keywords: [] }),
        this.skillsDefault({ name: "WordPress", keywords: [] }),
        this.skillsDefault({ name: "NPM", keywords: [] }),
        this.skillsDefault({ name: "Scrum", keywords: [] }),
        this.skillsDefault({ name: "CSS3", keywords: [] }),
        this.skillsDefault({ name: "Postgres", keywords: ["Main Stack"] }),
        this.skillsDefault({ name: "Keycloak", keywords: [] }),
        this.skillsDefault({ name: "Clean Architecture", keywords: [] }),
        this.skillsDefault({ name: "Clean Code", keywords: [] }),
        this.skillsDefault({ name: "DynamoDB", keywords: [] }),
        this.skillsDefault({ name: "SEO", keywords: [] }),
        this.skillsDefault({ name: "Design Patterns", keywords: [] }),
        this.skillsDefault({ name: "Express.js", keywords: [] }),
        this.skillsDefault({ name: "Three.js", keywords: ["Game"] }),
        this.skillsDefault({ name: "Babylon", keywords: ["Game"] }),
        this.skillsDefault({ name: "Pagseguro", keywords: ["Gateway de Pagamento"] }),
        this.skillsDefault({ name: "Stripe", keywords: ["Gateway de Pagamento"] }),
        this.skillsDefault({ name: "SASS", keywords: [] }),
        this.skillsDefault({ name: "LESS", keywords: [] }),
        this.skillsDefault({ name: "Rapier.js", keywords: ["Game"] }),
        this.skillsDefault({ name: "Composer", keywords: [] }),
        this.skillsDefault({ name: "VuePress", keywords: [] }),
        this.skillsDefault({ name: "MongoDB", keywords: [] }),
        this.skillsDefault({ name: "Google Compute Engine", keywords: [] }),
        this.skillsDefault({ name: "Integração AI", keywords: [] }),
        this.skillsDefault({ name: "Python", keywords: [] }),
        this.skillsDefault({ name: "AdonisJS 6", keywords: [] }),
        this.skillsDefault({ name: "Cálculos geospaciais", keywords: [] }),
        this.skillsDefault({ name: "Mapas", keywords: [] }),
        this.skillsDefault({ name: "NestJS", keywords: ["Main Stack"] }),
        this.skillsDefault({ name: "GraphQL", keywords: [] }),
        this.skillsDefault({ name: "Responsive Design", keywords: [] }),
        this.skillsDefault({ name: "UI/UX", keywords: [] }),
        this.skillsDefault({ name: "Web Accessibility", keywords: [] }),
        this.skillsDefault({ name: "Redis", keywords: [] }),
        this.skillsDefault({ name: "JWT", keywords: [] }),
        this.skillsDefault({ name: "Rest API", keywords: [] }),
        this.skillsDefault({ name: "Authentication", keywords: [] }),
        this.skillsDefault({ name: "SQL", keywords: [] }),
        this.skillsDefault({ name: "Deployment", keywords: [] }),
      ],
      languages: [
        this.languagesDefault({ language: "Português Brasileiro", fluency: "Nativo" }),
        this.languagesDefault({ language: "Inglês", fluency: "Leitura e Escrita" }),
      ],
      interests: [
        this.interestsDefault({ name: "Ciclismo", keywords: ["Bem Estar", "Desafios"] }),
        this.interestsDefault({
          name: "Música (Tocar)",
          keywords: ["Disciplina", "Habilidades Motoras", "Criatividade"],
        }),
      ],
      references: [
        // this.referencesDefault({}),
      ],
      projects: [
        this.projectsDefault({
          name: "Corapost",
          description: `
            * Desenvolvimento da **interface do usuário (UI) funcional e responsiva** para o projeto **Corapost**, com base em design de Figma.
            * Utilização de **Vue.js, HTML, CSS e JavaScript** para criar um **plugin WordPress** que transformou o design em um frontend completo.
          `,
          url: "https://corapost.com",
          startDate: "2024-07-01",
          endDate: "2024-04-30",
          highlights: ["Labscript.dev"],
        }),
        this.projectsDefault({
          name: "Search and Stay",
          description: `
            * **Evolução contínua** do sistema **Search and Stay**, com desenvolvimento de **novas funcionalidades** e **resolução eficiente de bugs**.
            * Atuação **Fullstack**, construindo interfaces dinâmicas e responsivas com **Vue.js** e **Nuxt.js** (frontend) e backend **robusto e escalável** com **Laravel**.
            * Experiência em **integração e personalização de plugin WordPress** para requisitos específicos do sistema, garantindo **alta qualidade e performance**.
          `,
          url: "https://searchandstay.com",
          startDate: "2022-12-31",
          endDate: "2023-11-30",
        }),
        this.projectsDefault({
          name: "O Novo Mercado",
          description: `
            * **Desenvolvimento frontend** da plataforma interna de vídeos e hub de profissionais **"O Novo Mercado"**.
            * Construção de uma **interface de usuário intuitiva, responsiva e atraente** com **Vue.js** e **Vuetify**.
            * Otimização da **performance** da aplicação para garantir uma **experiência fluida e eficiente**, contribuindo diretamente para o **engajamento dos usuários**.
          `,
          url: "https://onovomercado.com/",
          startDate: "2022-02-28",
          endDate: "2022-07-31",
        }),
        this.projectsDefault({
          name: "Assinar ou comprar",
          description: `
            * Desenvolvimento **Fullstack** (Laravel, Vue.js, Element UI) da **calculadora estratégica "Assinar ou Comprar"**, em parceria com **Unidas e Samy Dana**.
            * Implementação de **lógica de cálculo complexa** para auxiliar usuários na decisão de comprar ou alugar um carro, garantindo **precisão e intuitividade**.
            * Responsável por apresentar resultados de forma **clara e acessível**, **impactando diretamente na tomada de decisão informada** sobre mobilidade.
          `,
          url: "https://web.archive.org/web/20211217154133/https://assinaroucomprar.com.br/",
          startDate: "2021-12-31",
          endDate: "2021-12-31",
          highlights: ["Listra"],
          meta: {
            images: [{ file: "assets/projects/assinar-ou-comprar.jpg", name: "" }],
          },
        }),
        this.projectsDefault({
          name: "Samarco",
          description: `
            * **Liderança no desenvolvimento e implementação** de um **Gerenciador de Conteúdo** para a **Samarco**, em colaboração com a Digital Pixel.
            * Criação de um sistema dinâmico e versátil utilizando **WordPress** e **Elementor**, **simplificando a administração** de conteúdo e **otimizando a comunicação digital**.
            * Foco na **facilidade de uso** para o cliente e entrega de uma **experiência de usuário aprimorada** através de design e interatividade.
          `,
          url: "https://web.archive.org/web/20220130172103/https://www.samarco.com/",
          startDate: "2020-08-31",
          endDate: "2020-10-31",
          highlights: ["Labscript.dev"],
        }),
        this.projectsDefault({
          name: "Faculdade Faveni",
          description: `
            * **Estilização avançada e customização** do tema da **Faculdade Faveni** em plataforma **WordPress Multisite**.
            * Adaptação visual e funcional do tema para atender **múltiplos sites da rede**, garantindo identidade visual e **aprimorando a experiência do usuário**.
            * Otimização de **CSS** e manipulação de funcionalidades via **hooks e filtros do WordPress** para consistência e performance da rede Multisite.
          `,
          url: "https://web.archive.org/web/20220131193706/https://faveni.edu.br/",
          startDate: "2020-12-31",
          endDate: "2021-12-31",
          highlights: ["Labscript.dev"],
        }),
        this.projectsDefault({
          name: "Orbitae",
          description: `* Desenvolvimento de **apresentações de produtos especializados em perícia forense**, em parceria com a **Partners Comunicação Pro Business**.
            * Criação de plataforma **dinâmica e visualmente cativante** com **WordPress** e **Elementor**, integrando elementos personalizados.
            * Foco em garantir **destaque e acessibilidade aos detalhes técnicos**, resultando em uma experiência de usuário **impactante e eficiente** para o público.
          `,
          url: "https://web.archive.org/web/20210517192720/https://orbitae.com.br/",
          startDate: "2019-01-31",
          endDate: "2019-08-31",
          highlights: ["Labscript.dev"],
          meta: {
            images: [{ file: "assets/projects/orbitae.jpg", name: "" }],
          },
        }),
        this.projectsDefault({
          name: "Blog Banco da Amazônia",
          description: `
            * Desenvolvimento e manutenção do **blog de Notícias e Utilidades do Banco da Amazônia**, em parceria com a **Partners Comunicação Pro Business**.
            * Criação e customização de elementos com **WordPress** e **Elementor**, garantindo a **identidade visual** e **otimizando a experiência do usuário**.
            * Atuação na **estruturação do layout e responsividade**, contribuindo para uma **comunicação eficaz e acessível** das informações do Banco.
          `,
          url: "https://web.archive.org/web/20211229163534/https://basablog.com.br/",
          startDate: "2019-12-31",
          endDate: "2019-12-31",
          highlights: ["Labscript.dev"],
          meta: {
            images: [{ file: "assets/projects/blog-banco-da-amazonia.jpg", name: "" }],
          },
        }),
        this.projectsDefault({
          name: "Habitat Group",
          description: `
            * **Desenvolvimento completo do website** da clínica veterinária **Habitat Group**, utilizando **WordPress** e **Elementor**.
            * Criação de uma **interface amigável e personalizada** para facilitar o acesso a serviços, qualificação de profissionais e **sistema de agendamento de consultas**.
            * Foco em proporcionar uma **experiência de usuário intuitiva e eficiente**, refletindo o compromisso da clínica com a qualidade de atendimento.
          `,
          url: "https://web.archive.org/web/20220110082741/https://habitatgroup.com.br/",
          startDate: "2019-12-31",
          endDate: "2019-12-31",
          highlights: ["Labscript.dev"],
          meta: {
            images: [{ file: "assets/projects/habitat-group.jpg", name: "" }],
          },
        }),
        this.projectsDefault({
          name: "Cocks Skate",
          description: `
            * **Desenvolvimento e otimização de e-commerce** para **"Cocks Skate"**, utilizando **WordPress, WooCommerce** e **Elementor** com elementos customizados.
            * Criação de uma **experiência de compra personalizada e intuitiva**, com navegação e busca de produtos facilitadas.
            * Implementação de **funcionalidades de e-commerce completas**, design **atraente e responsivo**, visando **impulsionar as vendas** e atender o público skatista.
          `,
          url: "https://web.archive.org/web/20211226170044/https://cocksskate.com.br/",
          startDate: "2018-12-31",
          endDate: "2018-12-31",
          highlights: ["Labscript.dev"],
          meta: {
            images: [{ file: "assets/projects/cocks-skate.jpg", name: "" }],
          },
        }),
        this.projectsDefault({
          name: "Don Desenvolvimento",
          description: `
            * Realizei **alterações de layout e manutenções pontuais** no website da **Don Desenvolvimento**.
            * Utilização de **WordPress** e **Vue.js** para **adaptação e otimização do design existente**, e implementação de **novas funcionalidades interativas**.
            * Responsável pela **resolução eficiente de problemas e bugs**, garantindo a **estabilidade e o bom funcionamento** do site.
          `,
          url: "https://web.archive.org/web/20181224004334/http://dondesenvolvimento.com.br/",
          startDate: "2018-12-31",
          endDate: "2018-12-31",
          highlights: ["Labscript.dev"],
          meta: {
            images: [{ file: "assets/projects/don-desenvolvimento.jpg", name: "" }],
          },
        }),
        this.projectsDefault({
          name: "Eiriz Saúde",
          description: `
            * **Concepção e desenvolvimento exclusivo** de um sistema **WordPress** para a clínica odontológica **Eiriz Saúde** (Porto, Portugal).
            * Foco em **aprimorar a experiência do usuário e a eficiência dos serviços online**, com **gerenciamento de conteúdo avançado** e **interação fluida**.
            * Garantiu a **apresentação precisa de serviços** e a **transmissão eficaz de informações**, proporcionando uma **experiência online completa e informativa**.
          `,
          url: "http://eiriz-saude.unbox.pt",
          startDate: "2018-12-31",
          endDate: "2018-12-31",
          highlights: ["Labscript.dev"],
          meta: {
            images: [{ file: "assets/projects/eiriz-saude.jpg", name: "" }],
          },
        }),
        this.projectsDefault({
          name: "Águas do Acuruí",
          description: `
            * **Desenvolvimento completo e personalizado** do website para a cidade de **Águas do Acuruí**, utilizando **WordPress**.
            * Construção de um **tema exclusivo e sob medida**, refletindo a **identidade singular da cidade** e visando promover a região de forma **cativante e informativa**.
            * Planejamento e implementação de design e funcionalidades para destacar a **autenticidade e os pontos fortes**, proporcionando uma **experiência online única e envolvente** aos visitantes.
          `,
          url: "https://web.archive.org/web/20210302055106/http://aguasdoacurui.com.br/",
          startDate: "2017-12-31",
          endDate: "2017-12-31",
          highlights: ["Agência de Criação"],
          meta: {
            images: [{ file: "assets/projects/aguas-do-acurui.jpg", name: "" }],
          },
        }),
        this.projectsDefault({
          name: "Cantor Beto Santos",
          description: `
            * **Desenvolvimento completo do website** para o **Cantor Beto Santos**, incluindo um **CMS personalizado com recursos únicos**.
            * Criação de um **player de música integrado** com sistema intuitivo de **upload e reprodução via painel administrativo**.
            * Destaque para o design estratégico dos controles de reprodução, garantindo uma **experiência de usuário fluida e ininterrupta** durante a navegação.
          `,
          url: "https://web.archive.org/web/20211127021144/http://betosantos.net/",
          startDate: "2017-12-31",
          endDate: "2017-12-31",
          highlights: ["Agência de Criação"],
          meta: {
            images: [{ file: "assets/projects/cantor-beto-santos.jpg", name: "" }],
          },
        }),
        this.projectsDefault({
          name: "Estrela Rural",
          description: `
            * **Desenvolvimento e implementação** de um **CMS e sistema de leilões totalmente personalizados** para a **Estrela Rural**.
            * Concepção e construção de uma **solução completa**, baseada em plataforma customizada, otimizando a **administração de conteúdo** e a **realização de leilões online**.
            * Entregou valor significativo e **melhorou a eficiência dos processos de gestão e negócios** do cliente.
          `,
          url: "https://web.archive.org/web/20220110211402/http://estrelarural.com.br/",
          startDate: "2012-12-31",
          endDate: "2012-12-31",
          highlights: ["Agência de Criação"],
        }),
        this.projectsDefault({
          name: "ASSEMG",
          description: `
            * **Desenvolvimento e adaptação de um CMS exclusivo** para o website da **ASSEMG**, focado nas **necessidades específicas da associação**.
            * Criação de uma plataforma **eficiente e funcional** com ferramentas para **gestão interna, comunicação segura e interação personalizada** entre os membros.
            * Garantiu uma **experiência de usuário única** e **agregou valor** à gestão de recursos e à experiência associativa online.
          `,
          url: "https://web.archive.org/web/20170612004919/http://assemg.org/",
          startDate: "2012-12-31",
          endDate: "2012-12-31",
          highlights: ["Agência de Criação"],
          meta: {
            images: [{ file: "assets/projects/assemg.jpg", name: "" }],
          },
        }),
        this.projectsDefault({
          name: "Manduí",
          description: `
            * **Desenvolvimento completo do website** da **Escola Infantil Manduí**, refletindo seu ambiente acolhedor e abordagem educacional.
            * Frontend construído com **Nuxt 3, Vue 3 e Vuetify 3**, garantindo uma **experiência interativa e informativa** para pais.
            * Backend com **interface intuitiva e painel lateral dinâmico** para edição de elementos, utilizando persistência de dados **serverless** via **Firebase**, assegurando **escalabilidade e eficiência**.
          `,
          url: "https://mandui.com.br",
          startDate: "2023-01-01",
          endDate: "2023-01-31",
          highlights: ["Labscript.dev"],
          meta: {
            images: [
              { file: "assets/projects/mandui-01.jpg", name: "" },
              { file: "assets/projects/mandui-02.jpg", name: "" },
              { file: "assets/projects/mandui-03.jpg", name: "" },
            ],
          },
        }),
        this.projectsDefault({
          name: "Safe Register Car",
          description: `
            * Participação **Fullstack** na construção do **Safe Register Car** (Tecnol), otimizando o envio de **documentação veicular para seguradoras** em nível nacional.
            * Desenvolvimento de **interface de usuário intuitiva** com **Vue.js** (frontend) para envio eficiente de documentos.
            * Backend com **Laravel** para lógica da aplicação, **gerenciamento de dados e comunicação com seguradoras**, contribuindo para um **fluxo de trabalho ágil e eficaz**.
          `,
          url: "https://saferegistercar.com.br",
          startDate: "2023-12-15",
          endDate: "2024-06-01",
          highlights: [],
        }),
        this.projectsDefault({
          name: "Tecnohub",
          description: `
            * Participação **Fullstack** na construção e evolução do **Tecnohub** (Tecnol), plataforma centralizada para **otimizar a comunicação e interação** entre stakeholders.
            * Desenvolvimento de **funcionalidades** para facilitar o fluxo de informações e a **colaboração**, com **interfaces intuitivas** (frontend) para diferentes tipos de usuários.
            * No backend, criei **lógica de negócio e APIs** para **integrar diversos serviços**, garantindo **comunicação eficiente e transparente** no ecossistema Tecnol.
          `,
          startDate: "2023-12-15",
          endDate: "2024-06-01",
          highlights: [],
        }),
        // this.projectsDefault({
        //   name: "EPA",
        //   url: "https://www.epa.com.br",
        // }),
        // this.projectsDefault({
        //   name: "Unidas Seminovos",
        //   url: "https://seminovos.unidas.com.br",
        // }),
        // this.projectsDefault({
        //   name: "Rehagro",
        //   url: "https://rehagro.com.br",
        // }),
      ],
    };
  }
}

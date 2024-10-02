import format from "./format.js";

const work = (data) => {
  return {
    show: true,
    name: "None",
    position: "Dev Fullstack",
    contract: "pj",
    sallary: null,
    highlights: [],
    summary: "",
    url: null,
    location: {
      formatted: "Belo Horizonte, Minas Gerais, Brasil",
      city: "Belo Horizonte",
      state: "Minas Gerais",
      state_code: "MG",
      country: "Brasil",
      country_code: "BR",
      lat: -19.9227318,
      lng: -43.9450948,
    },
    date: format.strDateBetween("now", "now"),
    projects: [],
    ...data,
  };
};

const project = (data) => {
  return {
    id: null,
    show: false,
    name: "Default",
    position: "Default",
    highlights: [],
    summary: "Default",
    url: "",
    location: {
      formatted: "Belo Horizonte, Minas Gerais, Brasil",
      city: "Nova Lima",
      state: "Minas Gerais",
      state_code: "MG",
      country: "Brasil",
      country_code: "BR",
      lat: -19.9870559,
      lng: -43.9458889,
    },
    date: format.strDateBetween("2024-01-01", "2024-12-31"),
    projects: [],
    ...data,
  };
};

const skill = (data = {}) => {
  return {
    show: true,
    rating: null,
    name: "Skill",
    keywords: [],
    ...data,
  };
};

let data = {
  basics: {
    name: "Jeferson Siqueira",
    label: "Dev Fullstack | AI | Laravel | Vue.js | React.js | Docker | Node.js",
    image: "",
    email: "jeferson.i.silva@gmail.com",
    phone: "+55 31 99527-1426",
    summarySmall: `Sou desenvolvedor desde 2011. Busco oportunidade como Fullstack pleno ou sênior.`,
    summary: `
      <strong>Olá, tudo bem?</strong>

      <p>Sou um desenvolvedor Full-stack apaixonado por tecnologia, com mais de 10 anos de experiência
      na criação de sistemas robustos, desde monolitos até microserviços.</p>

      <p>Forte expertise no desenvolvimento de soluções em Laravel,
      Vue.js, Nuxt.js e WordPress, incluindo a criação de plugins e temas personalizados.
      Focado em entregar soluções escaláveis e eficientes, com experiência em ambientes de
      hospedagem compartilhada e dedicada.</p>
      <p>Será um prazer fazer parte da sua equipe!</p>
    `,
    photo: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/profile/image.jpg",
    location: {
      formatted: "Brasil",
      city: "Belo Horizonte",
      state: "Minas Gerais",
      state_code: "MG",
      country: "Brasil",
      country_code: "BR",
      lat: -10.3333333,
      lng: -53.2,
    },
    profiles: [
      {
        network: "LinkedIn",
        username: "jeferson-siqueira",
        url: "https://www.linkedin.com/in/jeferson-siqueira/",
      },
    ],
  },
  work: [
    work({
      show: true,
      name: "Labscript.dev (Empresa própria)",
      position: "Dev Fullstack",
      contract: "pj",
      sallary: null,
      highlights: [],
      summary: `
        <p>Empresa aberta por mim para prestação de serviços freelancer.</p>
      `,
      url: "https://www.linkedin.com/company/labscript-dev/",
      location: {
        formatted: "Belo Horizonte, Minas Gerais, Brasil",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        state_code: "MG",
        country: "Brasil",
        country_code: "BR",
        lat: -19.9227318,
        lng: -43.9450948,
      },
      date: format.strDateBetween("2011-01-01", "now"),
      projects: [
        "corapost",
        "o-novo-mercado",
        "samarco",
        "faveni",
        "orbitae",
        "blog-banco-da-amazonia",
        "habitat-group",
        "cocks-skate",
        "don-desenvolvimento",
        "eiriz-saude",
        "mandui",
        "rehagro",
      ],
    }),
    work({
      show: false,
      name: "Tecnol Sistemas de Autmoação",
      position: "Dev Fullstack",
      highlights: [],
      summary: `
        <p>Desenvolvimento dos produtos internos da empresa.</p>
      `,
      url: "https://sistemastecnol.com.br",
      location: {
        formatted: "Belo Horizonte, Minas Gerais, Brasil",
        city: "Nova Lima",
        state: "Minas Gerais",
        state_code: "MG",
        country: "Brasil",
        country_code: "BR",
        lat: -19.9870559,
        lng: -43.9458889,
      },
      date: format.strDateBetween("2024-01-29", "2024-06-07"),
      projects: ["safe-register-car", "tecnohub"],
    }),
    work({
      show: true,
      name: "Search and Stay",
      position: "Dev Fullstack",
      highlights: [],
      summary: `
        <p>Implementações e correções no sistema Search and Stay,
        utilizando Vue+Nuxt no frontend, Laravel no backend e plugin Wordpress.</p>
      `,
      url: "https://www.linkedin.com/company/search-and-stay/",
      location: {
        formatted: "Australia",
        city: "",
        state: "",
        state_code: "",
        country: "Australia",
        country_code: "AU",
        lat: -24.7761086,
        lng: 134.755,
      },
      date: format.strDateBetween("2022-12-31", "2023-11-30"),
      projects: ["search-and-stay"],
    }),
    work({
      show: false,
      name: "Rehagro",
      position: "Dev Fullstack",
      highlights: [],
      summary: ``,
      url: "",
      location: {
        formatted: "Belo Horizonte, Minas Gerais, Brasil",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        state_code: "MG",
        country: "Brasil",
        country_code: "BR",
        lat: -19.9227318,
        lng: -43.9450948,
      },
      date: format.strDateBetween("2022-09-12", "2022-12-09"),
      projects: [],
    }),
    work({
      show: false,
      name: "Iterative;",
      position: "Frontend Developer",
      highlights: [],
      summary: ``,
      url: "",
      location: {
        formatted: "São Paulo, São Paulo, Brasil",
        city: "São Paulo",
        state: "São Paulo",
        state_code: "SP",
        country: "Brasil",
        country_code: "BR",
        lat: -19.9227318,
        lng: -43.9450948,
      },
      date: format.strDateBetween("2022-08-01", "2022-09-12"),
      projects: [],
    }),
    work({
      show: true,
      name: "Listra",
      position: "Dev Fullstack",
      highlights: [],
      summary: `
        <p>Atuações utilizando principalmente Vue.js, Laravel e NodeJS.</p>
        <p>Projetos principais: Assinar ou Comprar, Supermercados EPA, Unidas Seminovos.</p>
      `,
      url: "https://www.linkedin.com/company/listradigital/",
      location: {
        formatted: "Belo Horizonte, Minas Gerais, Brasil",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        state_code: "MG",
        country: "Brasil",
        country_code: "BR",
        lat: -19.9227318,
        lng: -43.9450948,
      },
      date: format.strDateBetween("2020-10-31", "2022-04-30"),
      projects: ["asinar-ou-comprar", "epa", "unidas-seminovos"],
    }),
    work({
      show: true,
      name: "Codificar Sistemas Tecnológicos",
      position: "Dev Fullstack",
      highlights: [],
      summary:
        "Nessa empresa, ajudei no desenvolvimento de algumas aplicações, onde em sua maioria eram utilizadas Laravel ou Node.js como backend, e Vue.js no frontend.",
      url: "https://www.linkedin.com/company/codificar/",
      location: {
        formatted: "Belo Horizonte, Minas Gerais, Brasil",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        state_code: "MG",
        country: "Brasil",
        country_code: "BR",
        lat: -19.9227318,
        lng: -43.9450948,
      },
      date: format.strDateBetween("2017-02-28", "2017-10-31"),
      projects: [],
    }),
    work({
      show: true,
      name: "Agência de Criação",
      position: "Dev Fullstack",
      highlights: [],
      summary:
        "Nessa agência, ajudei a desenvolver principalmente o CMS próprio, onde tive oportunidade de trabalhar com Vue.js e Angular.js. Como banco de dados, foram utilizados principalmente MySQL e MariaDB. As soluções em backend envolviam PHP ou Node.js.",
      url: "https://www.linkedin.com/company/ag%C3%AAncia-de-cria%C3%A7%C3%A3o/",
      location: {
        formatted: "Belo Horizonte, Minas Gerais, Brasil",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        state_code: "MG",
        country: "Brasil",
        country_code: "BR",
        lat: -19.9227318,
        lng: -43.9450948,
      },
      date: format.strDateBetween("2015-01-05", "2017-01-02"),
      projects: ["cantor-beto-santos"],
    }),
    work({
      show: true,
      name: "Cushman & Wakefield",
      position: "Dev Fullstack",
      highlights: [],
      summary: `
        <p>Conversão de aplicações feitas internamente em Excel para web.</p>
      `,
      url: "https://www.linkedin.com/company/cushman-&-wakefield/",
      location: {
        formatted: "Belo Horizonte, Minas Gerais, Brasil",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        state_code: "MG",
        country: "Brasil",
        country_code: "BR",
        lat: -19.9227318,
        lng: -43.9450948,
      },
      date: format.strDateBetween("2012-05-02", "2013-11-08"),
      projects: [],
    }),
    work({
      show: true,
      name: "Netranet Networking",
      position: "Dev Fullstack",
      highlights: [],
      summary: "Desenvolvimento de funções para o CMS próprio da agência.",
      url: "https://www.linkedin.com/company/netranet-networking/",
      location: {
        formatted: "Belo Horizonte, Minas Gerais, Brasil",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        state_code: "MG",
        country: "Brasil",
        country_code: "BR",
        lat: -19.9227318,
        lng: -43.9450948,
      },
      date: format.strDateBetween("2011-01-13", "2012-01-13"),
      projects: ["estrela-rural", "assemg"],
    }),
    work({
      show: true,
      name: "Web BH Escola de Informática",
      position: "Instrutor",
      highlights: [],
      summary: "Atuei como instrutor dos cursos de PHP, MySQL, CSS, Javascript, HTML5, Tableless e Action script.",
      location: {
        formatted: "Belo Horizonte, Minas Gerais, Brasil",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        state_code: "MG",
        country: "Brasil",
        country_code: "BR",
        lat: -19.9227318,
        lng: -43.9450948,
      },
      date: format.strDateBetween("2010-01-31", "2011-01-31"),
      projects: [],
    }),
  ],
  volunteer: [],
  education: [
    {
      show: true,
      institution: "Centro Universitário UNA",
      area: "",
      studyType: "Cinema e Audiovisual",
      score: "",
      courses: [],
      date: format.strDateBetween("2014-12-31", "2017-12-31"),
    },
    {
      show: true,
      institution: "WebBH Escola de Informática",
      area: "Desenvolvimento de sistemas para plataforma Web",
      studyType: "Ensino Técnico",
      score: "",
      courses: [" - Programação PHP", " - Mysql", " - Html5", " - Javascript", "null - CSS"],
      date: format.strDateBetween("2009-03-31", "2010-09-30"),
    },
  ],
  awards: [],
  certificates: [],
  publications: [],
  skillsTags: [
    { id: "main-stack", name: "Stack Principal" },
    { id: "database", name: "Banco de Dados" },
    { id: "game-dev", name: "Desenvolvimento de Jogos" },
  ],
  skills: [
    skill({ show: true, rating: 90, name: "Vue.js", keywords: ["main-stack"] }),
    skill({ show: true, rating: 80, name: "Laravel", keywords: ["main-stack"] }),
    skill({ show: true, rating: 70, name: "Docker", keywords: ["main-stack"] }),
    skill({ show: true, rating: 70, name: "Docker Compose", keywords: ["main-stack"] }),
    skill({ show: true, rating: 80, name: "Nuxt.js", keywords: ["main-stack"] }),
    skill({ show: true, rating: 95, name: "API REST", keywords: [] }),
    skill({ show: true, rating: null, name: "Bootstrap", keywords: [] }),
    skill({ show: true, rating: null, name: "Otimização de página", keywords: [] }),
    skill({ show: true, rating: null, name: "Arquitetura MVC", keywords: [] }),
    skill({ show: true, rating: null, name: "Documentação", keywords: [] }),
    skill({ show: true, rating: null, name: "SOAP", keywords: [] }),
    skill({ show: true, rating: null, name: "HTML5", keywords: [] }),
    skill({ show: true, rating: 50, name: "Git", keywords: ["main-stack"] }),
    skill({ show: true, rating: null, name: "PWA", keywords: [] }),
    skill({ show: true, rating: null, name: "Unity", keywords: ["ame-dev"] }),
    skill({ show: true, rating: null, name: "Firebase", keywords: [] }),
    skill({ show: true, rating: 90, name: "PHP", keywords: ["main-stack"] }),
    skill({ show: true, rating: 80, name: "MySQL", keywords: ["main-stack", "database"] }),
    skill({ show: true, rating: 85, name: "Elementor", keywords: [] }),
    skill({ show: true, rating: 60, name: "React.js", keywords: [] }),
    skill({ show: true, rating: 75, name: "Node.js", keywords: [] }),
    skill({ show: false, rating: null, name: "YARN", keywords: [] }),
    skill({ show: true, rating: 80, name: "Javascript", keywords: ["main-stack"] }),
    skill({ show: true, rating: 40, name: "Typescript", keywords: ["main-stack"] }),
    skill({ show: true, rating: null, name: "WooCommerce", keywords: [] }),
    skill({ show: true, rating: null, name: "Responsividade", keywords: [] }),
    skill({ show: true, rating: 90, name: "Vuetify", keywords: ["main-stack"] }),
    skill({ show: true, rating: 50, name: "Linux", keywords: ["main-stack"] }),
    skill({ show: false, rating: null, name: "JQuery", keywords: [] }),
    skill({ show: true, rating: 85, name: "WordPress", keywords: [] }),
    skill({ show: false, rating: null, name: "NPM", keywords: [] }),
    skill({ show: true, rating: null, name: "Scrum", keywords: [] }),
    skill({ show: true, rating: null, name: "CSS3", keywords: [] }),
    skill({ show: true, rating: 40, name: "Postgres", keywords: ["main-stack"] }),
    skill({ show: true, rating: 40, name: "Keycloak", keywords: [] }),
    skill({ show: true, rating: 20, name: "Clean Architecture", keywords: [] }),
    skill({ show: true, rating: 20, name: "Clean Code", keywords: [] }),
    skill({ show: true, rating: 20, name: "NestJS", keywords: [] }),
    skill({ show: true, rating: 20, name: "DynamoDB", keywords: [] }),
    skill({ show: true, rating: null, name: "SEO", keywords: [] }),
    skill({ show: true, rating: null, name: "Design Patterns", keywords: [] }),
    skill({ show: false, rating: null, name: "Express.js", keywords: [] }),
    skill({ show: false, rating: null, name: "Three.js", keywords: ["game-dev"] }),
    skill({ show: false, rating: null, name: "Pagseguro", keywords: [] }),
    skill({ show: false, rating: null, name: "Stripe", keywords: [] }),
    skill({ show: false, rating: null, name: "SASS", keywords: [] }),
    skill({ show: false, rating: null, name: "LESS", keywords: [] }),
    skill({ show: false, rating: null, name: "Rapier.js", keywords: ["game-dev"] }),
    skill({ show: false, rating: null, name: "Composer", keywords: [] }),
    skill({ show: false, rating: null, name: "VuePress", keywords: [] }),
    skill({ show: true, rating: 70, name: "Integração IA", keywords: [] }),
  ],
  languages: [
    {
      show: true,
      language: "pt",
      fluency: "Native Speaker",
    },
    {
      show: true,
      fluency: "Elementary",
      language: "Inglês",
    },
    {
      show: true,
      fluency: "Native Speaker",
      language: "Português",
    },
  ],
  interests: [],
  references: [],
  projects: [
    project({
      id: "corapost",
      show: true,
      images: [],
      name: "Corapost",
      summary: `Desenvolvimento da interface desenvolvida no Figma`,
      url: "https://corapost.com",
      date: format.strDateBetween("2024-07-01", "2024-04-30"),
    }),
    project({
      id: "search-and-stay",
      show: true,
      images: [],
      name: "Search and Stay",
      summary:
        "Implementações e correções no sistema Search and Stay, utilizando Vue+Nuxt no frontend, Laravel no backend e plugin Wordpress.",
      url: "https://searchandstay.com",
      date: format.strDateBetween("2022-12", "2023-11"),
    }),
    project({
      id: "o-novo-mercado",
      show: true,
      images: [],
      name: "O Novo Mercado",
      summary: "Desenvolvimento da plataforma interna de videos e hub de profissionais utilizando Vue.js + Vuetify",
      url: "https://onovomercado.com/",
      date: format.strDateBetween("2022-02-28", "2022-07-31"),
    }),
    project({
      id: "asinar-ou-comprar",
      show: true,
      images: [],
      name: "Assinar ou comprar",
      summary:
        "Calculadora desenvolvida em parceria com Unidas e Samy Dana, para verificar se é mais vantajoso comprar ou alugar um carro.",
      url: "https://web.archive.org/web/20211217154133/https://assinaroucomprar.com.br/",
      date: format.strDateBetween("2021-12-31", "2021-12-31"),
    }),
    project({
      id: "samarco",
      show: true,
      images: [],
      name: "Samarco",
      summary: `
        <p>Em uma colaboração estratégica com a agência Belo Horizontina Digital Pixel,
        desenvolvemos um eficiente gerenciador de conteúdo empregando a combinação
        poderosa de Wordpress e Elementor. Essa parceria resultou em um sistema
        dinâmico e versátil para administrar e apresentar conteúdos
        online de forma eficaz.</p>

        <p>A integração do Wordpress, conhecido por sua flexibilidade e extensibilidade,
        com a tecnologia intuitiva do Elementor, proporcionou uma solução robusta.
        Isso permitiu a criação e gestão de conteúdos de maneira simplificada,
        ao mesmo tempo em que ofereceu ferramentas de design avançadas para
        aprimorar a estética e a interatividade do site, atendendo às expectativas
        do cliente e proporcionando uma experiência de usuário aprimorada.</p>
      `,
      url: "https://web.archive.org/web/20220130172103/https://www.samarco.com/",
      date: format.strDateBetween("2020-08-31", "2020-10-31"),
    }),
    project({
      id: "faveni",
      show: true,
      images: [],
      name: "Faculdade Faveni",
      summary: "Estilização e customização de componentes do tema utilizando plataforma Wordpress com multisite.",
      url: "https://web.archive.org/web/20220131193706/https://faveni.edu.br/",
      date: format.strDateBetween("2020-12-31", "2020-12-31"),
    }),
    project({
      id: "orbitae",
      show: true,
      images: [
        {
          url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/orbitae.jpg",
          description: "",
        },
      ],
      name: "Orbitae",
      summary: `Desenvolvemos apresentações de produtos especializados em perícia forense, integrando Wordpress e Elementor com elementos personalizados.
      
Essa parceria estratégica com a Partners Comunicação Pro Business resultou em uma plataforma dinâmica e visualmente cativante. Combinando a flexibilidade do Wordpress e a criatividade do Elementor, criamos uma experiência de usuário impactante para os produtos, garantindo destaque e acessibilidade aos detalhes técnicos. Essa colaboração permitiu a construção de uma plataforma dinâmica e eficiente, facilitando a apresentação e a compreensão dos produtos para um público amplo e diversificado.`,
      url: "https://web.archive.org/web/20210517192720/https://orbitae.com.br/",
      date: format.strDateBetween("2019-01-31", "2019-08-31"),
    }),
    project({
      id: "blog-banco-da-amazonia",
      show: true,
      images: [
        {
          url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/blog-banco-da-amazonia.jpg",
          description: "",
        },
      ],
      name: "Blog Banco da Amazônia",
      summary:
        "Notícias e utlidades do Banco da Amazônia. Feito utilizando Wordpress + Elementor com elementos personalizados. Feito em parceria com a Partners Comunicação Pro Business.",
      url: "https://web.archive.org/web/20211229163534/https://basablog.com.br/",
      date: format.strDateBetween("2019-12-31", "2019-12-31"),
    }),
    project({
      id: "habitat-group",
      show: true,
      images: [
        {
          url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/habitat-group.jpg",
          description: "",
        },
      ],
      name: "Habitat Group",
      summary:
        "Desenvolvimento de um website para a clínica veterinária Habitat Group.\n    Criado com Wordpress e Elementor, o site oferece uma interface amigável e personalizada. Disponibiliza informações sobre serviços, profissionais qualificados e agendamento de consultas para atendimento de qualidade aos animais de estimação e seus tutores.",
      url: "https://web.archive.org/web/20220110082741/https://habitatgroup.com.br/",
      date: format.strDateBetween("2019-12-31", "2019-12-31"),
    }),
    project({
      id: "cocks-skate",
      show: true,
      images: [
        {
          url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/cocks-skate.jpg",
          description: "",
        },
      ],
      name: "Cocks Skate",
      summary:
        "Desenvolvimento de e-commerce especializado em produtos para skatistas, utilizando Wordpress, Woocommerce e Elementor com elementos customizados.\n    \n    Somando uma experiência personalizada de compra com uma fácil navegação e busca dos produtos, a integração dessas ferramentas garante um site dinâmico, com funcionalidades de ponta e um design atraente para o público interessado nesse nicho, visando atender suas necessidades e interesses.",
      url: "https://web.archive.org/web/20211226170044/https://cocksskate.com.br/",
      date: format.strDateBetween("2018-12-31", "2018-12-31"),
    }),
    project({
      id: "don-desenvolvimento",
      show: true,
      images: [
        {
          url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/don-desenvolvimento.jpg",
          description: "",
        },
      ],
      name: "Don Desenvolvimento",
      summary: "Alterações no layout original e manutenções pontuais utilizando Wordpress e Vue.",
      url: "https://web.archive.org/web/20181224004334/http://dondesenvolvimento.com.br/",
      date: format.strDateBetween("2018-12-31", "2018-12-31"),
    }),
    project({
      id: "eiriz-saude",
      show: true,
      name: "Eiriz Saúde",
      summary:
        "Concebido e desenvolvido exclusivamente para atender às necessidades da clínica odontológica Eiriz Saúde, localizada em Porto, Portugal, este projeto é o resultado de uma parceria dedicada a aprimorar a experiência do usuário e a eficiência dos serviços oferecidos.\n    \n    Com foco na usabilidade e na interação fluída, o sistema Wordpress desenvolvido para a Eiriz Saúde incorporou recursos avançados de gerenciamento de conteúdo, garantindo não apenas a apresentação precisa dos serviços oferecidos, mas também a transmissão eficaz de informações importantes aos pacientes, proporcionando assim uma experiência online completa e informativa.",
      url: "http://eiriz-saude.unbox.pt",
      date: format.strDateBetween("2018-12-31", "2018-12-31"),
      images: [
        {
          url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/eiriz-saude.jpg",
          description: "",
        },
      ],
    }),
    project({
      id: "aguas-do-acurui",
      show: true,
      name: "Águas do Acuruí",
      summary:
        "O desenvolvimento do website para a cidade de Águas do Acuruí foi um projeto dedicado e personalizado, visando promover a região de forma cativante e informativa.\n\n    Utilizando a versatilidade e as capacidades expansivas do Wordpress como base, o website foi meticulosamente construído a partir do zero, com um tema exclusivamente elaborado para atender às demandas específicas e à identidade singular da cidade. Cada elemento do design e funcionalidade foi cuidadosamente planejado para refletir a autenticidade e os pontos fortes de Águas do Acuruí.",
      url: "https://web.archive.org/web/20210302055106/http://aguasdoacurui.com.br/",
      date: format.strDateBetween("2017-12-31", "2017-12-31"),
      images: [
        {
          url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/aguas-do-acurui.jpg",
          description: "",
        },
      ],
    }),
    project({
      id: "cantor-beto-santos",
      show: true,
      name: "Cantor Beto Santos",
      summary:
        "Desenvolvimento de website com um CMS personalizado e recursos únicos.\n\n    O projeto apresenta uma funcionalidade interessante: um player de música integrado que reproduz as canções do cantor, permitindo que novas músicas sejam facilmente adicionadas através do painel interno do site.\n    \n    Uma característica notável do site é a disposição estratégica dos controles de reprodução, localizados tanto no topo quanto no corpo do site. A interconexão desses controles cria uma experiência de usuário fluida, evitando a necessidade de rolar constantemente. Essa abordagem garante uma navegação intuitiva, permitindo que os visitantes desfrutem da música sem interrupções, independentemente de onde estejam navegando no site.",
      url: "https://web.archive.org/web/20211127021144/http://betosantos.net/",
      date: format.strDateBetween("2017-12-31", "2017-12-31"),
      images: [
        {
          url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/cantor-beto-santos.jpg",
          description: "",
        },
      ],
    }),
    project({
      id: "estrela-rural",
      show: true,
      name: "Estrela Rural",
      summary:
        "Este projeto foi criado sobre o sistema de gerenciamento de conteúdo (CMS) e de leilões personalizado para atender às necessidades específicas do cliente. Esse sistema foi meticulosamente projetado e construído com base na plataforma customizada da agência, oferecendo uma solução completa para administrar conteúdos e realizar leilões de forma eficiente.\n    \n    Essa solução customizada representa não apenas a habilidade técnica da agência, mas também seu compromisso em oferecer aos clientes ferramentas sob medida que atendam exatamente às suas necessidades, agregando valor e eficiência aos seus processos de gestão e negócios.",
      url: "https://web.archive.org/web/20220110211402/http://estrelarural.com.br/",
      date: format.strDateBetween("2012-12-31", "2012-12-31"),
      images: [],
    }),
    project({
      id: "assemg",
      show: true,
      name: "ASSEMG",
      summary:
        "Site criado sobre CMS exclusivo para atender às necessidades da associação dos empregados da MGS. Esse CMS foi meticulosamente adaptado para oferecer uma experiência de usuário única e atender às demandas específicas da associação, garantindo uma plataforma eficiente e funcional para os membros.\n\n    O CMS customizado oferece ferramentas específicas para a gestão interna da associação, fornecendo um ambiente seguro e personalizado para comunicação e interação entre os membros, agregando valor e facilitando a administração dos recursos disponíveis.",
      url: "https://web.archive.org/web/20170612004919/http://assemg.org/",
      date: format.strDateBetween("2012-12-31", "2012-12-31"),
      images: [],
    }),
    project({
      id: "mandui",
      show: true,
      name: "Manduí",
      summary:
        "A Escola Infantil Manduí oferece um ambiente acolhedor projetado para crianças de 4 meses a 6 anos, destacando-se por sua abordagem educacional abrangente. O site foi concebido para refletir essa filosofia, utilizando tecnologias avançadas, como Nuxt 3, Vue 3, Vuetify 3 e Firebase, garantindo uma experiência interativa e informativa para pais e responsáveis.\n    \n    Para o backend, foi criado uma interface onde, ao se clicar em um elemento, um painel lateral se abre com suas possibilidades de edição. Os dados são salvos no Firebase, sendo o sistema concebido de forma serverless.",
      url: "https://mandui.com.br",
      date: format.strDateBetween("2023-01-01", "2023-01-31"),
      images: [
        {
          url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/mandui.jpg",
          description: "Visão da página inicial em desktop",
        },
        {
          url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/mandui-2.jpg",
          description: 'Visão da página "Casa Amarela" em desktop',
        },
        {
          url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/mandui-3.jpg",
          description: "Visão da página inicial em mobile",
        },
      ],
    }),
    project({
      id: "safe-register-car",
      show: false,
      name: "Safe Register Car",
    }),
    project({
      id: "tecnohub",
      show: false,
      name: "Tecnohub",
    }),
    project({
      id: "epa",
      show: false,
      name: "EPA",
      url: "https://www.epa.com.br",
    }),
    project({
      id: "unidas-seminovos",
      show: false,
      name: "Unidas Seminovos",
      url: "https://seminovos.unidas.com.br",
    }),
    project({
      id: "rehagro",
      show: false,
      name: "Rehagro",
      url: "https://rehagro.com.br",
    }),
  ],
  meta: {
    version: "v1.0.0",
    canonical: "https://github.com/jsonresume/resume-schema/blob/v1.0.0/schema.json",
    updatedAt: {
      date: "2023-12-06T14:20:14-03:00",
      formatted: "Dec 2023",
    },
  },
  contacts: [
    {
      name: "Whatsapp",
      url: "https://wa.me/message/NG7A2SW25XIEI1",
      icon: "https://api.iconify.design/ic:baseline-whatsapp.svg",
      value: "(31) 99527-1426",
    },
    {
      name: "E-mail",
      url: "mailto:jeferson.i.silva@gmail.com",
      icon: "https://api.iconify.design/ic:outline-alternate-email.svg",
      value: "jeferson.i.silva@gmail.com",
    },
    {
      name: "Phone",
      url: "tel:+5531995271426",
      icon: "https://api.iconify.design/material-symbols:call.svg",
      value: "(31) 99527-1426",
    },
  ],
  links: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jeferson-siqueira/",
      icon: "https://api.iconify.design/mdi:linkedin.svg",
      value: null,
    },
    {
      name: "Github",
      url: "https://github.com/jeff-silva",
      icon: "https://api.iconify.design/mdi:github.svg",
      value: null,
    },
    {
      name: "Portfólio",
      url: "https://jeff-silva.github.io",
      icon: "https://api.iconify.design/material-symbols:home-rounded.svg",
      value: null,
    },
    {
      name: "Currículo",
      url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/jeferson-silva.pdf",
      icon: "https://api.iconify.design/streamline:business-user-curriculum.svg",
      value: null,
    },
  ],
};

data.work = data.work
  .sort((a, b) => {
    if (a.date.start.date === null || a.date.final.date === null) {
      return 0;
    }

    return -1;
  })
  .sort((a, b) => {
    if (a.date.start.date === null || a.date.final.date === null) {
      return 0;
    }
    const timeA = format.dateUnix(a.date.final.date);
    const timeB = format.dateUnix(b.date.final.date);
    if (timeA < timeB) return -1;
    if (timeA > timeB) return 1;
    return 0;
  })
  .reverse();

data.skills = data.skills.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

export default data;

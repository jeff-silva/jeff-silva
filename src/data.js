import format from "./format.js";

let data = {
  $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/refs/heads/v1.0.0/schema.json",
  basics: format.jsonResumeBasics({
    name: "Jeferson Siqueira",
    label: "Dev Fullstack Sênior | AI | Laravel | Vue.js | React.js | Docker | Node.js | NestJS",
    image: "",
    email: "jeferson.i.silva@gmail.com",
    phone: "+55 31 99527-1426",
    url: "https://jeff-silva.github.io",
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
    format.jsonResumeWork({
      name: "Labscript.dev (Empresa própria)",
      position: "Dev Fullstack",
      url: "https://labscript.dev",
      summary: "Empresa aberta por mim para prestação de serviços freelancer.",
      startDate: "2011-01-01",
      // endDate: "",
      highlights: ["Empresa própria"],
    }),
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
    // format.jsonResumeWork({
    //   name: "Cardcom",
    //   position: "Dev Fullstack",
    //   url: "http://capp2.cardcombh.com.br",
    //   summary: "Desenvolvimento dos produtos internos da empresa.",
    //   startDate: "2024-01-01",
    //   endDate: '',
    // }),
    format.jsonResumeWork({
      name: "Search and Stay",
      position: "Dev Fullstack",
      url: "https://www.linkedin.com/company/search-and-stay/",
      summary: `Implementações e correções no sistema Search and Stay,
        utilizando Vue+Nuxt no frontend, Laravel no backend e plugin Wordpress.`,
      startDate: "2022-12-31",
      endDate: "2023-11-30",
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
      summary: "",
      startDate: "2020-10-31",
      endDate: "2022-04-30",
    }),
    format.jsonResumeWork({
      name: "Codificar Sistemas Tecnológicos",
      position: "Dev Fullstack",
      url: "https://www.linkedin.com/company/codificar/",
      summary: "",
      startDate: "2017-02-28",
      endDate: "2017-10-31",
    }),
    format.jsonResumeWork({
      name: "Agência de Criação",
      position: "Dev Fullstack",
      url: "https://www.linkedin.com/company/ag%C3%AAncia-de-cria%C3%A7%C3%A3o/",
      summary: `
        <p>Nessa agência, ajudei a desenvolver principalmente o CMS próprio, onde tive
        oportunidade de trabalhar com Vue.js e Angular.js.</p>

        <p>Com as melhorias e tecnologias novas trazidas, ajudei a melhorar a velocidade
        de correção de bugs e entrega.</p>
      `,
      startDate: "2015-01-31",
      endDate: "2017-02-28",
    }),
    format.jsonResumeWork({
      name: "Cushman & Wakefield",
      position: "Dev Fullstack",
      url: "https://www.linkedin.com/company/cushman-and-wakefield/",
      summary: `
        <p>Serviços prestados de forma terceirizada para a Vale do Rio Doce, onde eu
        era responsável por transformar algumas planilhas complexas utilizadas
        pelos engenheiros em aplicações web.</p>

        <p>Com as aplicações desenvolvidas, resolvi os problemas recorrentes com
        projetos perdidos por conta de arquivos Excel corrompidos, e a impossibilidade
        de dois engenheiros trabalharem ao mesmo tempo em um projeto.</p>

        <p>Em um dos projetos, criei uma interface interessante, que utilizava
        um gráfico de curva de Gauss para preencher vários campos de quantidade
        de profissionais contratados por mês de obra, algo que seria demorado
        de fazer manualmente. A solução foi bastante elogiada.</p>
      `,
      startDate: "2012-05-02",
      endDate: "2013-11-08",
    }),
    format.jsonResumeWork({
      name: "Netranet Networking",
      position: "Dev Fullstack",
      url: "https://www.linkedin.com/company/netranet-networking/",
      summary: `
        <p>Desenvolvimento de CMS própio da agência.</p>
        <p>Com a aplicação, consegui aumentar o controle da agência ao código fonte,
        melhorando o tempo de resolução de problemas e aumentando a flexibilidade
        das soluções vendidas.</p>
      `,
      startDate: "2011-01-13",
      endDate: "2012-01-13",
    }),
    format.jsonResumeWork({
      name: "Web BH Escola de Informática",
      position: "Instrutor",
      // url: null,
      summary: `
        <p>Atuei como instrutor dos cursos de PHP, MySQL, SQL Server, CSS,
        Javascript, HTML5, Tableless e Action script.</p>
      `,
      startDate: "2010-01-31",
      endDate: "2011-01-31",
    }),
  ],
  volunteer: [
    // format.jsonResumeVolunteer({}),
  ],
  education: [
    format.jsonResumeEducation({
      institution: "Centro Universitário UNA",
      area: "Cinema e Audiovisual",
      studyType: "Bacharelado",
      startDate: "2014-12-31",
      endDate: "2017-12-31",
      courses: [
        "História da Arte",
        "História do Cinema",
        "Roteiro",
        "Direção",
        "Fotografia",
        "Direção de fotografia",
        "Direção de Arte",
        "Teoria do Som",
        "Captação de Som",
        "Montagem e Edição",
        "Análise Crítica",
        "Animação",
        "Semiótica",
        "Legislação e Direito Autoral",
      ],
    }),
    format.jsonResumeEducation({
      institution: "WebBH Escola de Informática",
      area: "Desenvolvimento Web",
      studyType: "Ensino Técnico",
      startDate: "2009-03-31",
      endDate: "2010-09-30",
      courses: ["PHP", "MySQL", "SQL Server", "CSS", "Javascript", "HTML5", "Tableless", "Action script"],
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
    format.jsonResumeSkill({ name: "PostgreSQL", keywords: ["Database"] }),
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
    format.jsonResumeSkill({ name: "React.js", keywords: [] }),
    format.jsonResumeSkill({ name: "Node.js", keywords: [] }),
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
    format.jsonResumeSkill({ name: "NestJS", keywords: ["Main Stack"] }),
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
    format.jsonResumeSkill({ name: "Integração AI", keywords: [] }),
    format.jsonResumeSkill({ name: "Python", keywords: [] }),
    format.jsonResumeSkill({ name: "AdonisJS 6", keywords: [] }),
    format.jsonResumeSkill({ name: "Cálculos geospaciais", keywords: [] }),
    format.jsonResumeSkill({ name: "Mapas", keywords: [] }),
  ],
  languages: [
    format.jsonResumeLanguage({ language: "Português Brasileiro", fluency: "Nativo" }),
    format.jsonResumeLanguage({ language: "Inglês", fluency: "Leitura e Escrita" }),
  ],
  interests: [
    // format.jsonResumeInterest({}),
  ],
  references: [
    // format.jsonResumeReference({}),
  ],
  projects: [
    format.jsonResumeProject({
      name: "Corapost",
      description: `Desenvolvimento da interface desenvolvida no Figma`,
      url: "https://corapost.com",
      startDate: "2024-07-01",
      endDate: "2024-04-30",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Search and Stay",
      description:
        "Implementações e correções no sistema Search and Stay, utilizando Vue+Nuxt no frontend, Laravel no backend e plugin Wordpress.",
      url: "https://searchandstay.com",
      startDate: "2022-12-31",
      endDate: "2023-11-30",
    }),
    format.jsonResumeProject({
      name: "O Novo Mercado",
      description: "Desenvolvimento da plataforma interna de videos e hub de profissionais utilizando Vue.js + Vuetify",
      url: "https://onovomercado.com/",
      startDate: "2022-02-28",
      endDate: "2022-07-31",
    }),
    format.jsonResumeProject({
      name: "Assinar ou comprar",
      description:
        "Calculadora desenvolvida em parceria com Unidas e Samy Dana, para verificar se é mais vantajoso comprar ou alugar um carro.",
      url: "https://web.archive.org/web/20211217154133/https://assinaroucomprar.com.br/",
      startDate: "2021-12-31",
      endDate: "2021-12-31",
      highlights: ["Listra"],
    }),
    format.jsonResumeProject({
      name: "Samarco",
      description: `
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
      startDate: "2020-08-31",
      endDate: "2020-10-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Faculdade Faveni",
      description: "Estilização e customização de componentes do tema utilizando plataforma Wordpress com multisite.",
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
      description: `Notícias e utlidades do Banco da Amazônia. Feito utilizando Wordpress + Elementor
        com elementos personalizados. Feito em parceria com a Partners Comunicação Pro Business.`,
      url: "https://web.archive.org/web/20211229163534/https://basablog.com.br/",
      startDate: "2019-12-31",
      endDate: "2019-12-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Habitat Group",
      description: `Desenvolvimento de um website para a clínica veterinária Habitat Group.
        Criado com Wordpress e Elementor, o site oferece uma interface amigável e personalizada.
        Disponibiliza informações sobre serviços, profissionais qualificados e agendamento de 
        consultas para atendimento de qualidade aos animais de estimação e seus tutores.`,
      url: "https://web.archive.org/web/20220110082741/https://habitatgroup.com.br/",
      startDate: "2019-12-31",
      endDate: "2019-12-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Cocks Skate",
      description: `Desenvolvimento de e-commerce especializado em produtos para skatistas,
        utilizando Wordpress, Woocommerce e Elementor com elementos customizados.
        Somando uma experiência personalizada de compra com uma fácil navegação e busca dos produtos,
        a integração dessas ferramentas garante um site dinâmico, com funcionalidades de ponta e um design atraente;
        para o público interessado nesse nicho, visando atender suas necessidades e interesses.`,
      url: "https://web.archive.org/web/20211226170044/https://cocksskate.com.br/",
      startDate: "2018-12-31",
      endDate: "2018-12-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Don Desenvolvimento",
      description: "Alterações no layout original e manutenções pontuais utilizando Wordpress e Vue.",
      url: "https://web.archive.org/web/20181224004334/http://dondesenvolvimento.com.br/",
      startDate: "2018-12-31",
      endDate: "2018-12-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Eiriz Saúde",
      description:
        "Concebido e desenvolvido exclusivamente para atender às necessidades da clínica odontológica Eiriz Saúde, localizada em Porto, Portugal, este projeto é o resultado de uma parceria dedicada a aprimorar a experiência do usuário e a eficiência dos serviços oferecidos.\n    \n    Com foco na usabilidade e na interação fluída, o sistema Wordpress desenvolvido para a Eiriz Saúde incorporou recursos avançados de gerenciamento de conteúdo, garantindo não apenas a apresentação precisa dos serviços oferecidos, mas também a transmissão eficaz de informações importantes aos pacientes, proporcionando assim uma experiência online completa e informativa.",
      url: "http://eiriz-saude.unbox.pt",
      startDate: "2018-12-31",
      endDate: "2018-12-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Águas do Acuruí",
      description:
        "O desenvolvimento do website para a cidade de Águas do Acuruí foi um projeto dedicado e personalizado, visando promover a região de forma cativante e informativa.\n\n    Utilizando a versatilidade e as capacidades expansivas do Wordpress como base, o website foi meticulosamente construído a partir do zero, com um tema exclusivamente elaborado para atender às demandas específicas e à identidade singular da cidade. Cada elemento do design e funcionalidade foi cuidadosamente planejado para refletir a autenticidade e os pontos fortes de Águas do Acuruí.",
      url: "https://web.archive.org/web/20210302055106/http://aguasdoacurui.com.br/",
      startDate: "2017-12-31",
      endDate: "2017-12-31",
      highlights: ["Agência de Criação"],
    }),
    format.jsonResumeProject({
      name: "Cantor Beto Santos",
      description:
        "Desenvolvimento de website com um CMS personalizado e recursos únicos.\n\n    O projeto apresenta uma funcionalidade interessante: um player de música integrado que reproduz as canções do cantor, permitindo que novas músicas sejam facilmente adicionadas através do painel interno do site.\n    \n    Uma característica notável do site é a disposição estratégica dos controles de reprodução, localizados tanto no topo quanto no corpo do site. A interconexão desses controles cria uma experiência de usuário fluida, evitando a necessidade de rolar constantemente. Essa abordagem garante uma navegação intuitiva, permitindo que os visitantes desfrutem da música sem interrupções, independentemente de onde estejam navegando no site.",
      url: "https://web.archive.org/web/20211127021144/http://betosantos.net/",
      startDate: "2017-12-31",
      endDate: "2017-12-31",
      highlights: ["Agência de Criação"],
    }),
    format.jsonResumeProject({
      name: "Estrela Rural",
      description:
        "Este projeto foi criado sobre o sistema de gerenciamento de conteúdo (CMS) e de leilões personalizado para atender às necessidades específicas do cliente. Esse sistema foi meticulosamente projetado e construído com base na plataforma customizada da agência, oferecendo uma solução completa para administrar conteúdos e realizar leilões de forma eficiente.\n    \n    Essa solução customizada representa não apenas a habilidade técnica da agência, mas também seu compromisso em oferecer aos clientes ferramentas sob medida que atendam exatamente às suas necessidades, agregando valor e eficiência aos seus processos de gestão e negócios.",
      url: "https://web.archive.org/web/20220110211402/http://estrelarural.com.br/",
      startDate: "2012-12-31",
      endDate: "2012-12-31",
      highlights: ["Agência de Criação"],
    }),
    format.jsonResumeProject({
      name: "ASSEMG",
      description:
        "Site criado sobre CMS exclusivo para atender às necessidades da associação dos empregados da MGS. Esse CMS foi meticulosamente adaptado para oferecer uma experiência de usuário única e atender às demandas específicas da associação, garantindo uma plataforma eficiente e funcional para os membros.\n\n    O CMS customizado oferece ferramentas específicas para a gestão interna da associação, fornecendo um ambiente seguro e personalizado para comunicação e interação entre os membros, agregando valor e facilitando a administração dos recursos disponíveis.",
      url: "https://web.archive.org/web/20170612004919/http://assemg.org/",
      startDate: "2012-12-31",
      endDate: "2012-12-31",
      highlights: ["Agência de Criação"],
    }),
    format.jsonResumeProject({
      name: "Manduí",
      description:
        "A Escola Infantil Manduí oferece um ambiente acolhedor projetado para crianças de 4 meses a 6 anos, destacando-se por sua abordagem educacional abrangente. O site foi concebido para refletir essa filosofia, utilizando tecnologias avançadas, como Nuxt 3, Vue 3, Vuetify 3 e Firebase, garantindo uma experiência interativa e informativa para pais e responsáveis.\n    \n    Para o backend, foi criado uma interface onde, ao se clicar em um elemento, um painel lateral se abre com suas possibilidades de edição. Os dados são salvos no Firebase, sendo o sistema concebido de forma serverless.",
      url: "https://mandui.com.br",
      startDate: "2023-01-01",
      endDate: "2023-01-31",
      highlights: ["Labscript.dev"],
    }),
    format.jsonResumeProject({
      name: "Safe Register Car",
    }),
    format.jsonResumeProject({
      name: "Tecnohub",
    }),
    format.jsonResumeProject({
      name: "EPA",
      url: "https://www.epa.com.br",
    }),
    format.jsonResumeProject({
      name: "Unidas Seminovos",
      url: "https://seminovos.unidas.com.br",
    }),
    format.jsonResumeProject({
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

data.skills = data.skills.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

export default data;

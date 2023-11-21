import dayjs from "dayjs";

const dateData = (dataStr, formatStr = "MMM YYYY") => {
  const d = dayjs(dataStr);
  if (!d.isValid()) {
    return { date: "", formatted: "" };
  }
  return {
    date: d.format(),
    formatted: d.format(formatStr),
  };
};

const dateInterval = (startStr, finalStr) => {
  const start = dateData(startStr);
  const final = dateData(finalStr);
  const years = start.date && final.date ? dayjs(finalStr).diff(startStr, "y") : 0;
  const months = start.date && final.date ? dayjs(finalStr).diff(startStr, "M") % 12 : 0;
  return { start, final, years, months };
};

export default {
  meta: {
    updatedAt: dateData(dayjs().format()),
    resumeDownload: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/cv-jeferson-silva.pdf",
  },
  profile: {
    firstName: "Jeferson",
    lastName: "Siqueira",
    image: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/profile/image.jpg",
    birthDate: "Feb 11",
    headline: "Full-stack: Vue3, Nuxt3, Vuetify3, Node.js, Laravel, Docker, Git",
    summary: `Olá, tudo bem? 👋
    Atuo na área de desenvolvimento web desde 2011, tanto no front quando no backend.
    
    Já criei vários paineis administrativos dentro de vários contextos diferentes, de monolitos à microserviços. Também tenho conhecimento aprofundado em Wordpress, na criação de plugins ou temas.
    
    Hoje em dia, minha stack favorita é a que eu acredito ser a mais versátil para hospedagens compartilhadas ou dedicadas: Laravel com MySQL no backend, Vue 3 no front utilizando Nuxt 3 e Vuetify 3 como biblioteca de componentes, tudo isso em um monorepo orquestrado por Docker Compose.
    
    ✅ Já trabalhei em projetos solo e em equipes grandes, com profissionais de várias áreas;
    ✅ Me preocupo em estar sob constante aprendizado;
    ✅ Grandes desafios me movem;
    
    Estou disponível para contratos ou freelas.
    Será um prazer te ajudar a desenvolver suas idéias!`,
    geoLocation: {
      fullName: "Belo Horizonte/MG",
      city: "Belo Horizonte",
      state: "Minas Gerais",
      stateShort: "MG",
      country: "Brasil",
      countryShort: "BR",
      lat: -19.912998,
      lng: -43.940933,
    },
  },
  contacts: [
    {
      name: "Whatsapp",
      url: "https://wa.me/message/NG7A2SW25XIEI1",
      icon: "https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white",
    },
    {
      name: "E-mail",
      url: "mailto:jeferson.i.silva@gmail.com",
      icon: "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white",
    },
    {
      name: "Phone",
      url: "tel:+5531995271426",
      icon: "https://img.shields.io/badge/(31) 99527 1426-000000?style=for-the-badge&logoColor=white",
    },
  ],
  links: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jeferson-siqueira/",
      icon: "https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white",
    },
    {
      name: "Github",
      url: "https://github.com/jeff-silva/jeff-silva",
      icon: "https://img.shields.io/badge/Github-000?style=for-the-badge&logo=github",
    },
    {
      name: "Portfólio",
      url: "https://jeff-silva.github.io",
      icon: "https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me",
    },
    {
      name: "Currículo",
      url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/cv-jeferson-silva.pdf",
      icon: "https://img.shields.io/badge/Curriculo-000000?style=for-the-badge&logo=About.me",
    },
  ],
  skills: [
    {
      name: "Vue.js",
      meta: {
        rating: 5,
        icon: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
      },
    },
    {
      name: "Laravel",
      meta: {
        rating: 5,
        icon: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
      },
    },
    {
      name: "Docker",
      meta: {
        rating: 3,
        icon: "https://img.shields.io/badge/Docker-ffffff?logo=docker",
      },
    },
    {
      name: "Node.js",
      meta: {
        rating: 4,
        icon: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
      },
    },
    {
      name: "Vuetify",
      meta: {
        rating: 5,
        icon: "https://img.shields.io/badge/Vuetify-fff.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAq1BMVEUAAAAAgP+A//8Aqv8cjv+q4/+z5v8Xov8Vlf8Wm/Sx3v8UmfUUk/Wv3/+w2/8XmfQWlvSu3P+v3f8WlfgWl/QVmPSu3f8Vl/cXmPev3v8XlvWu3f8Wl/cWl/Wt3f+t3P8Wl/cVl/cVlvWt3f+u3v8Wlvev3P8WmPUWl/av3v8Wl/YWl/cWl/au3f8Wl/YWl/YWl/au3f8Wl/YWlvau3f8Wl/YWl/au3f/////cYWC4AAAANnRSTlMAAgIDCQkKCwwXFxkaICotLkJDRkdIW2JjY2R3f4CAk5abnJywt7i5zs7R0uPj5eby8vP0+/x1U4h8AAAAAWJLR0Q4oAel1gAAAJxJREFUGBm1wecCgQAUBeBDZjaRvXfK7Nz3fzO5mekn34efWspD3XCoFrgpXyQ0R5fKr0DNRF3KuT3VBCHzKDcjDKhOBdwNJXA0i2eqPh7Sroj0MKXysnjqiLiZqk9l4yW5kRZWVFsDb2qbZJOhBj6UDIdqgYgulV9BxJhqiqj8gYFTAV8GDPTxLbUjvSxitEkbcRLrrYFYloW/uAL1jiJcmJrO/AAAAABJRU5ErkJggg==",
      },
    },
    {
      name: "Nuxt.js",
      meta: {
        rating: 5,
        icon: "https://img.shields.io/badge/Nuxt.js-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white",
      },
    },
    {
      name: "Elementor",
      meta: {
        rating: 5,
        icon: "https://img.shields.io/badge/Elementor-ff0000?logo=elementor",
      },
    },
    {
      name: "WooCommerce",
      meta: {
        rating: 3,
        icon: "https://img.shields.io/badge/WooCommerce-c291ff?logo=woocommerce",
      },
    },
    {
      name: "JavaScript",
      meta: {
        rating: 5,
        icon: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      },
    },
    {
      name: "MySQL",
      meta: {
        rating: 4,
        icon: "https://img.shields.io/badge/MySQL-004260?style=for-the-badge&logo=mysql&logoColor=white",
      },
    },
    {
      name: "PHP",
      meta: {
        rating: 5,
        icon: "https://img.shields.io/badge/PHP-7377ad?style=for-the-badge&logo=php&logoColor=ffffff",
      },
    },
    {
      name: "WordPress",
      meta: {
        rating: 5,
        icon: "https://img.shields.io/badge/Wordpress-207196?style=for-the-badge&logo=wordpress&logoColor=ffffff",
      },
    },
    {
      name: "Git",
      meta: {
        rating: 3,
        icon: "https://img.shields.io/badge/Git-207196?style=for-the-badge&logo=git&logoColor=ffffff",
      },
    },
  ],
  positions: [
    {
      slug: "labscript.dev",
      show: true,
      companyName: "Labscript.dev",
      title: "Full-stack Developer",
      description: `Prestação de serviços para clientes diretos e parcerias com agências.
      De maneira resumida, nesse tempo desenvolvi sites e ecommerces utilizando Wordpress, WooCommerce e Elementor.
      Já implementei soluções com backend com PHP puro, Laravel e Node.js. No front, já trabalhei com Nuxt, Vue, HTML+CSS puro.
      Com banco de dados, tive oportunidade de trabalhar com MySQL e Firebase.`,
      location: {
        fullName: "Belo Horizonte/MG",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        stateShort: "MG",
        country: "Brasil",
        countryShort: "BR",
        lat: -19.912998,
        lng: -43.940933,
      },
      dateInterval: dateInterval("2011-01-01", ""),
    },
    {
      slug: "search-and-stay",
      show: true,
      companyName: "Search and Stay",
      title: "Full-stack Developer",
      description: ``,
      location: {
        fullName: "Austrália",
        city: "",
        state: "",
        stateShort: "",
        country: "",
        countryShort: "",
        lat: -41.429825,
        lng: 147.157135,
      },
      dateInterval: dateInterval("2022-12-01", "2023-11-01"),
    },
    {
      slug: "rehagro",
      show: false,
      companyName: "Rehagro",
      title: "Full-stack Developer",
      description: ``,
      location: {
        fullName: "Belo Horizonte/MG",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        stateShort: "MG",
        country: "Brasil",
        countryShort: "BR",
        lat: -19.912998,
        lng: -43.940933,
      },
      dateInterval: dateInterval("", ""),
    },
    {
      slug: "o-novo-mercado",
      show: false,
      companyName: "O Novo Mercado",
      title: "Frontend Developer",
      description: ``,
      location: {
        fullName: "São Paulo/SP",
        city: "São Paulo",
        state: "São Paulo",
        stateShort: "SP",
        country: "Brasil",
        countryShort: "BR",
        lat: -23.533773,
        lng: -46.62529,
      },
      dateInterval: dateInterval("", ""),
    },
    {
      slug: "listra",
      show: true,
      companyName: "Listra ",
      title: "Full-stack Developer",
      description: `Nessa empresa atuei como desenvolvedor fullstack, utilizando dentro da maioria dos projetos Laravel ou Node.js com banco de dados MySQL no backend, e Vue.js no frontend.
      Dentre os projetos desenvolvidos, estão a \"Unidas Seminovos\", uma plataforma de locação de veículos com filtro inteligente, e o \"Assinar ou comprar\", uma parceria entre Unidas e Samy Dana para criar uma calculadora que entrega para o usuário a melhor opção entre alugar um veículo ou comprar, dentro do modelo com acessórios selecionado pelo usuário.`,
      location: {
        fullName: "Belo Horizonte/MG",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        stateShort: "MG",
        country: "Brasil",
        countryShort: "BR",
        lat: -19.912998,
        lng: -43.940933,
      },
      dateInterval: dateInterval("2020-10-01", "2022-04-01"),
    },
    {
      slug: "digital-pixel",
      show: false,
      companyName: "Digital Pixel",
      title: "Full-stack Developer",
      description: `Atuação com plugins e temas Wordpress utiliando Elementor`,
      location: {
        fullName: "Belo Horizonte/MG",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        stateShort: "MG",
        country: "Brasil",
        countryShort: "BR",
        lat: -19.912998,
        lng: -43.940933,
      },
      dateInterval: dateInterval("", ""),
    },
    {
      slug: "codificar",
      show: true,
      companyName: "Codificar Sistemas Tecnológicos",
      title: "Full-stack Developer",
      description: `Nessa empresa, ajudei no desenvolvimento de algumas aplicações, onde em sua maioria eram utilizadas Laravel ou Node.js como backend, e Vue.js no frontend.`,
      location: {
        fullName: "Belo Horizonte/MG",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        stateShort: "MG",
        country: "Brasil",
        countryShort: "BR",
        lat: -19.912998,
        lng: -43.940933,
      },
      dateInterval: dateInterval("2017-02-01", "2017-10-01"),
    },
    {
      slug: "agencia-de-criacao",
      show: true,
      companyName: "Agência de Criação",
      title: "Full-stack Developer",
      description: `Nessa agência, ajudei a desenvolver principalmente o CMS próprio, onde tive oportunidade de trabalhar com Vue.js e Angular.js.
      Como banco de dados, foram utilizados principalmente MySQL e MariaDB. As soluções em backend envolviam PHP ou Node.js.`,
      location: {
        fullName: "Belo Horizonte/MG",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        stateShort: "MG",
        country: "Brasil",
        countryShort: "BR",
        lat: -19.912998,
        lng: -43.940933,
      },
      dateInterval: dateInterval("2015-01-01", "2017-01-01"),
    },
    {
      slug: "cushman-and-wakefield",
      show: true,
      companyName: "Cushman & Wakefield",
      title: "Full-stack Developer",
      description: `Dentro dessa experiência, atuei em duas diretorias diferentes, criando uma ferramenta para cada uma, sendo elas:  Ferramenta para filtrar fornecedores por estado, material/trabalho fornecido, orçamento anual, obras já prestadas, porte da empresa, entre outros dados;  Calculadora de prazo de obras, onde o valor total de um projeto era estimado de acordo com a quantidade de empregados levando em consideração a proporção encarregados/funcionários, benefícios, vales, valor de locação de equipamentos, imóveis, automóveis, eletricidade e outras coisas, utilizando uma curva de Gauss para calcular a quantidade de contratados dentro de uma timeline;  Nesse trabalho fui terceirizado para a Vale, onde os engenheiros utilizam bastante Excel para fazer seus trabalhos, então ambos os sistemas tinha que conversar bem com Excel e fazer importações e exportações.`,
      location: {
        fullName: "Belo Horizonte/MG",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        stateShort: "MG",
        country: "Brasil",
        countryShort: "BR",
        lat: -19.912998,
        lng: -43.940933,
      },
      dateInterval: dateInterval("2012-02-01", "2013-01-01"),
    },
    {
      slug: "netranet-networking",
      show: true,
      companyName: "Netranet Networking",
      title: "Full-stack Developer",
      description: "Desenvolvimento de funções para o CMS próprio da agência.",
      location: {
        fullName: "Belo Horizonte/MG",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        stateShort: "MG",
        country: "Brasil",
        countryShort: "BR",
        lat: -19.912998,
        lng: -43.940933,
      },
      dateInterval: dateInterval("2011-01-01", "2012-01-01"),
    },
    {
      slug: "webbh",
      show: true,
      companyName: "Web BH Escola de Informática",
      title: "Instrutor",
      description: "Atuei como instrutor dos cursos de PHP, MySQL, CSS, Javascript, HTML5, Tableless e Action script.",
      location: {
        fullName: "Belo Horizonte/MG",
        city: "Belo Horizonte",
        state: "Minas Gerais",
        stateShort: "MG",
        country: "Brasil",
        countryShort: "BR",
        lat: -19.912998,
        lng: -43.940933,
      },
      dateInterval: dateInterval("2010-01-01", "2011-01-01"),
    },
  ].filter((item) => item.show),
  projects: [
    {
      slug: "eiriz-saude",
      show: true,
      title: "Eiriz Saúde",
      positionSlug: ["labscript.dev"],
      description: `Concebido e desenvolvido exclusivamente para atender às necessidades da clínica odontológica Eiriz Saúde, localizada em Porto, Portugal, este projeto é o resultado de uma parceria dedicada a aprimorar a experiência do usuário e a eficiência dos serviços oferecidos.
      
      Com foco na usabilidade e na interação fluída, o sistema Wordpress desenvolvido para a Eiriz Saúde incorporou recursos avançados de gerenciamento de conteúdo, garantindo não apenas a apresentação precisa dos serviços oferecidos, mas também a transmissão eficaz de informações importantes aos pacientes, proporcionando assim uma experiência online completa e informativa.`,
      url: "http://eiriz-saude.unbox.pt",
      dateInterval: dateInterval("2017-01-01", "2017-01-01"),
      meta: {
        images: [
          {
            url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/eiriz-saude.jpg",
            description: ``,
          },
        ],
      },
    },
    {
      slug: "aguas-do-acurui",
      show: true,
      title: "Águas do Acuruí",
      positionSlug: ["agencia-de-criacao"],
      description: `O desenvolvimento do website para a cidade de Águas do Acuruí foi um projeto dedicado e personalizado, visando promover a região de forma cativante e informativa.

      Utilizando a versatilidade e as capacidades expansivas do Wordpress como base, o website foi meticulosamente construído a partir do zero, com um tema exclusivamente elaborado para atender às demandas específicas e à identidade singular da cidade. Cada elemento do design e funcionalidade foi cuidadosamente planejado para refletir a autenticidade e os pontos fortes de Águas do Acuruí.`,
      url: "https://web.archive.org/web/20210302055106/http://aguasdoacurui.com.br/",
      dateInterval: dateInterval("2015-01-01", "2015-12-01"),
      meta: {
        images: [
          {
            url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/aguas-do-acurui.jpg",
            description: ``,
          },
        ],
      },
    },
    {
      slug: "cantor-beto-santos",
      show: true,
      title: "Cantor Beto Santos",
      positionSlug: ["agencia-de-criacao"],
      description: `Desenvolvimento de website com um CMS personalizado e recursos únicos.

      O projeto apresenta uma funcionalidade interessante: um player de música integrado que reproduz as canções do cantor, permitindo que novas músicas sejam facilmente adicionadas através do painel interno do site.
      
      Uma característica notável do site é a disposição estratégica dos controles de reprodução, localizados tanto no topo quanto no corpo do site. A interconexão desses controles cria uma experiência de usuário fluida, evitando a necessidade de rolar constantemente. Essa abordagem garante uma navegação intuitiva, permitindo que os visitantes desfrutem da música sem interrupções, independentemente de onde estejam navegando no site.`,
      url: "https://web.archive.org/web/20211127021144/http://betosantos.net/",
      dateInterval: dateInterval("2015-01-01", "2015-12-01"),
      meta: {
        images: [
          {
            url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/cantor-beto-santos.jpg",
            description: ``,
          },
        ],
      },
    },
    {
      slug: "estrela-rural",
      show: true,
      title: "Estrela Rural",
      positionSlug: ["netranet"],
      description: `Este projeto foi criado sobre o sistema de gerenciamento de conteúdo (CMS) e de leilões personalizado para atender às necessidades específicas do cliente. Esse sistema foi meticulosamente projetado e construído com base na plataforma customizada da agência, oferecendo uma solução completa para administrar conteúdos e realizar leilões de forma eficiente.
      
      Essa solução customizada representa não apenas a habilidade técnica da agência, mas também seu compromisso em oferecer aos clientes ferramentas sob medida que atendam exatamente às suas necessidades, agregando valor e eficiência aos seus processos de gestão e negócios.`,
      url: "https://web.archive.org/web/20220110211402/http://estrelarural.com.br/",
      dateInterval: dateInterval("2011-01-01", "2011-12-01"),
      meta: {
        images: [],
      },
    },
    {
      slug: "assemg",
      show: true,
      title: "ASSEMG",
      positionSlug: ["netranet"],
      description: `Site criado sobre CMS exclusivo para atender às necessidades da associação dos empregados da MGS. Esse CMS foi meticulosamente adaptado para oferecer uma experiência de usuário única e atender às demandas específicas da associação, garantindo uma plataforma eficiente e funcional para os membros.

      O CMS customizado oferece ferramentas específicas para a gestão interna da associação, fornecendo um ambiente seguro e personalizado para comunicação e interação entre os membros, agregando valor e facilitando a administração dos recursos disponíveis.`,
      url: "https://web.archive.org/web/20170612004919/http://assemg.org/",
      dateInterval: dateInterval("2015-01-01", "2015-12-01"),
      meta: {
        images: [],
      },
    },
    {
      slug: "samarco",
      show: true,
      title: "Samarco",
      positionSlug: ["digital-pixel"],
      description: `Em uma colaboração estratégica com a agência Belo Horizontina Digital Pixel, desenvolvemos um eficiente gerenciador de conteúdo empregando a combinação poderosa de Wordpress e Elementor. Essa parceria resultou em um sistema dinâmico e versátil para administrar e apresentar conteúdos online de forma eficaz.

      A integração do Wordpress, conhecido por sua flexibilidade e extensibilidade, com a tecnologia intuitiva do Elementor, proporcionou uma solução robusta. Isso permitiu a criação e gestão de conteúdos de maneira simplificada, ao mesmo tempo em que ofereceu ferramentas de design avançadas para aprimorar a estética e a interatividade do site, atendendo às expectativas do cliente e proporcionando uma experiência de usuário aprimorada.`,
      url: "https://web.archive.org/web/20220130172103/https://www.samarco.com/",
      dateInterval: dateInterval("2020-08-01", "2020-10-01"),
      meta: {
        images: [],
      },
    },
    {
      slug: "orbitae",
      show: true,
      title: "Orbitae",
      positionSlug: ["labscript.dev"],
      description: `Desenvolvemos apresentações de produtos especializados em perícia forense, integrando Wordpress e Elementor com elementos personalizados.
      
      Essa parceria estratégica com a Partners Comunicação Pro Business resultou em uma plataforma dinâmica e visualmente cativante. Combinando a flexibilidade do Wordpress e a criatividade do Elementor, criamos uma experiência de usuário impactante para os produtos, garantindo destaque e acessibilidade aos detalhes técnicos. Essa colaboração permitiu a construção de uma plataforma dinâmica e eficiente, facilitando a apresentação e a compreensão dos produtos para um público amplo e diversificado.`,
      url: "https://web.archive.org/web/20210517192720/https://orbitae.com.br/",
      dateInterval: dateInterval("2019-01-01", "2019-08-01"),
      meta: {
        images: [
          {
            url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/orbitae.jpg",
            description: ``,
          },
        ],
      },
    },
    {
      slug: "cocks-skate",
      show: true,
      title: "Cocks Skate",
      positionSlug: ["labscript.dev"],
      description: `Desenvolvimento de e-commerce especializado em produtos para skatistas, utilizando Wordpress, Woocommerce e Elementor com elementos customizados.
      
      Somando uma experiência personalizada de compra com uma fácil navegação e busca dos produtos, a integração dessas ferramentas garante um site dinâmico, com funcionalidades de ponta e um design atraente para o público interessado nesse nicho, visando atender suas necessidades e interesses.`,
      url: "https://web.archive.org/web/20211226170044/https://cocksskate.com.br/",
      dateInterval: dateInterval("2018-01-01", "2018-01-01"),
      meta: {
        images: [
          {
            url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/cocks-skate.jpg",
            description: ``,
          },
        ],
      },
    },
    {
      slug: "habitat-group",
      show: true,
      title: "Habitat Group",
      positionSlug: ["labscript.dev"],
      description: `Desenvolvimento de um website para a clínica veterinária Habitat Group.
      Criado com Wordpress e Elementor, o site oferece uma interface amigável e personalizada. Disponibiliza informações sobre serviços, profissionais qualificados e agendamento de consultas para atendimento de qualidade aos animais de estimação e seus tutores.`,
      url: "https://web.archive.org/web/20220110082741/https://habitatgroup.com.br/",
      dateInterval: dateInterval("2019-01-01", "2019-01-01"),
      meta: {
        images: [
          {
            url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/habitat-group.jpg",
            description: ``,
          },
        ],
      },
    },
    {
      slug: "don-desenvolvimento",
      show: true,
      title: "Don Desenvolvimento",
      positionSlug: ["labscript.dev"],
      description: "Alterações no layout original e manutenções pontuais utilizando Wordpress e Vue.",
      url: "https://web.archive.org/web/20181224004334/http://dondesenvolvimento.com.br/",
      dateInterval: dateInterval("2018-01-01", "2018-01-01"),
      meta: {
        images: [
          {
            url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/don-desenvolvimento.jpg",
            description: ``,
          },
        ],
      },
    },
    {
      slug: "basa-blog",
      show: true,
      title: "Blog Banco da Amazônia",
      positionSlug: ["labscript.dev"],
      description: `Notícias e utlidades do Banco da Amazônia. Feito utilizando Wordpress + Elementor com elementos personalizados. Feito em parceria com a Partners Comunicação Pro Business.`,
      url: "https://web.archive.org/web/20211229163534/https://basablog.com.br/",
      dateInterval: dateInterval("2019-01-01", "2019-01-01"),
      meta: {
        images: [
          {
            url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/blog-banco-da-amazonia.jpg",
            description: ``,
          },
        ],
      },
    },
    {
      slug: "assinar-ou-comprar",
      show: true,
      title: "Assinar ou comprar",
      positionSlug: ["listra"],
      description:
        "Calculadora desenvolvida em parceria com Unidas e Samy Dana, para verificar se é mais vantajoso comprar ou alugar um carro.",
      url: "https://web.archive.org/web/20211217154133/https://assinaroucomprar.com.br/",
      dateInterval: dateInterval("2021-01-01", "2021-01-01"),
      meta: {
        images: [],
      },
    },
    {
      slug: "faculdade-faveni",
      show: true,
      title: "Faculdade Faveni",
      positionSlug: ["digital-pixel"],
      description: "Estilização e customização de componentes do tema utilizando plataforma Wordpress com multisite.",
      url: "https://web.archive.org/web/20220131193706/https://faveni.edu.br/",
      dateInterval: dateInterval("2020-01-01", "2020-01-01"),
      meta: {
        images: [],
      },
    },
    {
      slug: "o-novo-mercado",
      show: true,
      title: "O Novo Mercado",
      positionSlug: ["o-novo-mercado"],
      description: "Desenvolvimento da plataforma interna de videos e hub de profissionais utilizando Vue.js + Vuetify",
      url: "https://onovomercado.com/",
      dateInterval: dateInterval("2022-02-01", "2022-07-01"),
      meta: {
        images: [],
      },
    },
    {
      slug: "search-and-stay",
      show: true,
      title: "Search and Stay",
      positionSlug: ["search-and-stay"],
      description: `Implementações e correções no sistema Search and Stay, utilizando Vue+Nuxt no frontend, Laravel no backend e plugin Wordpress.`,
      url: "",
      dateInterval: dateInterval("2022-12-01", "2023-11-01"),
      meta: {
        images: [],
      },
    },
    {
      slug: "mandui",
      show: true,
      title: "Manduí",
      positionSlug: ["labscript.dev"],
      description: `A Escola Infantil Manduí oferece um ambiente acolhedor projetado para crianças de 4 meses a 6 anos, destacando-se por sua abordagem educacional abrangente. O site foi concebido para refletir essa filosofia, utilizando tecnologias avançadas, como Nuxt 3, Vue 3, Vuetify 3 e Firebase, garantindo uma experiência interativa e informativa para pais e responsáveis.
      
      Para o backend, foi criado uma interface onde, ao se clicar em um elemento, um painel lateral se abre com suas possibilidades de edição. Os dados são salvos no Firebase, sendo o sistema concebido de forma serverless.`,
      url: "https://mandui.com.br",
      dateInterval: dateInterval("2023-08-01", "2023-11-01"),
      meta: {
        images: [
          {
            url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/mandui.jpg",
            description: `Visão da página inicial em desktop`,
          },
          {
            url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/mandui-2.jpg",
            description: `Visão da página "Casa Amarela" em desktop`,
          },
          {
            url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/projects/mandui-3.jpg",
            description: `Visão da página inicial em mobile`,
          },
        ],
      },
    },
  ].filter((item) => item.show),
  languages: [
    {
      name: "Português",
      proficiency: "Native or bilingual proficiency",
    },
    {
      name: "Inglês",
      proficiency: "Elementary proficiency",
    },
  ],
  education: [
    {
      schoolName: "Centro Universitário UNA",
      startDate: "2014",
      endDate: "2017",
      notes: "",
      degreeName: "Cinema e Audiovisual",
      activities: "",
    },
    {
      schoolName: "WebBH Escola de Informática",
      startDate: "Mar 2009",
      endDate: "Sep 2010",
      notes: `Curso de linguagens para desenvolvimento para a plataforma web: HTML, CSS, Javascript, PHP, MySWL, C# e SQL Server.`,
      degreeName: "Ensino Técnico",
      activities: "",
    },
  ],
};

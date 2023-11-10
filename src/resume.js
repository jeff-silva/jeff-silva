import fs from 'fs';
import boxen from 'boxen';
import { JSDOM } from 'jsdom';
import dayjs from 'dayjs';

export const markdownWrite = () => {
  let curriculum = [];

  const boxWidth = 90;
  const boxenOpts = {
    padding: .5,
    width: boxWidth,
    titleAlignment: 'center',
    borderStyle: {
      topLeft: '',
      topRight: '',
      bottomLeft: '',
      bottomRight: '',
      top: '─',
      bottom: '',
      left: '',
      right: '',
    },
  };
  
  const textSpacer = ({ left='', right='', size=boxWidth, str='·', offset=0 }) => {
    const fakeL = (new JSDOM(left)).window.document.body.textContent;
    const fakeR = (new JSDOM(right)).window.document.body.textContent;
    const spacerSize = size - fakeL.length - fakeR.length - offset;
    return left +' '+ (str.repeat(spacerSize)) +' '+ right;
  };

  const textCenter = ({ text, str='~', width=boxWidth }) => {
    const sideSize = Math.ceil((width - text.length) / 2);
    return str.repeat(sideSize) + ` ${text} ` + str.repeat(sideSize);
  };

  const textOrLink = ({ text='', url='' }) => {
    if (url) return `<a href="${url}" target="_blank">${text}</a>`;
    return text;
  };

  const sectionAdd = (title, callback) => {
    let lines = [''];
    callback.call(this, lines, boxenOpts);

    curriculum.push(textCenter({ text: title }));
    curriculum.push(lines.join("\n"));
  };

  curriculum.push('<pre>');

  // Bio
  sectionAdd(data.name.toUpperCase(), (lines, options) => {
    lines.push(`👨🏻‍💻 ${data.description}`);
    lines.push(`🌎 ${data.place}`);
    if (data.openToWork) lines.push(`🟢 Open to work`);
    lines.push('', data.bio);
  });

  curriculum.push('');

  // Contacts
  sectionAdd('CONTACTS', (lines, options) => {
    data.contacts.map((item) => {
      lines.push(textSpacer({
        left: item.name,
        right: `<a href="${item.url}">${item.value}</a>`,
      }));
    });
    data.links.map((item) => {
      lines.push(textSpacer({
        left: item.name,
        right: `<a href="${item.url}">${item.url}</a>`,
      }));
    });
  });

  curriculum.push('');

  // Skills
  sectionAdd('SKILLS', (lines, options) => {
    data.skills.map((item) => {
      const stars = '⭐'.repeat(item.rating) + ' '.repeat(5-item.rating);
      lines.push(textSpacer({ left: item.name, right: `${item.rating}/5 ${stars}`, offset: 7 }));
    });
  });

  curriculum.push('');

  // Experiences
  sectionAdd('EXPERIENCES', (lines, options) => {
    data.experiences.map((item, index) => {
      if (!item.active) return;
      if (index>0) lines.push('');

      const dates = [
        (item.date_start ? dayjs(item.date_start).format('YYYY') : 'Atualmente'),
        (item.date_final ? dayjs(item.date_final).format('YYYY') : 'Atualmente'),
      ].join(' ~ ');

      const itemName = textOrLink({ text: item.name, url: item.url });

      lines.push(textSpacer({
        left: `${itemName} · ${item.job}`,
        right: dates,
      }));

      if (item.description) {
        lines.push(item.description);
      }

      lines.push(`Stack: ${item.stack.join(', ')}`);
      
      if (item.projects.length>0) {
        lines.push('', 'Projetos executados:');
        item.projects.map((project) => {
          lines.push(textSpacer({
            left: textOrLink({ text: project.name, url: project.url }),
            right: project.stack.join(', '),
          }));
        });
      }
    });
  });

  curriculum.push('</pre>');
  
  curriculum = curriculum.join("\n");
  let content = fs.readFileSync('./README.md', 'utf8');
  content = content.replace(/(<!--curriculum:start-->)([\s\S]*?)(<!--curriculum:final-->)/m, `$1\n${curriculum}\n$3`);
  fs.writeFileSync('./README.md', content);
};

export const data = {
  name: "Jeferson Inácio Siqueira",
  description: "Desenvolvedor Full-Stack",
  bio: [
    'Hi, im Jeferson 👋',
    'I have been a web developer since 2011.',
    'I am an enthusiast of simple tools that help me focus only on the business rules of the system.',
  ].join("\n"),
  place: "Belo Horizonte / MG",
  openToWork: true,
  links: [
    {
      name: "Website",
      url: "https://labscript.dev",
    },
    {
      name: "Github",
      url: "https://github.com/jeff-silva",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jeferson-siqueira",
    },
  ],
  contacts: [
    {
      name: "E-mail",
      value: "jeferson.i.silva@gmail.com",
      url: "mailto:jeferson.i.silva@gmail.com",
    },
    {
      name: "Phone",
      value: "+55 (31) 99527-1426",
      url: "tel:+5531995271426",
    },
    {
      name: "Whatsapp",
      value: "https://wa.me/message/NG7A2SW25XIEI1",
      url: "https://wa.me/message/NG7A2SW25XIEI1",
    }
  ],
  skills: [
    {
      name: "PHP",
      rating: 5,
    },
    {
      name: "Laravel",
      rating: 4,
    },
    {
      name: "MySQL",
      rating: 4,
    },
    {
      name: "Javascript",
      rating: 4,
    },
    {
      name: "Vue 3",
      rating: 5,
    },
    {
      name: "Nuxt 3",
      rating: 5,
    },
    {
      name: "Vuetify 3",
      rating: 5,
    },
    {
      name: "Docker",
      rating: 3,
    },
    {
      name: "Node JS",
      rating: 4,
    },
    {
      name: "Wordpress",
      rating: 5,
    },
    {
      name: "Three.js",
      rating: 4,
    },
  ],
  experiences: [
    {
      name: "Freelancer",
      description: "Desenvolvimento de projetos freelancer e pessoais",
      job: "Dev Fullstack",
      active: true,
      url: "",
      date_start: "2010-01-01",
      date_final: false,
      stack: [ "PHP", "Laravel", "Wordpress", "Git", "Docker", "Vue", "Nuxt", "Elementor", "Bootstrap" ],
      projects: [
        {
          name: "Blog Banco da Amazônia",
          description: `Notícias e utlidades do Banco da Amazônia.
            Feito utilizando Wordpress + Elementor com elementos personalizados.
            Feito em parceria com a Partners Comunicação Pro Business, 2019.`,
          url: "https://basablog.com.br",
          stack: [ "Wordpress" ],
          images: [],
        },
        {
          name: "Don Desenvolvimento",
          description: `Alterações no layout original e manutenções pontuais utilizando Wordpress e Vue. Ano: 2018`,
          url: "https://dondesenvolvimento.com.br",
          stack: [ "Wordpress", "Vue", "Elementor", "Bootstrap" ],
          images: [],
        },
        {
          name: "Cocks Skate",
          description: `E-commerce para vendas de produtos voltados para skatistas.
            Criado com Wordpress + Woocommerce + Elementor com elementos customizados, 2018.`,
          url: "https://cocksskate.com.br",
          stack: [ "Wordpress", "Vue", "Elementor", "Bootstrap" ],
          images: [],
        },
        {
          name: "Orbitae",
          description: `Apresentações de produtos voltados para perícia forense.
            Feito utilizando Wordpress + Elementor com elementos personalizados.
            Feito em parceria com a Partners Comunicação Pro Business, 2019.`,
          url: "https://orbitae.com.br",
          stack: [ "Wordpress", "Vue", "Elementor", "Bootstrap" ],
          images: [],
        },
        {
          name: "Habitat Group",
          description: `Clínica veterinária, utilizando Wordpress + Elementor com elementos customizados, 2019.`,
          url: "https://habitatgroup.com.br",
          stack: [ "Wordpress", "Vue", "Elementor", "Bootstrap" ],
          images: [],
        },
        {
          name: "Eiriz Saúde",
          description: `Site em parceria com a Subtl - Agência de marketing em Portugal, 2017`,
          url: "http://eiriz-saude.unbox.pt/",
          stack: [ "Wordpress", "Vue", "Elementor", "Bootstrap" ],
          images: [],
        },
      ],
    },
    {
      name: "Search and Stay",
      description: "Sistema de locação por temporada para imóveis na Austrália",
      job: "Dev Fullstack",
      active: true,
      url: "https://www.searchandstay.com",
      date_start: "2022-12-01",
      date_final: "2023-11-01",
      stack: [ "Vue", "Nuxt", "Javascript", "Node.js", "Laravel", "Git", "Docker" ],
      projects: [],
    },
    {
      name: "Rehagro",
      description: "Plataforma de ensino à distância voltada para a área de agronegócio",
      job: "Dev Frontend",
      active: true,
      url: "",
      date_start: "2022-09-01",
      date_final: "2022-12-01",
      stack: [ "React", "Javascript", "Laravel", "Node.js", "Git", "CSS", "HTML" ],
      projects: [],
    },
    {
      name: "Iterative",
      description: "Plataforma de ensino à distância",
      job: "Dev Frontend",
      active: true,
      url: "",
      date_start: "2022-04-01",
      date_final: "2022-08-01",
      stack: [ "Vue.js", "Javascript", "Node.js", "CSS", "HTML" ],
      projects: [],
    },
    {
      name: "Listra",
      description: "",
      job: "Dev Fullstack",
      active: true,
      url: "",
      date_start: "2020-10-01",
      date_final: "2022-04-01",
      stack: [ "Vue.js", "Nuxt", "PHP", "Laravel", "MySQL", "Javascript", "CSS", "HTML" ],
      projects: [
        {
          name: "Assinar ou Comprar",
          description: "",
          url: "https://assinaroucomprar.com.br/",
          stack: [ "Nuxt", "Rest API", "Laravel" ],
          images: [],
        },
        {
          name: "Rede Clipping",
          description: "",
          url: "https://redeclipping.com.br/",
          stack: [ "Laravel" ],
          images: [],
        },
        {
          name: "EPA Supermercados",
          description: "",
          url: "https://epa.com.br",
          stack: [ "Wordpress" ],
          images: [],
        },
      ],
    },
    {
      name: "Digital Pixel",
      description: "",
      job: "Dev Fullstack",
      active: true,
      url: "",
      date_start: "2020-08-01",
      date_final: "2020-10-01",
      stack: [ "Vue.js", "PHP", "Wordpress", "MySQL", "Javascript", "CSS", "HTML" ],
      projects: [
        {
          name: "Samarco",
          description: "",
          url: "",
          stack: [ "Wordpress", "Bootstrap", "Elementor", "Vue" ],
          images: [],
        },
        {
          name: "Faveni",
          description: "",
          url: "",
          stack: [ "Wordpress", "Bootstrap", "Elementor", "Vue" ],
          images: [],
        },
      ],
    },
    {
      name: "Codificar",
      description: "",
      job: "Dev Fullstack",
      active: true,
      url: "",
      date_start: "2017-02-01",
      date_final: "2017-10-01",
      stack: [ "Vue.js", "PHP", "MySQL", "Laravel", "Javascript", "CSS", "HTML" ],
      projects: [
        {
          name: "Rescon",
          description: "",
          url: "",
          stack: [ "Framework desconhecido", "PHP", "Vue" ],
          images: [],
        },
      ],
    },
    {
      name: "Agência de Criação",
      description: "Prestação de serviço terceirizado para a Vale do Rio Doce",
      job: "Dev Fullstack",
      active: true,
      url: "",
      date_start: "2015-01-01",
      date_final: "2017-01-01",
      stack: [ "Angular", "Vue.js", "PHP", "MySQL", "Javascript", "JQuery", "CSS", "HTML" ],
      projects: [
        {
          name: "ASSEMG",
          description: "Site com CMS totalmente personalizado, 2014.",
          url: "https://web.archive.org/web/20170612004919/http://assemg.org/",
          stack: [ ],
          images: [],
        },
        {
          name: "Bretas e Reis",
          description: "Website com CMS personalizado para a agência, 2015.",
          url: "http://www.brettasereis.adv.br",
          stack: [ ],
          images: [],
        },
        {
          name: "Cantor Beto Santos",
          description: "Desenvolvimento de website com CMS personalizado para a agência, 2015",
          url: "http://betosantos.net",
          stack: [ ],
          images: [],
        },
        {
          name: "Águas do Acuruí",
          description: "Serviço prestado para Agência de criação, 2015",
          url: "http://aguasdoacurui.com.br/",
          stack: [ ],
          images: [],
        },
      ],
    },
    {
      name: "Cushman & Wakefield",
      description: "",
      job: "Dev Fullstack",
      active: true,
      url: "",
      date_start: "2012-02-01",
      date_final: "2013-01-01",
      stack: [ "PHP", "MySQL", "Javascript", "JQuery", "CSS", "HTML" ],
      projects: [
        {
          name: "Calculadora de Gastos de Obra",
          description: "Sistema para cálculo de valor total de obra",
          url: "",
          stack: [ "PHP", "MySQL", "CSS", "JQuery" ],
          images: [],
        },
        {
          name: "Database de fornecedores",
          description: "Banco de dados de fornecedores com diversos tipos de filtros",
          url: "",
          stack: [ "PHP", "MySQL", "CSS", "JQuery" ],
          images: [],
        },
      ],
    },
    {
      name: "Netranet Networking",
      description: "",
      job: "Dev Fullstack",
      active: true,
      url: "",
      date_start: "2011-11-01",
      date_final: "2012-01-01",
      stack: [ "PHP", "MySQL", "Javascript", "JQuery", "CSS", "HTML" ],
      projects: [
        {
          name: "Estrela Rural",
          description: "Leilão de cavalos e bois",
          url: "",
          stack: [ "PHP", "MySQL", "CSS", "JQuery" ],
          images: [],
        },
      ],
    },
    {
      name: "Web BH Escola de Informática",
      description: "",
      job: "Instrutor",
      active: true,
      url: "",
      date_start: "2010-01-01",
      date_final: "2011-01-01",
      stack: [ "PHP", "MySQL", "Javascript", "CSS", "ActionScript", "HTML" ],
      projects: [],
    },
  ],
};
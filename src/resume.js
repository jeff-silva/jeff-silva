import fs from 'fs';
import boxen from 'boxen';

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

  const textSpacer = (textLeft, textRight, size=boxWidth-10, str='·') => {
    const spacerSize = size - textLeft.length - textRight.length;
    return textLeft +' '+ (str.repeat(spacerSize)) +' '+ textRight;
  };

  const sectionAdd = (title, callback) => {
    let lines = [''];
    callback.call(this, lines, boxenOpts);
    curriculum.push(boxen(lines.join("\n"), { title, ...boxenOpts }));
    // curriculum.push(boxen('', { title, ...boxenOpts }), lines.join("\n"), '', '');
  };

  curriculum.push('```text');

  // Bio
  sectionAdd(data.name.toUpperCase(), (lines, options) => {
    lines.push(data.description, '', data.bio);
  });

  // Contacts
  sectionAdd('CONTACTS', (lines, options) => {
    data.contacts.map((item) => {
      lines.push(textSpacer(item.name, item.value));
    });
    data.links.map((item) => {
      lines.push(textSpacer(item.name, item.url));
    });
  });

  // Skills
  sectionAdd('SKILLS', (lines, options) => {
    data.skills.map((item) => {
      const stars = '★'.repeat(item.rating) + '☆'.repeat(5-item.rating);
      lines.push(textSpacer(item.name, `${stars} - ${item.rating}/5`));
    });
  });

  // Experiences
  sectionAdd('EXPERIENCES', (lines, options) => {
    data.experiences.map((item, index) => {
      if (index>0) lines.push('');
      lines.push(item.name);
      lines.push(textSpacer(item.job, `01/2020 ~ 12/2020`));
      if (item.projects.length>0) {
        lines.push('- Projects:');
        item.projects.map((project) => {
          lines.push(`  • ${project.name}`);
        });
      }
    });
  });

  curriculum.push('```');
  
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
  place: {
    city: "Belo Hozironte",
    state: "Minas Gerais",
    state_short: "MG",
  },
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
    },
    {
      name: "Phone",
      value: "+55 (31) 99527-1426",
    },
    {
      name: "Whatsapp",
      value: "https://wa.me/message/NG7A2SW25XIEI1",
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
      name: "Search and Stay",
      job: "Fullstack Developer",
      active: false,
      date_start: "2022-12-01",
      date_final: "2023-11-01",
      projects: [],
    },
    {
      name: "Rehagro",
      job: "Frontend Developer",
      active: false,
      date_start: "2022-09-01",
      date_final: "2022-12-01",
      projects: [],
    },
    {
      name: "Iterative",
      job: "Frontend Developer",
      active: false,
      date_start: "2022-04-01",
      date_final: "2022-08-01",
      projects: [],
    },
    {
      name: "Listra",
      job: "Fullstack Developer",
      active: true,
      date_start: "2020-10-01",
      date_final: "2022-04-01",
      projects: [],
    },
    {
      name: "Digital Pixel",
      job: "Fullstack Developer",
      active: false,
      date_start: "2020-08-01",
      date_final: "2020-10-01",
      projects: [],
    },
    {
      name: "Codificar",
      job: "Fullstack Developer",
      active: true,
      date_start: "2017-02-01",
      date_final: "2017-10-01",
      projects: [],
    },
    {
      name: "Agência de Criação",
      job: "Fullstack Developer",
      active: true,
      date_start: "2015-01-01",
      date_final: "2017-01-01",
      projects: [
        {
          name: "ASSEMG",
          description: "Site com CMS totalmente personalizado, 2014.",
          link: "https://web.archive.org/web/20170612004919/http://assemg.org/",
          images: [],
        },
        {
          name: "Bretas e Reis",
          description: "Website com CMS personalizado para a agência, 2015.",
          link: "http://www.brettasereis.adv.br",
          images: [],
        },
        {
          name: "Cantor Beto Santos",
          description: "Desenvolvimento de website com CMS personalizado para a agência, 2015",
          link: "http://betosantos.net",
          images: [],
        },
        {
          name: "Águas do Acuruí",
          description: "Serviço prestado para Agência de criação, 2015",
          link: "http://aguasdoacurui.com.br/",
          images: [],
        },
      ],
    },
    {
      name: "Cushman & Wakefield",
      job: "Fullstack Developer",
      active: true,
      date_start: "2012-02-01",
      date_final: "2013-01-01",
      projects: [],
    },
    {
      name: "Netranet Networking",
      job: "Fullstack Developer",
      active: true,
      date_start: "2011-11-01",
      date_final: "2012-01-01",
      projects: [],
    },
    {
      name: "Web BH Escola de Informática",
      job: "Instrutor",
      active: true,
      date_start: "2010-01-01",
      date_final: "2011-01-01",
      projects: [],
    },
    {
      name: "Freelancer",
      job: "Fullstack Developer",
      active: true,
      date_start: "2010-01-01",
      date_final: false,
      projects: [
        {
          name: "Blog Banco da Amazônia",
          description: `Notícias e utlidades do Banco da Amazônia.
            Feito utilizando Wordpress + Elementor com elementos personalizados.
            Feito em parceria com a Partners Comunicação Pro Business, 2019.`,
          link: "https://basablog.com.br",
          images: [],
        },
        {
          name: "Don Desenvolvimento",
          description: `Alterações no layout original e manutenções pontuais utilizando Wordpress e Vue. Ano: 2018`,
          link: "https://dondesenvolvimento.com.br",
          images: [],
        },
        {
          name: "Cocks Skate",
          description: `E-commerce para vendas de produtos voltados para skatistas.
            Criado com Wordpress + Woocommerce + Elementor com elementos customizados, 2018.`,
          link: "https://cocksskate.com.br",
          images: [],
        },
        {
          name: "Orbitae",
          description: `Apresentações de produtos voltados para perícia forense.
            Feito utilizando Wordpress + Elementor com elementos personalizados.
            Feito em parceria com a Partners Comunicação Pro Business, 2019.`,
          link: "https://orbitae.com.br",
          images: [],
        },
        {
          name: "Habitat Group",
          description: `Clínica veterinária, utilizando Wordpress + Elementor com elementos customizados, 2019.`,
          link: "https://habitatgroup.com.br",
          images: [],
        },
        {
          name: "Eiriz Saúde",
          description: `Site em parceria com a Subtl - Agência de marketing em Portugal, 2017`,
          link: "http://eiriz-saude.unbox.pt/",
          images: [],
        },
      ],
    },
  ],
};
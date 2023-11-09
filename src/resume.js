import fs from 'fs';
import boxen from 'boxen';

export const markdownWrite = () => {
  let curriculum = [];

  // curriculum.push(`# ${data.name}`);
  // curriculum.push(`### ${data.description}`);
  
  // curriculum.push(`## Bio`);
  // curriculum.push(data.bio.replace(/\n/g, '<br />'));

  // curriculum.push(`## Contatos`);
  // data.contacts.map((contact) => {
  //   curriculum.push(`${contact.name}: ${contact.value} <br />`);
  // });
  
  // curriculum.push(`## Skills`);
  // const spaceName = Math.max(...data.skills.map(skill => skill.name.length)) + 10;
  // curriculum.push(`\`\`\`bash`);
  // data.skills.map((skill) => {
  //   const spaceStr = '.'.repeat(spaceName - skill.name.length);
  //   // curriculum.push(`\`\`${skill.name}: ${spaceStr} ★★★☆☆ - ${skill.rating}/5\`\` <br />`);
  //   curriculum.push(`${skill.name}: ${spaceStr} ★★★☆☆ - ${skill.rating}/5`);
  // });
  // curriculum.push(`\`\`\``);

  // curriculum.push(`## Experiencias`);
  // data.experiences.map((experience) => {
  //   if (!experience.active) return;
  //   curriculum.push(`### ${experience.name} <br />`);
  //   curriculum.push(`01/2020 ~ 12/2020 <br />`);
  //   curriculum.push(`Job Description <br />`);
  // });

  // curriculum.push(`## Projetos`);

  const boxWidth = 100;
  const boxenOpts = {
    padding: .5,
    width: boxWidth,
    borderStyle: {
      topLeft: ' ',
      topRight: ' ',
      bottomLeft: ' ',
      bottomRight: ' ',
      top: '─',
      bottom: ' ',
      left: ' ',
      right: ' ',
    },
  };

  const textSpacer = (textLeft, textRight, size=boxWidth-10, str='-') => {
    const spacerSize = size - textLeft.length - textRight.length;
    return textLeft +' '+ (str.repeat(spacerSize)) +' '+ textRight;
  };

  curriculum.push('```text');

  // Bio
  let description = [];
  description.push('', data.description);
  description.push('', data.bio);
  description = description.join("\n");
  curriculum.push(boxen(description, { title: data.name.toUpperCase(), ...boxenOpts }));

  // Contacts
  let contacts = [''];
  data.contacts.map((item) => {
    contacts.push(textSpacer(item.name, item.value));
  });
  contacts = contacts.join("\n");
  curriculum.push('', boxen(contacts, { title: 'CONTACTS', ...boxenOpts }));

  // Skills
  let skills = [''];
  data.skills.map((item) => {
    skills.push(textSpacer(item.name, `★★★☆☆ - ${item.rating}/5`));
  });
  skills = skills.join("\n");
  curriculum.push('', boxen(skills, { title: 'SKILLS', ...boxenOpts }));

  // Experiences
  curriculum.push('', boxen((() => {
    let lines = [];
    data.experiences.map((item) => {
      lines.push('');
      lines.push(textSpacer(item.name, `01/2020 ~ 12/2020`));
      lines.push(item.job);
    });
    return lines.join("\n");
  })(), { title: 'EXPERIENCES', ...boxenOpts }));

  curriculum.push('', boxen('xxx', { title: 'PROJECTS', ...boxenOpts }));
  curriculum.push('```');
  
  curriculum = curriculum.join("\n");
  let content = fs.readFileSync('./README.md', 'utf8');
  content = content.replace(/(<!--curriculum:start-->)([\s\S]*?)(<!--curriculum:final-->)/m, `$1\n${curriculum}\n$3`);
  fs.writeFileSync('./README.md', content);
};

export const data = {
  name: "Jeferson Inácio Siqueira",
  description: "Desenvolvedor Full-Stack",
  bio: `Hi, im Jeferson 👋
    I have been a web developer since 2011.
    I am an enthusiast of simple tools that help me focus only on the business rules of the system.`,
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
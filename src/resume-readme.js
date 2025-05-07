import fs from "fs";
import format from "./format.js";
import template from "./template.js";

export default async (data) => {
  const links = [
    {
      name: "Whatsapp",
      url: "https://wa.me/message/NG7A2SW25XIEI1",
      icon: "https://api.iconify.design/ic:baseline-whatsapp.svg?color=%23ffffff&height=30",
      value: data.basics.phone,
    },
    {
      name: "E-mail",
      url: `mailto:${data.basics.email}`,
      icon: "https://api.iconify.design/ic:outline-alternate-email.svg?color=%23ffffff&height=30",
      value: data.basics.email,
    },
    {
      name: "Phone",
      url: "tel:" + data.basics.phone.replace(/[^0-9]/g, ""),
      icon: "https://api.iconify.design/material-symbols:call.svg?color=%23ffffff&height=30",
      value: data.basics.phone,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jeferson-siqueira/",
      icon: "https://api.iconify.design/mdi:linkedin.svg?color=%23ffffff&height=30",
      value: null,
    },
    {
      name: "Github",
      url: "https://github.com/jeff-silva",
      icon: "https://api.iconify.design/mdi:github.svg?color=%23ffffff&height=30",
      value: null,
    },
    {
      name: "Portfólio",
      url: "https://jeff-silva.github.io",
      icon: "https://api.iconify.design/material-symbols:home-rounded.svg?color=%23ffffff&height=30",
      value: null,
    },
    {
      name: "Currículo",
      url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/jeferson-silva.pdf",
      icon: "https://api.iconify.design/streamline:business-user-curriculum.svg?color=%23ffffff&height=30",
      value: null,
    },
  ];

  const output = `
    # ${data.basics.name}
    ### ${data.basics.label}
    
    ${template.loop(links, (link, index) => {
      return `[![${link.name}](${link.icon} '${link.name}')](${link.url})\n`;
      // return `<a href="${link.url}" target="_blank">
      //   <img src="${link.icon}" alt="" width="30px" />
      // </a>\n`;
    })}

    <br />
    ${data.basics.summary}

    ## Skills
    ${template.loop(data.skills, (skill, index) => {
      let sep = ", ";
      if (index === data.skills.length - 1) sep = ".";
      if (index === data.skills.length - 2) sep = " e ";
      return `${skill.name}${sep}`;
    })}

    `.replace(/\n    /g, "\n");

  let readme = fs.readFileSync("./README.md", "utf8");
  readme = readme.replace(/(<!--curriculum:start-->)([\s\S]*?)(<!--curriculum:final-->)/m, `$1\n${output}\n$3`);
  fs.writeFileSync("./README.md", readme);
};

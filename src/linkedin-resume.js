import fs from "fs";

export default async () => {
  const resume = JSON.parse(fs.readFileSync("./data/linkedin-resume.json", "utf8"));

  let lines = [];

  // lines.push(`<h1>${resume.profile.firstName} ${resume.profile.lastName}</h1>`);

  const links = [
    {
      url: "https://wa.me/message/NG7A2SW25XIEI1",
      icon: "https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white",
    },
    {
      url: "mailto:jeferson.i.silva@gmail.com",
      icon: "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white",
    },
    {
      url: "https://www.linkedin.com/in/jeferson-siqueira/",
      icon: "https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white",
    },
    {
      url: "https://github.com/jeff-silva/",
      icon: "https://img.shields.io/badge/Github-000?style=for-the-badge&logo=github",
    },
    {
      url: "https://jeff-silva.github.io/",
      icon: "https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me",
    },
  ];

  links.map((link) => {
    lines.push(`<a href="${link.url}" target="_blank"><img loading="lazy" src="${link.icon}" target="_blank"></a>`);
  });

  lines.push(`<br /><br />`);

  lines.push(`👨🏻‍💻 <small>${resume.profile.headline}</small><br />`);
  lines.push(`🌎 <small>${resume.profile.geoLocation.fullName}</small><br />`);
  lines.push(`🟢 <small>Aberto para trabalho</small><br />`);
  lines.push(`<br />`);

  lines.push(resume.profile.summary.replace(/\n/g, "<br />"));

  lines.push("<br /><br />");

  const skills = resume.skills.filter((s) => s.meta);
  const highest = Math.max(...skills.map((s) => s.name.length));

  let pre = ["<pre>"];
  skills.map((item) => {
    const space = "·".repeat(highest - item.name.length + 10);
    const stars = "⭐ ".repeat(item.meta.rating);
    const icon = `<img height="25px" src="${item.meta.icon}" />`;
    pre.push(`${item.name} ${space} ${stars}`);
  });
  pre.push("</pre>");
  lines.push(pre.join("\n"));

  lines = lines.join("\n");

  let content = fs.readFileSync("./README.md", "utf8");
  content = content.replace(/(<!--curriculum:start-->)([\s\S]*?)(<!--curriculum:final-->)/m, `$1\n${lines}\n$3`);
  fs.writeFileSync("./README.md", content);
};

import fs from "fs";

export default async () => {
  const resume = JSON.parse(fs.readFileSync("./data/linkedin-resume.json", "utf8"));

  let lines = [];

  lines.push(`<h1>${resume.name}</h1>`);
  lines.push(`👨🏻‍💻 <small>${resume.stack}</small><br /><br /><br />`);
  lines.push(resume.bio.replace(/\n/g, "<br />"));
  lines.push("<br /><br />");

  const highest = Math.max(...resume.skills.map((s) => s.name.length));
  let pre = ["<pre>"];
  resume.skills.map((item) => {
    const space = "·".repeat(highest - item.name.length + 10);
    pre.push(`${item.name} ${space} ⭐ ⭐ ⭐ ⭐ ⭐`);
  });
  pre.push("</pre>");
  lines.push(pre.join("\n"));

  lines.push(`<h2>Experiências</h2>`);
  resume.experience.map((item) => {
    lines.push(`<h3>${item.company}</h3>`);
    lines.push(`📅 <small>${item.date_start || "Atualmente"} ~ ${item.date_final || "Atualmente"}</small><br />`);
    lines.push(`👨🏻‍💻 ${item.job} <br />`);
    if (item.place.full_name) {
      lines.push(`🌎 ${item.place.full_name} <br />`);
    }
    if (item.description) {
      lines.push(`<br />${item.description} <br />`);
    }
  });

  lines.push(`<h2>Projetos</h2>`);
  resume.projects.map((item) => {
    lines.push(`<h3>${item.name}</h3>`);
    lines.push(`📅 <small>${item.date_start || "Atualmente"} ~ ${item.date_final || "Atualmente"}</small><br />`);
    if (item.link) {
      lines.push(`🔗 <a href="${item.link}" target="_blank">Visualizar</a><br />`);
    }
    if (item.description) {
      lines.push(`<br />${item.description} <br />`);
    }
  });

  fs.writeFileSync("./data/linkedin-resume.md", lines.join("\n"));
  // console.log(resume);
};

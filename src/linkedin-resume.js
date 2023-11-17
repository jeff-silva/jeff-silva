import linkedinData from "./linkedin-data.js";
import fs from "fs";
import path from "path";

export default async () => {
  let lines = [];
  linkedinData.contacts.map((link) => {
    lines.push(`<a href="${link.url}" target="_blank"><img loading="lazy" src="${link.icon}" target="_blank"></a>`);
  });
  lines.push(`<br /><br />`);
  lines.push(`👨🏻‍💻 <small>${linkedinData.profile.headline}</small><br />`);
  lines.push(`🌎 <small>${linkedinData.profile.geoLocation.fullName}</small><br />`);
  lines.push(`🟢 <small>Aberto para trabalho</small><br />`);
  lines.push(`<br />`);
  lines.push(linkedinData.profile.summary.replace(/\n/g, "<br />"));
  lines.push("<br /><br />");
  const skills = linkedinData.skills.filter((s) => s.meta);
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

  fs.writeFileSync("./data/linkedin-resume.json", JSON.stringify(linkedinData));
};

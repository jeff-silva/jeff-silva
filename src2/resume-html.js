import fs from "fs";
import format from "./format.js";

export default async (data) => {
  let content = [];

  content.push(
    `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title>`,
    `<style>* {font-family: monospace !important;}</style>`,
    `</head><body>`,
  );
  content.push(`<div style="max-width:1000px; margin:0 auto; font-family: Segoe UI;">`);

  content.push(`<h1>${data.basics.name}</h1>`);
  content.push(`<h3>${data.basics.label}</h3>`);
  content.push(`<h3>${format.location(data.basics.location)}</h3>`);

  content.push(`<br /><hr /><br />`);

  content.push(`<table><tbody>`);
  [...data.links, ...data.contacts].map((link, index) => {
    // content.push(`<div><a href="${link.url}" target="_blank">${link.name}: ${link.url}</a></div>`);
    content.push(`<tr>`);
    content.push(`<td valign="middle">${link.name} &nbsp;</td>`);
    content.push(`<td><a href="${link.url}" style="text-decoration:none;">${link.value || link.url}</a></td>`);
    content.push(`</tr>`);
  });
  content.push(`</tbody></table>`);

  content.push(`<br /><hr /><br />`);

  content.push(format.nl2br(data.basics.summary));

  // content.push(`<br /><br />`);
  // content.push(`Tenho conhecimento em `);

  // content.push(
  //   data.skills
  //     .map((skill) => skill.name)
  //     .join(", ")
  //     .replace(/,(?!.*,)/g, " e "),
  // );
  // content.push(`.`);

  content.push(`<br /><br /><br />`);
  content.push(`<h2>Experiência</h2>`);
  content.push(`<hr /><br />`);

  data.work
    .filter((o) => o.show)
    .map((work, index) => {
      if (index > 0) content.push(`<hr /><br />`);
      content.push(`<h3 style="margin:0;">
        <img src="https://api.iconify.design/mdi:briefcase.svg?height=12&color=%23555555" alt="" />
        ${work.position} | ${work.name}
      </h3>`);
      content.push(`<div>
        <img src="https://api.iconify.design/material-symbols:location-on.svg?height=12&color=%23555555" alt="" />
        ${format.location(work.location)}</div>
      `);
      content.push(`<div style="color:#555; font-size:14px;">
        <img src="https://api.iconify.design/material-symbols:calendar-month.svg?height=12&color=%23555555" alt="" />
        ${format.objDateBetween(work.date)}
      </div>`);
      content.push(`<br />`);
      content.push(`<div>${format.nl2br(work.summary)}</div>`);
      content.push(`<br />`);
    });

  content.push(`</div>`);
  content.push(`</body></html>`);
  content = content.join("");

  fs.writeFileSync("./data/jeferson-silva.html", content);
};

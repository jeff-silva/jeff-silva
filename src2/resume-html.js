import fs from "fs";
import format from "./format.js";

export default async (data) => {
  const contentSpacer = `<div style="height:50px;"></div>`;
  let content = [];

  content.push(
    `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title>`,
    `<style>`,
    `@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');`,
    `* {margin:0; padding:0; font-family: "Fredoka", sans-serif;}`,
    `.wrapper {max-width:800px; margin:0 auto; padding:0 30px;}`,
    `html, body {background:#401f4f; color:#fff; margin:0!important; padding:0!important;}`,
    `p {display:block; margin-bottom:15px;}`,
    `</style>`,
    `</head><body>`,
  );

  content.push(`<div style="background:#401f4f; color:#fff; padding:30px 0;">`);
  content.push(`<div class="wrapper">`);

  content.push(`
    <h1 style="font-size:40px;">${data.basics.name}</h1>
    <h3 style="font-size:20px;">${data.basics.label}</h3>
    <br />
    <div style="display:flex; align-items:center; gap:10px;">
      <img style="height:20px;" src="https://api.iconify.design/material-symbols:location-on.svg?height=12&color=%23ffffff" alt="" />
      <h3>${format.location(data.basics.location)}</h3>
    </div>
  `);

  content.push(`<br />`);
  content.push(`<div style="display:flex; gap:15px; align-items:center;">`);
  [...data.links, ...data.contacts].map((link, index) => {
    content.push(`<a href="${link.url}" target="_blank" title="${link.name}">`);
    content.push(`<img src="${link.icon}?color=%23ffffff" alt="" style="height:20px;" />`);
    content.push(`</a>`);
  });
  content.push(`</div>`);

  // wrapper close
  content.push(`</div>`);
  content.push(`</div>`);

  // Summary
  content.push(`<div class="wrapper" style="font-size:18px; line-height:26px; background:#603673;">`);
  content.push(contentSpacer);
  content.push(data.basics.summary);
  content.push(contentSpacer);
  content.push(`</div>`);

  // Experience
  content.push(`<div style="background:#562d69; color:#fff;">`);
  content.push(`<div class="wrapper">`);
  content.push(contentSpacer);
  content.push(`<h2 style="text-transform:uppercase; font-size:30px;">Experiência</h2>`);
  content.push(contentSpacer);
  data.work
    .filter((o) => o.show)
    .map((work, index) => {
      if (index > 0) content.push(`${contentSpacer}`);
      content.push(`<div style="display:flex; flex-direction:column; gap:10px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <img style="height:20px;" src="https://api.iconify.design/mdi:briefcase.svg?height=12&color=%23ffffff" alt="" />
            <h3 style="font-size:20px; text-transform:uppercase;">${work.position} &nbsp; | &nbsp; ${work.name}</h3>
          </div>

          <div style="display:flex; align-items:center; gap:10px; display:none;">
            <img style="height:20px;" src="https://api.iconify.design/material-symbols:location-on.svg?height=12&color=%23ffffff" alt="" />
            <h4 style="font-size:20px;">${format.location(work.location)}</h4>
          </div>

          <div style="display:flex; align-items:center; gap:10px;">
            <img style="height:20px;" src="https://api.iconify.design/material-symbols:calendar-month.svg?height=12&color=%23ffffff" alt="" />
            <div style="font-size:20px;">${format.objDateBetween(work.date)}</div>
          </div>

          <div style="display:flex; align-items:start; gap:10px;">
            <div style="min-width:20px;"></div>
            <div style="font-size:20px;">${work.summary}</div>
          </div>

          <div style="display:flex; align-items:center; gap:5px;"></div>
        </div>`);
    });
  content.push(contentSpacer);
  content.push(`</div>`);
  content.push(`</div>`);

  // Skills
  content.push(`<div style="background:#401f4f; color:#fff; padding:30px 0;">`);
  content.push(contentSpacer);
  content.push(`<div class="wrapper">`);
  content.push(`<h2 style="text-transform:uppercase; font-size:30px;">Skills</h2>`);
  content.push(contentSpacer);
  content.push(`<div style="display:flex; align-items:center; flex-wrap:wrap; gap:10px;">`);
  data.skills.map((skill, index) => {
    if (index > 0) content.push(`<div>•</div>`);
    content.push(`<div style="font-size:20px;">${skill.name}</div>`);
  });
  content.push(`</div>`);
  content.push(`</div>`);
  content.push(contentSpacer);
  content.push(`</div>`);

  content.push(`</body></html>`);
  content = content.join("");

  fs.writeFileSync("./data/jeferson-silva.html", content);
};

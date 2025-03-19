import fs from "fs";
import format from "./format.js";
import template from "./template.js";
import _ from "lodash";
import Sqrl from "squirrelly";

export default async (data) => {
  const output = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${data.basics.name}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');
          * {margin:0; padding:0; font-family: "Fredoka", sans-serif;}
          a {color:#fff !important;}
          html, body {background:#401f4f; color:#fff; margin:0!important; padding:0!important;}
          .spacer {height:50px;}
          .section-title {text-transform:uppercase; font-size:30px;}
          .section-text {display:flex; flex-direction:column; gap:15px; font-size:20px;}
          .section-wrapper {position:relative; overflow:hidden;}
          .section-wrapper--icon {position:absolute; top:-10px; right:-10px; height:300px; z-index:0;}
          .section-content {position:relative; max-width:800px; margin:0 auto; padding:0 30px;}
          .section-work-summary {display:flex; flex-direction:column; gap:10px;}
        </style>
      </head>
      <body>
        <!-- Header -->
        <div class="section-wrapper" style="background:transparent; color:#fff; padding:30px 0;">
          <div class="section-content">
            <h1 style="font-size:40px;">${data.basics.name}</h1>
            <h3 style="font-size:20px;">${data.basics.label}</h3>
            <br />

            <div style="display:flex; align-items:center; gap:10px;">
              <img style="height:20px;" src="https://api.iconify.design/material-symbols:location-on.svg?height=12&color=%23ffffff" alt="" />
              <h3>${format.location(data.basics.location)}</h3>
            </div>
            <br />

            <div style="display:flex; gap:15px; align-items:center;">
              ${template.loop([...data.links, ...data.contacts], (link, index) => {
                return `<a href="${link.url}" target="_blank" title="${link.name}">
                  <img src="${link.icon}?color=%23ffffff" alt="" style="height:20px;" />
                </a>`;
              })}
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="section-wrapper" style="background:#603673;">
          <img
            class="section-wrapper--icon"
            src="https://api.iconify.design/ic:round-waving-hand.svg?color=%23502562"
            alt=""
          />

          <div class="section-content">
              <div class="spacer"></div>
              <div class="section-text">
                ${data.basics.summary}
              </div>
              <div class="spacer"></div>
          </div>
        </div>

        <!-- Experience -->
        <div class="section-wrapper" style="background:#562d69;">
          <img
            class="section-wrapper--icon"
            src="https://api.iconify.design/material-symbols:elderly.svg?color=%23502562"
            alt=""
          />
          <div class="section-content">
              <div class="spacer"></div>
              <h2 class="section-title">Experiência</h2>
              <div class="spacer"></div>

              <div style="display:flex; flex-direction:column; gap:50px;">
                ${template.loop(
                  data.work.filter((w) => w.show),
                  (work) => {
                    return `<div style="display:flex; flex-direction:column; gap:10px;">
                      <div style="display:flex; align-items:center; gap:10px;">
                        <img style="height:20px;" src="https://api.iconify.design/mdi:briefcase.svg?height=12&color=%23ffffff" alt="" />
                        <h3 style="font-size:20px; text-transform:uppercase;">${work.position} &nbsp; | &nbsp; ${
                      work.name
                    }</h3>
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
                        <div style="font-size:20px;">
                          <div class="section-work-summary">
                            ${work.summary}
                          </div>
                          
                          ${template.if(work.projects.length, () => {
                            return (
                              `<div style="margin-top:10px; font-size:18px;">Projetos desenvolvidos: ` +
                              template.loop(
                                work.projects,
                                (projectId) => {
                                  const project = data.projects.filter((p) => p.id == projectId).at(0) || null;
                                  if (!project) return null;
                                  if (!project.url) return project.name;
                                  return `<a href="${project.url}" target="_blank">${project.name}</a>`;
                                },
                                () => "",
                                ", ",
                              ) +
                              `</div>`
                            );
                          })}
                        </div>
                      </div>

                      <div style="display:flex; align-items:center; gap:5px;"></div>
                    </div>`;
                  },
                )}
              </div>

              <div class="spacer"></div>
          </div>
        </div>

        <!-- Skills -->
        <div class="section-wrapper" style="background:transparent;">
          <img
            class="section-wrapper--icon"
            src="https://api.iconify.design/ic:baseline-menu-book.svg?color=%23502562"
            alt=""
          />

          <div class="section-content">
              <div class="spacer"></div>
              <h2 class="section-title">Skills</h2>
              <div class="spacer"></div>

              <div style="display:flex; align-items:center; flex-wrap:wrap; gap:15px;">
                ${template.loop(data.skills, (skill, index) => {
                  const pre = index == 0 ? "" : `<div>•</div>`;
                  return `${pre}<div style="font-size:18px;">${skill.name}</div>`;
                })}
              </div>

              <div class="spacer"></div>
          </div>
        </div>
      </body>
    </html>`;

  fs.writeFileSync("./data/jeferson-silva.html", output);
};

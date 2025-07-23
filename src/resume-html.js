import fs from "fs";
import format from "./format.js";
import template from "./template.js";
import _ from "lodash";
import Sqrl from "squirrelly";

export default async (data) => {
  const links = [
    {
      name: "Whatsapp",
      url: "https://wa.me/message/NG7A2SW25XIEI1",
      icon: "https://api.iconify.design/ic:baseline-whatsapp.svg",
      value: data.basics.phone,
    },
    {
      name: "E-mail",
      url: `mailto:${data.basics.email}`,
      icon: "https://api.iconify.design/ic:outline-alternate-email.svg",
      value: data.basics.email,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jeferson-siqueira/",
      icon: "https://api.iconify.design/mdi:linkedin.svg",
      value: null,
    },
    {
      name: "Github",
      url: "https://github.com/jeff-silva",
      icon: "https://api.iconify.design/mdi:github.svg",
      value: null,
    },
    {
      name: "Portfólio",
      url: "https://jeff-silva.github.io",
      icon: "https://api.iconify.design/material-symbols:home-rounded.svg",
      value: null,
    },
    {
      name: "Currículo",
      url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/jeferson-silva.pdf",
      icon: "https://api.iconify.design/mdi:download.svg",
      value: null,
    },
  ];

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

            <div style="display:flex; gap:20px; align-items:center;">
              ${template.loop(links, (link, index) => {
                return `<a href="${link.url}" target="_blank" title="${link.name}" style="display:flex; align-items:center; gap:5px;">
                  <img src="${link.icon}?color=%23ffffff" alt="" style="height:20px;" />
                  <span>${link.name}</span>
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
                ${format.markdownToHtml(data.basics.summary)}
              </div>
              <div class="spacer"></div>
          </div>
        </div>

        
        <!-- Skills -->
        <div class="section-wrapper" style="background:#562d69;">
          <img
            class="section-wrapper--icon"
            src="https://api.iconify.design/ic:baseline-menu-book.svg?color=%23502562"
            alt=""
          />

          <div class="section-content">
              <div class="spacer"></div>
              <h2 class="section-title">Skills</h2>
              <div class="spacer"></div>

              <div style="display:flex; align-items:center; flex-wrap:wrap; gap:15px; font-size:18px; line-height:26px;">
                ${template.loop(data.skills, (skill, index) => {
                  let pre = "";
                  if (index > 0) pre = ", ";
                  if (index == data.skills.length - 1) pre = " e ";
                  return `${pre}${skill.name}`;
                })}
              </div>

              <div class="spacer"></div>
          </div>
        </div>


        <!-- Experience -->
        <div class="section-wrapper" style="background:#603673;">
          <img
            class="section-wrapper--icon"
            src="https://api.iconify.design/material-symbols:elderly.svg?color=%23502562"
            alt=""
          />
          <div class="section-content">
              <div class="spacer"></div>
              <h2 class="section-title">Experiências</h2>
              <div class="spacer"></div>

              <div style="display:flex; flex-direction:column; gap:50px;">
                ${template.loop(data.work, (work) => {
                  return `<div style="display:flex; flex-direction:column; gap:10px;">
                      <div style="display:flex; align-items:center; gap:10px;">
                        <img style="height:20px;" src="https://api.iconify.design/mdi:briefcase.svg?height=12&color=%23ffffff" alt="" />
                        <h3 style="font-size:20px; text-transform:uppercase;">
                          ${work.name} &nbsp; | &nbsp; ${work.position}
                        </h3>
                      </div>

                      <div style="display:flex; align-items:center; gap:10px; display:none;">
                        <img style="height:20px;" src="https://api.iconify.design/material-symbols:location-on.svg?height=12&color=%23ffffff" alt="" />
                      </div>

                      <div style="display:flex; align-items:center; gap:10px;">
                        <img style="height:20px;" src="https://api.iconify.design/material-symbols:calendar-month.svg?height=12&color=%23ffffff" alt="" />
                        <div style="font-size:15px;">${format.dateDuration(work.startDate, work.endDate)}</div>
                      </div>

                      <div style="display:flex; align-items:start; gap:10px;">
                        <div style="min-width:20px;"></div>
                        <div style="font-size:20px;">
                          <div class="section-work-summary">
                            ${format.markdownToHtml(work.summary)}
                          </div>
                        </div>
                      </div>

                      <div style="display:flex; align-items:center; gap:5px;"></div>
                    </div>`;
                })}
              </div>

              <div class="spacer"></div>
          </div>
        </div>

        <!-- Projects -->
        <div class="section-wrapper" style="background:#562d69;">
          <img
            class="section-wrapper--icon"
            src="https://api.iconify.design/carbon:portfolio.svg?color=%23502562"
            alt=""
          />
          <div class="section-content">
              <div class="spacer"></div>
              <h2 class="section-title">Projetos</h2>
              <div class="spacer"></div>

              <div style="display:flex; flex-direction:column; gap:50px;">
                ${template.loop(data.projects, (project) => {
                  return `<div style="display:flex; flex-direction:column; gap:10px;">
                      <div style="display:flex; align-items:center; gap:10px;">
                        <img style="height:20px;" src="https://api.iconify.design/mdi:briefcase.svg?height=12&color=%23ffffff" alt="" />
                        <h3 style="font-size:20px; text-transform:uppercase;">
                          ${project.name}
                        </h3>
                      </div>

                      <div style="display:flex; align-items:center; gap:10px; display:none;">
                        <img style="height:20px;" src="https://api.iconify.design/material-symbols:location-on.svg?height=12&color=%23ffffff" alt="" />
                      </div>

                      ${template.if(
                        !!project.url,
                        () => {
                          return `<div style="display:flex; align-items:center; gap:10px;">
                            <img style="height:20px;" src="https://api.iconify.design/material-symbols:attach-file.svg?height=12&color=%23ffffff" alt="" />
                            <div style="font-size:20px;">${format.link(project.url)}</div>
                          </div>`;
                        },
                        () => {
                          return ``;
                        },
                      )}

                      ${template.if(
                        project.startDate && project.endDate,
                        () => {
                          return `<div style="display:flex; align-items:center; gap:10px;">
                            <img style="height:20px;" src="https://api.iconify.design/material-symbols:calendar-month.svg?height=12&color=%23ffffff" alt="" />
                            <div style="font-size:15px;">
                              ${format.dateDuration(project.startDate, project.endDate)}
                            </div>
                          </div>`;
                        },
                        () => {
                          return ``;
                        },
                      )}

                      <div style="display:flex; align-items:start; gap:10px;">
                        <div style="min-width:20px;"></div>
                        <div style="font-size:20px;">
                          <div class="section-project-summary">
                            ${format.markdownToHtml(project.description)}
                          </div>
                        </div>
                      </div>

                      <div style="display:flex; align-items:center; gap:5px;"></div>
                    </div>`;
                })}
              </div>

              <div class="spacer"></div>
          </div>
        </div>


        <!-- Footer -->
        <div class="section-wrapper" style="background:transparent;">
          <div class="section-content">
              <div class="spacer"></div>
              <div class="section-text"><br /></div>
              <div class="spacer"></div>
          </div>
        </div>
      </body>
    </html>`;

  fs.writeFileSync("./data/jeferson-silva.html", output);
};

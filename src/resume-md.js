import fs from "fs";
import format from "./format.js";
import template from "./template.js";
import _ from "lodash";

export default async (data) => {
  const output = template.parse(
    data,
    `
      # <%= basics.name %>
      ## <%= basics.label %>

      🌎 <%= format.location(basics.location) %>

      <% _.forEach(basics.profiles, (item) => { %>
        <%= item.network %>: [<%= item.url %>](<%= item.url %>)
      <% }); %>

      ## Resumo
      <%= format.trimLines(basics.summary) %>
      
      <% if (work.length > 0) { %>
        ## Experiências

        <% _.forEach(work, (item) => { %>
          ### <%= item.name %> | <%= item.position %>
          De <%= item.startDate %> até <%= item.endDate %> | <%= format.dateDuration(item.startDate, item.endDate) %>
          <%= format.trimLines(item.summary) %>
        <% }); %>
      <% } %>

      <% if (education.length > 0) { %>
        ## Cursos

        <% _.forEach(education, (item) => { %>
          ### <%= item.area %> | <%= item.institution %> ~ <%= format.dateDuration(item.startDate, item.endDate) %>
          Matérias: <%= item.courses.join(", ") %>
        <% }); %>
      <% } %>

      <% if (projects.length > 0) { %>
        ## Projetos

        <% _.forEach(projects, (item) => { %>
          ### <%= item.name %>
          <%= format.trimLines(item.description) %>
          <br />
          <%= item.highlights.map(o => "*["+o+"]*").join(", ") %>
        <% }); %>
      <% } %>

      <% if (skills.length > 0) { %>
        ## Tecnologias utilizadas

        <%= skills.map(o => o.name).join(", ") %>
      <% } %>
    `.replace(/\n\s+/g, `\n`),
  );

  fs.writeFileSync("./data/jeferson-silva.md", output);

  // const output = `

  //   ${template.if(data.projects.length > 0, () => {
  //     return (
  //       `## Projetos \n` +
  //       template.loop(data.projects, (item, index) => {
  //         return `
  //           ### ${item.name}
  //           ${item.description}
  //           ---
  //         `;
  //       })
  //     );
  //   })}

  // `.replace(/\n\s+/g, `\n`);

  // fs.writeFileSync("./data/jeferson-silva.md", output);
};

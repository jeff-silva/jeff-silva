import fs from 'fs';
import format from './format.js';

export default async (data) => {
    let content = [];
    content.push(`# ${data.basics.name}`);
    content.push(`<div>${data.basics.label}</div>`);
    content.push(`<br />`);

    content.push(`<table><tbody>`);
    [ ...data.links, ...data.contacts ].map((link, index) => {
        // content.push(`<div><a href="${link.url}" target="_blank">${link.name}: ${link.url}</a></div>`);
        content.push(`<tr>`);
        content.push(`<td>${link.name} &nbsp;</td>`);
        content.push(`<td><a href="${link.url}">${link.value || link.url}</a></td>`);
        content.push(`</tr>`);
    });
    content.push(`</tbody></table>`);

    content.push(`<h2>Tecnologias</h2>`);
    content.push(data.skills.map(skill => skill.name).join(', ').replace(/,(?!.*,)/g, ' e '));
    content.push(`<br /><br />`);

    content = content.join(`\n`);
    
    let readme = fs.readFileSync("./README.md", "utf8");
    readme = readme.replace(/(<!--curriculum:start-->)([\s\S]*?)(<!--curriculum:final-->)/m, `$1\n${content}\n$3`);
    fs.writeFileSync("./README.md", readme);
};
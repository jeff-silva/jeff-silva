import fs from 'fs';

const format = {
    dateBetween(date) {
        return 'Jan 2000 ~ Dez 2020';
    },
    location(place) {
        return [ place.city, place.state, place.country ].filter(v => !!v).join(', ');
    },
    nl2br(content) {
        return content.replace(/\n/g, '<br />');
    },
};

export default async (data) => {
    let content = [];

    content.push(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Document</title></head><body>`);
    content.push(`<div style="max-width:1000px; margin:0 auto; font-family: verdana;">`);

    content.push(`<h1>${data.basics.name}</h1>`);
    content.push(`<h2>${data.basics.label}</h2>`);
    content.push(`<h3>${format.location(data.basics.location)}</h3>`);
    
    content.push(`<table><tbody>`);
    [ ...data.links, ...data.contacts ].map((link, index) => {
        // content.push(`<div><a href="${link.url}" target="_blank">${link.name}: ${link.url}</a></div>`);
        content.push(`<tr>`);
        content.push(`<td>${link.name} &nbsp;</td>`);
        content.push(`<td><a href="${link.url}">${link.value || link.url}</a></td>`);
        content.push(`</tr>`);
    });
    content.push(`</tbody></table>`);
    content.push(`<br /><br /><br />`);
    
    content.push(format.nl2br(data.basics.summary));
    
    content.push(`<br /><br />`);
    content.push(`<h2>Experiência</h2>`);
    data.work.filter(o => o.show).map((work, index) => {
        if (index > 0) content.push(`<hr /><br />`);
        content.push(`<h3 style="margin:0;">${work.position} | ${work.name}</h3>`);
        content.push(`<div>${format.location(work.location)}</div>`);
        content.push(`<div>${format.dateBetween(work.date)}</div>`);
        content.push(`<br />`);
        content.push(`<div>${format.nl2br(work.summary)}</div>`);
        content.push(`<br />`);
    });

    content.push(`</div>`);
    content.push(`</body></html>`);
    content = content.join('');

    fs.writeFileSync('./data/jeferson-silva.html', content);
};
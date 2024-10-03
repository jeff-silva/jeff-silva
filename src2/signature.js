import fs from "fs";
import template from "./template.js";

export default async (data) => {
  const content = `<div style="max-width:600px; padding:10px; border-radius:8px; overflow:hidden;">
    <table style="width:100%; background:#401f4f; border-radius:8px; overflow:hidden;" cellpadding="0" cellspacing="0">
        <tbody>
            <tr>
                <td>
                    <img src="https://avatars.githubusercontent.com/u/11198224?v=4" alt="" style="height:120px; margin-bottom:-4px;" />
                </td>
                <td>
                    <div style="font:20px tahoma; color:#ffffff;">${data.basics.name}</div>
                    <div style="font:14px tahoma; color:#ffffff;">${data.basics.label}</div>
                    <table cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                ${template.loop([...data.links, ...data.contacts], (link, index) => {
                                  return `<td style="padding:5px 10px 0 0;">
                                        <a href="${link.url}" target="_blank" title="${link.name}">
                                            <img src="${link.icon}?color=%23ffffff" alt="" style="height:20px;" />
                                        </a>
                                    </td>`;
                                })}
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
  </div>`;
  fs.writeFileSync("./data/signature.html", content.replace(/\s{2,}/g, ""));
};

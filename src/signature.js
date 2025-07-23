import fs from "fs";
import template from "./template.js";
import format from "./format.js";

export default async (data) => {
  const content = template.parse(
    data,
    `<div style="max-width:600px; padding:10px; border-radius:8px; overflow:hidden;">
        <table style="width:100%; background:#401f4f; border-radius:8px; overflow:hidden;" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td>
                        <img src="https://avatars.githubusercontent.com/u/11198224?v=4" alt="" style="height:120px; margin-bottom:-4px;" />
                    </td>
                    <td>
                        <div style="font:20px tahoma; color:#ffffff;">
                            <%= basics.name %>
                        </div>
                        <div style="font:14px tahoma; color:#ffffff;">
                            <%= basics.label %>
                        </div>
                        <table cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <% _.forEach(basics.profiles, (item) => { %>
                                        <td>
                                            <a href="<%= item.url %>" target="_blank"><%= item.network %></a>
                                        </td>
                                    <% }); %>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>`,
  );
  fs.writeFileSync("./docs/signature.html", format.trimLines(content));
};

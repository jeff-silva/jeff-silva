import axios from "axios";
import FullstackResume from "./fullstack.resume.js";

export default class FullstackEnResume extends FullstackResume {
  profile = "fullstack-dev-en";
  language = "en";

  async getData() {
    const data = await super.getData();

    // data.basics.label = data.basics.label.replace("Fullstack Sênior", "Senior Fullstack");

    const text = [
      `- Traduza os valores do JSON a seguir para o EN-US`,
      `- Apenas os valores devem ser traduzidos, os atributos devem ser mantidos.`,
      `- É importante que a estrutura do JSON permaneça fiel à que você receberá abaixo.`,
      `- Retorne apenas o JSON:`,
      JSON.stringify(data),
    ].join("\n");

    console.log("traduzindo JSON");
    try {
      const resp = await axios({
        method: "post",
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        data: { contents: [{ parts: [{ text }] }] },
      });

      if (resp.data.candidates[0]) {
        const candidate = resp.data.candidates[0];
        if (candidate.content.parts[0]) {
          let json = candidate.content.parts[0].text;
          json = json.replace(/\`\`\`json(.+?)\`\`\`/s, "$1").trim();
          json = JSON.parse(json);
          return json;
        }
      }
    } catch (_) {
      // console.error(_);
    }

    return data;
  }
}

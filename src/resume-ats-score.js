import { Client } from "@gradio/client";
import fs from "fs";
import path from "path";

export default async (data) => {
  const pdf_file = await fs.promises.readFile(path.join(process.cwd(), "data/jeferson-silva.pdf"));

  const client = await Client.connect("Kamesh14/ATS-Resume-Analyzer");
  const result = await client.predict("/predict", {
    pdf_file,
    job_role: "Web Developer",
  });

  fs.writeFileSync("./data/jeferson-silva-ats-score.html", JSON.stringify(result.data));
};

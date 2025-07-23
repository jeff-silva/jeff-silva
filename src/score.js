import { Client, handle_file } from "@gradio/client";
import fs from "fs";
import path from "path";
// import { Blob } from "node:buffer";

const file = {};
file.name = "jeferson-silva.pdf";
file.mime = "application/pdf";
file.path = path.join(process.cwd(), "data", file.name);
file.buffer = await fs.promises.readFile(file.path);
file.blob = new Blob([file.buffer], { type: file.mime });
file.file = new File([file.buffer], file.name, { type: file.mime });
file.ref = handle_file(file.file);
file.result = null;
file.error = null;

try {
  const client = await Client.connect("Kamesh14/ATS-Resume-Analyzer");
  file.result = await client.predict("/predict", {
    pdf_file: file.file,
    job_role: "Web Developer",
  });

  // const client = await Client.connect("luansouza4444/AvaliadorCV");
  // const result = await client.predict("/analisar_curriculo", {
  //   file: file.ref,
  // });
} catch (err) {
  file.error = err;
}

console.log(JSON.stringify(file.result.data.join("\n")));

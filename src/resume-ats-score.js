import { Client } from "@gradio/client";
import fs from "fs";
import path from "path";

export default async (data) => {
  const file = {};
  file.name = "jeferson-silva.pdf";
  file.mime = "application/pdf";
  file.path = path.join(process.cwd(), "data", file.name);
  file.buffer = await fs.promises.readFile(file.path);
  file.blob = new Blob([file.buffer], { type: file.mime });
  file.file = new File([file.buffer], file.name, { type: file.mime });
  file.result = null;

  try {
    const client = await Client.connect("Kamesh14/ATS-Resume-Analyzer");
    file.result = await client.predict("/predict", {
      pdf_file: file.file,
      // Data Scientist, Software Engineer, Project Manager, Web Developer,
      // DevOps Engineer, Cybersecurity Analyst, Database Administrator,
      // Machine Learning Engineer, Cloud Engineer, Full Stack Developer
      // Mobile App Developer, UI/UX Designer, Business Analyst, Network Engineer,
      // System Administrator, Quality Assurance Engineer, AI Engineer,
      // Data Engineer, Game Developer, Blockchain Developer, IoT Developer,
      // IT Support Specialist, Embedded Systems Engineer, AR/VR Developer,
      // Robotics Engineer, Site Reliability Engineer, Frontend Developer,
      // Backend Developer, Data Analyst, Technical Writer, IT Consultant,
      // ERP Consultant, Solutions Architect, Product Manager, Scrum Master,
      // Information Security Manager, Big Data Engineer, Automation Engineer,
      // Network Security Engineer, Software Architect, IT Auditor,
      // Digital Transformation Specialist, E-commerce Developer,
      // API Developer, Geospatial Analyst,
      // SDET (Software Development Engineer in Test)
      job_role: "Full Stack Developer",
    });

    fs.writeFileSync(
      "./docs/jeferson-silva-ats-score.html",
      [
        `<!DOCTYPE html><html lang="en">`,
        `<head>`,
        ` <meta charset="UTF-8" />`,
        ` <meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
        ` <title>Score</title>`,
        `</head>`,
        `<body>`,
        file.result.data.join("\n"),
        `</body></html>`,
      ].join("\n"),
    );

    // const client = await Client.connect("luansouza4444/AvaliadorCV");
    // const result = await client.predict("/analisar_curriculo", {
    //   file: file.ref,
    // });
  } catch (err) {
    console.error(err);
  }
};

import fs from "fs";

export default async () => {
  const resume = JSON.parse(fs.readFileSync("./data/linkedin-resume.json", "utf8"));

  let lines = [];

  lines.push(`# ${resume.name}`);
  lines.push(`${resume.stack}`);

  fs.writeFileSync("./data/linkedin-resume.md", lines.join("\n"));
  console.log(resume);
};

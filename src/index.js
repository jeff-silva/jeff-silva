import fs from "fs";
import path from "path";

// import { data, markdownWrite } from "./resume.js";
// fs.writeFileSync(path.join("data", "resume.json"), JSON.stringify(data));
// markdownWrite();

// import linkedinScrapper from "./linkedin-scrapper.js";
// linkedinScrapper();

import linkedinData from "./linkedin-data.js";
await linkedinData();

import linkedinResume from "./linkedin-resume.js";
await linkedinResume();

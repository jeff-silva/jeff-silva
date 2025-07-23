// import data from "./data.js";

// import resumeJson from "./resume-json.js";
// import resumeHtml from "./resume-html.js";
// import resumePdf from "./resume-pdf.js";
// import resumeAtsScore from "./resume-ats-score.js";
// import resumeReadme from "./resume-readme.js";
// import resumeMd from "./resume-md.js";
// import signature from "./signature.js";

// (async () => {
//   await resumeJson(data);
//   await resumeHtml(data);
//   await resumePdf(data);
//   // await resumeAtsScore(data);
//   await resumeReadme(data);
//   await resumeMd(data);
//   await signature(data);
// })();

import FullstackResume from "./fullstack.resume.js";
const resume = new FullstackResume();
resume.generate();

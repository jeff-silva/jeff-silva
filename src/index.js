import data from "./data.js";

import resumeHtml from "./resume-html.js";
import resumeJson from "./resume-json.js";
import resumePdf from "./resume-pdf.js";
import resumeMd from "./resume-md.js";
import resumeReadme from "./resume-readme.js";
import signature from "./signature.js";

(async () => {
  await resumeJson(data);
  await resumeHtml(data);
  await resumePdf(data);
  await resumeReadme(data);
  await resumeMd(data);
  await signature(data);
})();

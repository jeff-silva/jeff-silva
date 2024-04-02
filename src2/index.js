import data from './data.js';

import resumeHtml from './resume-html.js';
import resumeJson from './resume-json.js';
import resumePdf from './resume-pdf.js';
import resumeReadme from './resume-readme.js';

(async () => {
    await resumeHtml(data);
    await resumeJson(data);
    await resumePdf(data);
    await resumeReadme(data);
})();

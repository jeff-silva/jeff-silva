import fs from 'fs';
import path from 'path';

import { data, markdownWrite } from './resume.js';
fs.writeFileSync(path.join('data', 'resume.json'), JSON.stringify(data));
markdownWrite();

// import linkedinImporter from './linkedin-importer.js';
// linkedinImporter();
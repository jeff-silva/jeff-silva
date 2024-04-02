import fs from 'fs';

export default async () => {
    let html = fs.readFileSync("./data/jeferson-silva.html", "utf8");
    
    let readme = fs.readFileSync("./README.md", "utf8");
    readme = readme.replace(/(<!--curriculum:start-->)([\s\S]*?)(<!--curriculum:final-->)/m, `$1\n${html}\n$3`);
    fs.writeFileSync("./README.md", readme);
};
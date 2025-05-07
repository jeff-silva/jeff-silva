import fs from "fs";

export default async (data) => {
  fs.writeFileSync("./data/jeferson-silva.json", JSON.stringify(data, null, 2));
};

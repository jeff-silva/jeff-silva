import fs from "fs";

export default async (data) => {
  fs.writeFileSync("./docs/jeferson-silva.json", JSON.stringify(data));
};

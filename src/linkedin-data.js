import AdmZip from "adm-zip";
import Papa from "papaparse";
import fs from "fs";
import axios from "axios";
import dayjs from "dayjs";

/**
 * Goto https://www.linkedin.com/mypreferences/d/download-my-data
 * Download Zip file
 * Rename to "LinkedinExport.zip" on the root
 */

const zip = new AdmZip("./LinkedinExport.zip");

class BasicData {
  constructor(zip, file) {
    const content = zip.getEntry(file).getData().toString("utf8");
    const { data } = Papa.parse(content, { header: true });
    this.data = Promise.all(
      data
        .filter((item) => {
          return Object.values(item).filter((v) => v).length > 0;
        })
        .map(async (item) => {
          item = Object.fromEntries(
            await Promise.all(
              Object.entries(item).map(async ([name, value]) => {
                name = await this.fieldFormat(name);
                value = await this.valueFormat(value);
                return [name, value];
              }),
            ),
          );

          if (item.hasOwnProperty("startedOn") && item.hasOwnProperty("finishedOn")) {
            item.dateInterval = await this.toDateInterval(item.startedOn, item.finishedOn);
          }

          return await this.dataFormat(item);
        }),
    );
  }

  async fieldFormat(name) {
    const s =
      name &&
      name
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
        .join("");
    return s.slice(0, 1).toLowerCase() + s.slice(1);
  }

  async valueFormat(name) {
    return name;
  }

  async dataFormat(data) {
    return data;
  }

  async toDateInterval(startedOn, finishedOn) {
    let d = {};

    d.start = dayjs(startedOn);
    d.final = dayjs(finishedOn);
    d.years = 0;
    d.months = 0;

    if (d.start.isValid() && d.final.isValid()) {
      d.years = d.final.diff(d.start, "year");
      d.months = d.final.diff(d.start, "month") % 12;
      d.start = d.start.format();
      d.final = d.final.format();
    }

    return d;
  }

  async toPlace(term) {
    let place = {
      full_name: term,
      city: "",
      state: "",
      stateShort: "",
      country: "",
      countryShort: "",
    };

    if (term) {
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     place.city = "kkk";
      //     resolve(place);
      //   }, 500);
      // });

      let { data } = await axios.get(
        `https://nominatim.openstreetmap.org/search.php?format=json&addressdetails=1&extratags=1&namedetails=1&limit=10&q=${term}`,
      );

      if (data[0]) {
        const { address } = data[0];
        place.city = address.city || address.county || "";
        place.state = address.state || "";
        place.stateShort = (address["ISO3166-2-lvl4"] || "-").split("-").at(1);
        place.country = address.country || "";
        place.countryShort = (address.country_code || "").toUpperCase();
      }
    }

    return place;
  }

  async toData() {
    return this.data;
  }
}

class Profile extends BasicData {
  async dataFormat(data) {
    data.geoLocation = await this.toPlace(data.geoLocation || "");
    return data;
  }

  async toData() {
    return this.data.then((resolvedData) => {
      return resolvedData[0] || {};
    });
  }
}

class Skills extends BasicData {
  async dataFormat(data) {
    const meta = {
      "Vue.js": { rating: 5 },
      Laravel: { rating: 5 },
      Docker: { rating: 3 },
      "Node.js": { rating: 4 },
      Vuetify: { rating: 5 },
      "Nuxt.js": { rating: 5 },
      Elementor: { rating: 5 },
      WooCommerce: { rating: 3 },
      JavaScript: { rating: 5 },
      MySQL: { rating: 4 },
      "API REST": { rating: 5 },
      PHP: { rating: 5 },
      WordPress: { rating: 5 },
      Git: { rating: 3 },
    };

    data.meta = false;
    const r = new RegExp(Object.keys(meta).join("|"));
    if (r.test(data.name) && meta[data.name]) {
      data.meta = meta[data.name];
    }

    return data;
  }
}

class Positions extends BasicData {
  async dataFormat(data) {
    data.location = await this.toPlace(data.location || "");
    return data;
  }
}

class Projects extends BasicData {
  async dataFormat(data) {
    data.active = !/Doce|Natureza Morta|Herdeira|Brinde|Efêmera/.test(data.title);
    return data;
  }
}

export default async () => {
  const profile = {
    profile: await new Profile(zip, "Profile.csv").toData(),
    emailAddresses: await new BasicData(zip, "Email Addresses.csv").toData(),
    phoneNumbers: await new BasicData(zip, "PhoneNumbers.csv").toData(),
    skills: await new Skills(zip, "Skills.csv").toData(),
    positions: await new Positions(zip, "Positions.csv").toData(),
    projects: await new Projects(zip, "Projects.csv").toData(),
    languages: await new BasicData(zip, "Languages.csv").toData(),
    education: await new BasicData(zip, "Education.csv").toData(),
    courses: await new BasicData(zip, "Courses.csv").toData(),
  };

  fs.writeFileSync("./data/linkedin-resume.json", JSON.stringify(profile, null, 2));
  console.log("ready");
};

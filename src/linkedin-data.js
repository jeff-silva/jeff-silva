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
      fullName: term,
      city: "",
      state: "",
      stateShort: "",
      country: "",
      countryShort: "",
    };

    if (term) {
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
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
      "Vue.js": {
        rating: 5,
        icon: "https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D",
      },
      Laravel: {
        rating: 5,
        icon: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
      },
      Docker: {
        rating: 3,
        icon: "https://img.shields.io/badge/Docker-ffffff?logo=docker",
      },
      "Node.js": {
        rating: 4,
        icon: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
      },
      Vuetify: {
        rating: 5,
        icon: "https://img.shields.io/badge/Vuetify-fff.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAq1BMVEUAAAAAgP+A//8Aqv8cjv+q4/+z5v8Xov8Vlf8Wm/Sx3v8UmfUUk/Wv3/+w2/8XmfQWlvSu3P+v3f8WlfgWl/QVmPSu3f8Vl/cXmPev3v8XlvWu3f8Wl/cWl/Wt3f+t3P8Wl/cVl/cVlvWt3f+u3v8Wlvev3P8WmPUWl/av3v8Wl/YWl/cWl/au3f8Wl/YWl/YWl/au3f8Wl/YWlvau3f8Wl/YWl/au3f/////cYWC4AAAANnRSTlMAAgIDCQkKCwwXFxkaICotLkJDRkdIW2JjY2R3f4CAk5abnJywt7i5zs7R0uPj5eby8vP0+/x1U4h8AAAAAWJLR0Q4oAel1gAAAJxJREFUGBm1wecCgQAUBeBDZjaRvXfK7Nz3fzO5mekn34efWspD3XCoFrgpXyQ0R5fKr0DNRF3KuT3VBCHzKDcjDKhOBdwNJXA0i2eqPh7Sroj0MKXysnjqiLiZqk9l4yW5kRZWVFsDb2qbZJOhBj6UDIdqgYgulV9BxJhqiqj8gYFTAV8GDPTxLbUjvSxitEkbcRLrrYFYloW/uAL1jiJcmJrO/AAAAABJRU5ErkJggg==",
      },
      "Nuxt.js": {
        rating: 5,
        icon: "https://img.shields.io/badge/Nuxt.js-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white",
      },
      Elementor: {
        rating: 5,
        icon: "https://img.shields.io/badge/Elementor-ff0000?logo=elementor",
      },
      WooCommerce: {
        rating: 3,
        icon: "https://img.shields.io/badge/WooCommerce-c291ff?logo=woocommerce",
      },
      JavaScript: {
        rating: 5,
        icon: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      },
      MySQL: {
        rating: 4,
        icon: "https://img.shields.io/badge/MySQL-004260?style=for-the-badge&logo=mysql&logoColor=white",
      },
      PHP: {
        rating: 5,
        icon: "https://img.shields.io/badge/PHP-7377ad?style=for-the-badge&logo=php&logoColor=ffffff",
      },
      WordPress: {
        rating: 5,
        icon: "https://img.shields.io/badge/Wordpress-207196?style=for-the-badge&logo=wordpress&logoColor=ffffff",
      },
      Git: {
        rating: 3,
        icon: "https://img.shields.io/badge/Git-207196?style=for-the-badge&logo=git&logoColor=ffffff",
      },
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

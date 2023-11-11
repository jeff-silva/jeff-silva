import puppeteer from "puppeteer";
import fs from "fs";
import axios from "axios";

export default async () => {
  const profileUrl = "https://www.linkedin.com/in/jeferson-siqueira/";
  const showBrowser = true;

  const browser = await puppeteer.launch({ headless: !showBrowser });
  const page = await browser.newPage();

  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
  );
  await page.goto(profileUrl);
  await page.setViewport({ width: 1080, height: 1024 });
  // await page.waitForNetworkIdle({ idleTime: 1000, timeout: 1000 });

  const querySelector = async (parent, queryString) => {
    return (await parent.$(queryString)) || null;
  };

  const querySelectorAttr = async (parent, queryString, attribute = "innerText", defaultValue = "") => {
    const element = await querySelector(parent, queryString);
    if (!element) return defaultValue;
    return await page.evaluate((el, attribute) => el[attribute], element, attribute);
  };

  const querySelectorAll = async (parent, queryString, callback) => {
    await page.waitForSelector(queryString, { timeout: 5000 });
    const elements = await parent.$$(queryString);
    return await Promise.all(elements.map(callback));
  };

  const parsePlace = async (term) => {
    let place = {
      full_name: term,
      city: "",
      state: "",
      state_short: "",
      country: "",
      country_short: "",
    };

    let address = false;

    try {
      let { data } = await axios.get(
        `https://nominatim.openstreetmap.org/search.php?format=json&addressdetails=1&extratags=1&namedetails=1&limit=10&q=${term}`,
      );
      if (Array.isArray(data) && data.length > 0) {
        address = data[0].address;
      }
    } catch (e) {}

    if (address) {
      place.city = address.city || address.county || "";
      place.state = address.state || "";
      place.state_short = address["ISO3166-2-lvl4"] ? address["ISO3166-2-lvl4"].split("-")[1] : "";
      place.country = address.country || "";
      place.country_short = (address.country_code || "").toUpperCase();
    }

    return place;
  };

  const slugify = (text) =>
    text
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");

  try {
    let profile = {};

    profile.name = await querySelectorAttr(page, ".top-card-layout__title");
    profile.stack = await querySelectorAttr(page, ".top-card-layout__headline");
    profile.place = await querySelectorAttr(page, ".profile-info-subheader > div:nth-child(1)");
    profile.place = await parsePlace(profile.place);
    profile.bio = await querySelectorAttr(page, ".core-section-container__content");

    profile.experience = await querySelectorAll(page, ".experience__list > li", async (elem) => {
      let data = {};
      data.name = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      data.job = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      data.company = await querySelectorAttr(elem, ":scope > div > *:nth-child(2)");
      data.description = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) > *:nth-child(3)");
      data.place = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) > *:nth-child(2)");
      data.place = await parsePlace(data.place);
      data.date_start = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) .date-range time:nth-child(1)");
      data.date_final = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) .date-range time:nth-child(2)");
      return data;
    });

    profile.education = await querySelectorAll(page, ".education__list > li", async (elem) => {
      let data = {};
      data.name = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      data.school_name = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      data.course_name = await querySelectorAttr(elem, ":scope > div > *:nth-child(2)");
      data.date_start = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) .date-range time:nth-child(1)");
      data.date_final = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) .date-range time:nth-child(2)");
      return data;
    });

    profile.courses = await querySelectorAll(page, "[data-section='courses'] ul > li", async (elem) => {
      let data = {};
      data.name = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      return data;
    });

    profile.projects = await querySelectorAll(page, ".projects__list > li", async (elem) => {
      let data = {};
      data.name = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      data.date_start = await querySelectorAttr(elem, ":scope > div > *:nth-child(2) .date-range time:nth-child(1)");
      data.date_final = await querySelectorAttr(elem, ":scope > div > *:nth-child(2) .date-range time:nth-child(2)");
      data.description = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) > div");
      data.link = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) > a", "href");
      return data;
    });

    profile.languages = await querySelectorAll(page, "[data-section='languages'] ul > li", async (elem) => {
      let data = {};
      data.name = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      return data;
    });

    profile.skills = [
      { name: "PHP", rating: 5 },
      { name: "Laravel", rating: 4 },
      { name: "MySQL", rating: 4 },
      { name: "Javascript", rating: 4 },
      { name: "Vue 3", rating: 5 },
      { name: "Nuxt 3", rating: 5 },
      { name: "Vuetify 3", rating: 5 },
      { name: "Docker", rating: 3 },
      { name: "Node JS", rating: 4 },
      { name: "Wordpress", rating: 5 },
      { name: "Three.js", rating: 3 },
    ];

    const generateIds = {
      experience: ["experience", "company", "job"],
      education: ["education", "school_name", "course_name"],
      courses: ["course", "name"],
      projects: ["project", "name"],
      languages: ["language", "name"],
      skills: ["skill", "name"],
    };

    Object.entries(generateIds).map(([name, fields]) => {
      profile[name].map((item, index) => {
        const id = slugify(fields.map((field) => item[field] || field).join("-"));
        profile[name][index] = { id, ...item };
      });
    });

    fs.writeFileSync("./data/linkedin-resume.json", JSON.stringify(profile, null, 2));
    console.log("ready");
  } catch (err) {
    console.log(err);
  }

  if (!showBrowser) {
    await browser.close();
  }
};

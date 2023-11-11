import puppeteer from "puppeteer";
import fs from "fs";

export default async () => {
  const profileUrl = "https://www.linkedin.com/in/jeferson-siqueira/";

  const browser = await puppeteer.launch({ headless: false });
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
    profile.place = await querySelectorAttr(page, ".top-card-layout__first-subline > *:nth-child(1)");
    profile.bio = await querySelectorAttr(page, ".core-section-container__content");

    profile.experience = await querySelectorAll(page, ".experience__list > li", async (elem) => {
      let data = { id: null };
      data.name = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      data.job = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      data.company = await querySelectorAttr(elem, ":scope > div > *:nth-child(2)");
      data.place = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) > *:nth-child(2)");
      data.date_start = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) .date-range time:nth-child(1)");
      data.date_final = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) .date-range time:nth-child(2)");
      data.place = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) > *:nth-child(3)");
      data.id = slugify(`${data.company}-${data.job}`);
      return data;
    });

    profile.education = await querySelectorAll(page, ".education__list > li", async (elem) => {
      let data = { id: null };
      data.name = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      data.school_name = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      data.course_name = await querySelectorAttr(elem, ":scope > div > *:nth-child(2)");
      data.date_start = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) .date-range time:nth-child(1)");
      data.date_final = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) .date-range time:nth-child(2)");
      data.id = slugify(`${data.school_name}-${data.course_name}`);
      return data;
    });

    profile.courses = await querySelectorAll(page, ".courses__list > li", async (elem) => {
      let data = { id: null };
      data.name = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      data.id = slugify(data.name);
      return data;
    });

    profile.projects = await querySelectorAll(page, ".projects__list > li", async (elem) => {
      let data = { id: null };
      data.name = await querySelectorAttr(elem, ":scope > div > *:nth-child(1)");
      data.id = slugify(data.name);
      data.date_start = await querySelectorAttr(elem, ":scope > div > *:nth-child(2) .date-range time:nth-child(1)");
      data.date_final = await querySelectorAttr(elem, ":scope > div > *:nth-child(2) .date-range time:nth-child(2)");
      data.description = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) > div");
      data.link = await querySelectorAttr(elem, ":scope > div > *:nth-child(3) > a", "href");
      return data;
    });

    profile.languages = [];

    fs.writeFileSync("./data/linkedin-resume.json", JSON.stringify(profile, null, 2));
  } catch (err) {
    console.log(err);
  }
  // await browser.close();
};

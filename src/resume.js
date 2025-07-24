import fs from "fs";
import path from "path";
import _ from "lodash";
import textile from "textile-js";
import puppeteer from "puppeteer";
import { Edge } from "edge.js";

import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";
dayjs.locale("pt-br");

const edge = Edge.create();
edge.mount(new URL("../views", import.meta.url));

export default class JsonResume {
  profile = "";
  data = null;

  constructor() {
    this.data = this.getData();
  }

  getData() {
    return {
      $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/refs/heads/v1.0.0/schema.json",
      meta: {
        version: "v1.0.0",
        canonical: "https://github.com/jsonresume/resume-schema/blob/v1.0.0/schema.json",
        updatedAt: {
          date: "2023-12-06T14:20:14-03:00",
          formatted: "Dec 2023",
        },
      },
      basics: {
        name: "",
        label: "",
        image: "",
        email: "",
        phone: "",
        url: "",
        summary: "",
        location: {
          address: "",
          postalCode: "",
          city: "",
          region: "",
          countryCode: "",
        },
        profiles: [],
      },
      work: [],
      volunteer: [],
      education: [],
      awards: [],
      certificates: [],
      publications: [],
      skills: [],
      languages: [],
      interests: [],
      references: [],
      projects: [],
    };
  }

  getLinks() {
    return [
      {
        name: "Whatsapp",
        url: "https://wa.me/message/NG7A2SW25XIEI1",
        icon: "https://api.iconify.design/ic:baseline-whatsapp.svg",
        value: this.data.basics.phone,
      },
      {
        name: "E-mail",
        url: `mailto:${this.data.basics.email}`,
        icon: "https://api.iconify.design/ic:outline-alternate-email.svg",
        value: this.data.basics.email,
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/jeferson-siqueira/",
        icon: "https://api.iconify.design/mdi:linkedin.svg",
        value: null,
      },
      {
        name: "Github",
        url: "https://github.com/jeff-silva",
        icon: "https://api.iconify.design/mdi:github.svg",
        value: null,
      },
      {
        name: "Portfólio",
        url: "https://jeff-silva.github.io",
        icon: "https://api.iconify.design/material-symbols:home-rounded.svg",
        value: null,
      },
      {
        name: "Currículo",
        url: "https://raw.githubusercontent.com/jeff-silva/jeff-silva/main/data/jeferson-silva.pdf",
        icon: "https://api.iconify.design/mdi:download.svg",
        value: null,
      },
    ];
  }

  markdownToHtml(text) {
    text = text.replace(/\n\s+/g, "\n");
    text = textile(text);
    return text;
  }

  trimLines(text) {
    return text.replace(/\n\s+/g, `\n`);
  }

  listHumanized(items, call = (item) => item) {
    items = items.map(call);
    const parts = [];
    items.map((item, index) => {
      parts.push(item);

      let sep = ", ";
      if (index == items.length - 2) sep = " e ";
      if (index == items.length - 1) sep = ".";
      parts.push(sep);
    });

    return parts.join("");
  }

  dateDuration(startDate, endDate) {
    startDate = dayjs(startDate || undefined);
    endDate = dayjs(endDate || undefined);

    let years = startDate.diff(endDate, "year");
    years = Math.max(years, years * -1);

    let months = startDate.diff(endDate, "month") % 12;
    months = Math.max(months, months * -1);

    let parts = [];

    if (years == 1) {
      parts.push(`${years} ano`);
    } else if (years > 1) {
      parts.push(`${years} anos`);
    }

    if (months == 1) {
      parts.push(`${months} mês`);
    } else if (months > 1) {
      parts.push(`${months} meses`);
    }

    const startDateFormat = startDate.format("MMM YYYY").toUpperCase();
    const endDateFormat = endDate.format("MMM YYYY").toUpperCase();
    return `${startDateFormat} ~ ${endDateFormat} (` + parts.join(" e ") + ")";
  }

  locationDefault(data = {}) {
    data = _.merge(
      {
        address: "",
        postalCode: "",
        city: "",
        region: "",
        countryCode: "",
      },
      data,
    );
    return data;
  }

  locationHumanized(location) {
    let parts = [];
    if (location.city) parts.push(location.city);
    if (location.region) parts.push(location.region);
    if (location.countryCode) parts.push(location.countryCode);
    return parts.join(", ");
  }

  basicsProfilesDefault(data = {}) {
    data = _.merge(
      {
        network: "",
        username: "",
        url: "",
      },
      data,
    );
    return data;
  }

  workDefault(data = {}) {
    data = _.merge(
      {
        institution: "",
        // url: "",
        area: "",
        studyType: "",
        // startDate: "",
        // endDate: "",
        score: "",
        courses: [],
      },
      data,
    );
    return data;
  }

  volunteerDefault(data = {}) {
    data = _.merge({}, data);
    return data;
  }

  educationDefault(data = {}) {
    data = _.merge(
      {
        institution: "",
        // url: "",
        area: "",
        studyType: "",
        // startDate: "",
        // endDate: "",
        score: "",
        courses: [],
      },
      data,
    );
    return data;
  }

  awardsDefault(data = {}) {
    data = _.merge(
      {
        title: "",
        date: "",
        awarder: "",
        summary: "",
      },
      data,
    );
    return data;
  }

  certificatesDefault(data = {}) {
    data = _.merge(
      {
        name: "",
        date: "",
        issuer: "",
        url: "",
      },
      data,
    );
    return data;
  }

  publicationsDefault(data = {}) {
    data = _.merge(
      {
        name: "",
        publisher: "",
        releaseDate: "",
        url: "",
        summary: "",
      },
      data,
    );
    return data;
  }

  skillsDefault(data = {}) {
    data = _.merge(
      {
        name: "",
        level: "",
        keywords: [],
      },
      data,
    );
    return data;
  }

  languagesDefault(data = {}) {
    data = _.merge(
      {
        language: "",
        fluency: "",
      },
      data,
    );
    return data;
  }

  interestsDefault(data = {}) {
    data = _.merge(
      {
        name: "",
        keywords: [],
      },
      data,
    );
    return data;
  }

  referencesDefault(data = {}) {
    data = _.merge(
      {
        name: "",
        reference: "",
      },
      data,
    );
    return data;
  }

  projectsDefault(data = {}) {
    data = _.merge(
      {
        name: "",
        description: "",
        highlights: [],
        meta: {
          images: [],
        },
      },
      data,
    );
    data.meta.images = data.meta.images.map((image) => {
      image = _.merge({ file: "", name: "" }, image);
      image.file = `https://jeff-silva.github.io/jeff-silva/assets/projects/${image.file}`;
      return image;
    });
    return data;
  }

  async generate() {
    await fs.promises.mkdir(`./docs/profiles/${this.profile}`, { recursive: true });
    await fs.promises.writeFile(`./docs/profiles/index.html`, `index.html`);

    await this.generateJson();
    await this.generateHtml();
    await this.generatePdf();
    await this.generateMarkdown();
  }

  async generateJson() {
    fs.promises.writeFile(`./docs/profiles/${this.profile}/resume.json`, JSON.stringify(this.data));
  }

  async generateHtml() {
    const links = this.getLinks();
    const html = await edge.render("resume-html", { resume: this, links });
    fs.promises.writeFile(`./docs/profiles/${this.profile}/resume.html`, html);
  }

  async generatePdf() {
    const browser = await puppeteer.launch({
      executablePath: "/usr/bin/google-chrome",
      ignoreDefaultArgs: ["--disable-extensions"],
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto("file://" + path.resolve("docs", "profiles", this.profile, "resume.html"), {
      waitUntil: "networkidle0",
    });
    await page.emulateMediaType("screen");

    await page.pdf({
      path: path.resolve("docs", "profiles", this.profile, "resume.pdf"),
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
      printBackground: true,
      format: "A4",
    });

    await browser.close();
  }

  async generateMarkdown() {
    const links = this.getLinks();
    const html = await edge.render("resume-md", { resume: this, links });
    fs.promises.writeFile(`./docs/profiles/${this.profile}/resume.md`, html);
  }
}

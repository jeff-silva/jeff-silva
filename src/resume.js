import fs from "fs";
import path from "path";
import _ from "lodash";
import textile from "textile-js";
import puppeteer from "puppeteer";
import boxen from "boxen";
import { Edge } from "edge.js";

import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";
dayjs.locale("pt-br");

const edge = Edge.create();
edge.mount(new URL("../views", import.meta.url));

export default class JsonResume {
  profile = "";
  data = null;

  async init() {
    this.data = await this.getData();
    this.data.skills = this.data.skills.sort((a, b) => {
      return a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" });
    });
  }

  async getData() {
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

  getLinks(opts = {}) {
    opts = {
      only: [],
      except: [],
      ...opts,
    };

    let items = [
      {
        id: "whatsapp",
        name: "(31) 99527-1426",
        description: "Whatsapp",
        url: "https://wa.me/message/NG7A2SW25XIEI1",
        icon: "https://api.iconify.design/ic:baseline-whatsapp.svg",
        value: this.data.basics.phone,
      },
      {
        id: "email",
        name: this.data.basics.email,
        description: "E-mail",
        url: `mailto:${this.data.basics.email}`,
        icon: "https://api.iconify.design/ic:outline-alternate-email.svg",
        value: this.data.basics.email,
      },
      {
        id: "linkedin",
        name: "https://www.linkedin.com/in/jeferson-siqueira/",
        description: "Linkedin",
        url: "https://www.linkedin.com/in/jeferson-siqueira/",
        icon: "https://api.iconify.design/mdi:linkedin.svg",
        value: null,
      },
      {
        id: "github",
        name: "https://github.com/jeff-silva",
        description: "Github",
        url: "https://github.com/jeff-silva",
        icon: "https://api.iconify.design/mdi:github.svg",
        value: null,
      },
      {
        id: "portfolio",
        name: "Portfólio",
        description: "Portfólio",
        url: "https://jeff-silva.github.io",
        icon: "https://api.iconify.design/material-symbols:home-rounded.svg",
        value: null,
      },
      {
        id: "download",
        name: "Download",
        description: "Baixar PDF",
        url: "https://jeff-silva.github.io/jeff-silva/profiles/fullstack-dev/resume.pdf",
        icon: "https://api.iconify.design/mdi:download.svg",
        value: null,
      },
    ];

    if (opts.only.length > 0) {
      items = items.filter((o) => {
        return opts.only.includes(o.id);
      });
    }

    if (opts.except.length > 0) {
      items = items.filter((o) => {
        return !opts.except.includes(o.id);
      });
    }

    return items;
  }

  boxen(...args) {
    return boxen(...args);
  }

  markdownToHtml(text) {
    text = this.trimLines(text);
    text = textile(text);
    return text;
  }

  trimLines(text) {
    return text.replace(/\n +/g, `\n`);
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

  dateDuration(startDate, endDate, showDuration = false) {
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

    if (parts.length == 0) {
      parts = ["1 mês"];
    }

    const startDateFormat = startDate.format("MM/YYYY").toUpperCase();
    const endDateFormat = endDate.format("MM/YYYY").toUpperCase();

    let str = `${startDateFormat} ~ ${endDateFormat}`;
    if (showDuration) str += " (" + parts.join(" e ") + ")";
    return str;
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
        name: "",
        position: "",
        url: "",
        startDate: "",
        endDate: "",
        summary: "",
        highlights: [],
        meta: {
          important: false,
          // summaryShort: "",
        },
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
      image.file = `https://jeff-silva.github.io/jeff-silva/${image.file}`;
      return image;
    });
    return data;
  }

  async onGenerate() {
    //
  }

  async generate() {
    await this.init();
    await fs.promises.mkdir(`./docs/profiles/${this.profile}`, { recursive: true });

    fs.promises.writeFile(`./docs/index.html`, await edge.render("index", {}));
    fs.promises.writeFile(`./docs/profiles/index.html`, await edge.render("profiles-index", {}));
    fs.promises.writeFile(
      `./docs/profiles/${this.profile}/index.html`,
      await edge.render("profiles-profile", { resume: this }),
    );

    await this.generateJson();
    await this.generateHtml();
    await this.generatePdf();
    await this.generateMarkdown();
    await this.generateTxt();
    await this.onGenerate();
  }

  async generateJson() {
    fs.promises.writeFile(`./docs/profiles/${this.profile}/resume.json`, JSON.stringify(this.data, null, 2));
  }

  async generateHtml() {
    const html = await edge.render("profiles-resume-html", { resume: this });
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
    const html = await edge.render("profiles-resume-md", { resume: this });
    fs.promises.writeFile(`./docs/profiles/${this.profile}/resume.md`, html);
  }

  async generateTxt() {
    const text = await edge.render("profiles-resume-txt", { resume: this });
    fs.promises.writeFile(`./docs/profiles/${this.profile}/resume.txt`, text);
  }
}

import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";
import textile from "textile-js";
import _ from "lodash";

dayjs.locale("pt-br");

const format = {
  nl2br(content) {
    return content.replace(/\n/g, "<br />");
  },
  strCapitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  },
  strDateBetween(dateStart, dateFinal) {
    const getDate = (theDate) => {
      if (theDate === null) {
        return {
          format: "",
          date: null,
        };
      }

      if (theDate == "now") {
        return {
          format: "Atualmente",
          date: null,
        };
      }

      theDate = dayjs(theDate);

      return {
        format: this.strCapitalize(theDate.format("MMM YYYY")),
        date: theDate.format(),
      };
    };

    let r = {
      diff: {
        format: null,
        years: 0,
        months: 0,
      },
      start: getDate(dateStart),
      final: getDate(dateFinal),
    };

    if (r.start.date && r.final.date) {
      dateStart = dayjs(r.start.date);
      dateFinal = dayjs(r.final.date);

      r.diff.years = dateFinal.diff(dateStart, "year");
      r.diff.months = dateFinal.diff(dateStart, "month") % 12;

      let _format = [];

      if (r.diff.years == 1) {
        _format.push(`${r.diff.years} ano`);
      } else if (r.diff.years > 1) {
        _format.push(`${r.diff.years} anos`);
      }

      if (r.diff.months == 1) {
        _format.push(`${r.diff.years} mês`);
      } else if (r.diff.months > 1) {
        _format.push(`${r.diff.months} meses`);
      }

      r.diff.format = _format.join(" e ");
    }

    return r;
  },
  objDateBetween(date) {
    // const format = date.diff.format ? `(${date.diff.format})` : "";
    return `${date.start.format} ~ ${date.final.format}`;
  },
  dateUnix(dateTime) {
    return dayjs(dateTime).unix();
  },

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
  },

  location(location) {
    const parts = [];
    if (!!location.address) {
      parts.push(location.address);
    }
    if (!!location.city) {
      parts.push(location.city);
    }
    if (!!location.region) {
      parts.push(location.region);
    }
    if (!!location.countryCode) {
      parts.push(location.countryCode);
    }
    return parts.join(", ");
  },

  link(url) {
    if (!url) return "";
    let text = url;
    if (url.startsWith("https://web.archive.org")) {
      text = "http" + url.split("http").at(2);
    }
    return `<a href="${url}" target="_blank">${text}</a></a>`;
  },

  markdownToHtml(text) {
    text = text.replace(/\n\s+/g, "\n");
    text = textile(text);
    return text;
  },

  trimLines(text) {
    return text.replace(/\n\s+/g, `\n`);
  },

  // https://jsonresume.org/schema
  jsonResumeBasics(data) {
    data = {
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
        countryCode: "",
        region: "",
      },
      profiles: [],
      ...data,
    };
    data.summary = format.trimLines(data.summary);
    return data;
  },
  jsonResumeLocation(data) {
    return {
      address: null,
      postalCode: null,
      city: null,
      region: null,
      countryCode: "BR",
      ...data,
    };
  },
  jsonResumeProfile(data) {
    return {
      name: "",
      ...data,
    };
  },
  jsonResumeWork(data) {
    data = _.merge(
      {
        name: "",
        position: "",
        summary: "",
        highlights: [],
        meta: {
          summaryShort: "",
        },
      },
      data,
    );
    data.summary = format.trimLines(data.summary);
    data.meta.summaryShort = format.trimLines(data.meta.summaryShort);
    return data;
  },
  jsonResumeVolunteer(data) {
    data = {
      organization: "",
      position: "",
      url: "",
      // startDate: "",
      // endDate: "",
      summary: "",
      highlights: [],
      ...data,
    };
    data.summary = format.trimLines(data.summary);
    return data;
  },
  jsonResumeEducation(data) {
    return {
      institution: "",
      // url: "",
      area: "",
      studyType: "",
      // startDate: "",
      // endDate: "",
      score: "",
      courses: [],
      ...data,
    };
  },
  jsonResumeAward(data) {
    data = {
      title: "",
      date: "",
      awarder: "",
      summary: "",
      ...data,
    };
    data.summary = format.trimLines(data.summary);
    return data;
  },
  jsonResumeCertificate(data) {
    return {
      name: "",
      date: "",
      issuer: "",
      url: "",
      ...data,
    };
  },
  jsonResumePublication(data) {
    data = {
      name: "",
      publisher: "",
      releaseDate: "",
      url: "",
      summary: "",
      ...data,
    };
    data.summary = format.trimLines(data.summary);
    return data;
  },
  jsonResumeSkill(data) {
    return {
      name: "",
      // level: null,
      keywords: [],
      ...data,
    };
  },
  jsonResumeLanguage(data) {
    return {
      language: "",
      fluency: "",
      ...data,
    };
  },
  jsonResumeInterest(data) {
    return {
      name: "",
      keywords: [],
      ...data,
    };
  },
  jsonResumeReference(data) {
    return {
      name: "",
      reference: "",
      ...data,
    };
  },
  jsonResumeProject(data) {
    data = {
      name: "",
      // startDate: "",
      // endDate: "",
      description: "",
      highlights: [],
      // url: "",
      ...data,
    };
    data.description = format.trimLines(data.description);
    return data;
  },
};

export default format;

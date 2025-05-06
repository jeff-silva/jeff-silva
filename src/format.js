import dayjs from "dayjs";
import "dayjs/locale/pt-br.js";

dayjs.locale("pt-br");

export default {
  location(place) {
    return [place.city, place.state, place.country].filter((v) => !!v).join(", ");
  },
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

  // https://jsonresume.org/schema
  jsonResumeBasics(data) {
    return {
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
    return {
      name: "",
      position: "",
      url: "",
      startDate: "",
      endDate: "",
      summary: "",
      highlights: [],
      ...data,
    };
  },
  jsonResumeVolunteer(data) {
    return {
      organization: "",
      position: "",
      url: "",
      startDate: "",
      endDate: "",
      summary: "",
      highlights: [],
      ...data,
    };
  },
  jsonResumeEducation(data) {
    return {
      institution: "",
      url: "",
      area: "",
      studyType: "",
      startDate: "",
      endDate: "",
      score: "",
      courses: [],
      ...data,
    };
  },
  jsonResumeAward(data) {
    return {
      title: "",
      date: "",
      awarder: "",
      summary: "",
      ...data,
    };
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
    return {
      name: "",
      publisher: "",
      releaseDate: "",
      url: "",
      summary: "",
      ...data,
    };
  },
  jsonResumeSkill(data) {
    return {
      name: "",
      level: null,
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
    return {
      name: "",
      startDate: "",
      endDate: "",
      description: "",
      highlights: [],
      url: "",
      ...data,
    };
  },
};

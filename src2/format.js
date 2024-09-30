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
      dateFinal = dayjs(r.start.final);

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
    const format = date.diff.format ? `(${date.diff.format})` : "";
    return `${date.start.format} ~ ${date.final.format} ${format}`;
  },
  dateUnix(dateTime) {
    return dayjs(dateTime).unix();
  },
};

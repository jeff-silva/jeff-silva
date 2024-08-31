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
    let r = {
      diff: {
        format: null,
        years: 0,
        months: 0,
      },
      start: null,
      final: null,
    };

    if (dateStart) {
      dateStart = dayjs(dateStart == "now" ? undefined : dateStart);
      r.start = {
        format: this.strCapitalize(dateStart.format("MMM YYYY")),
        date: dateStart.format(),
      };
    }

    if (dateFinal) {
      dateFinal = dayjs(dateFinal == "now" ? undefined : dateFinal);
      r.final = {
        format: this.strCapitalize(dateFinal.format("MMM YYYY")),
        date: dateFinal.format(),
      };
    }

    if (r.start && r.final) {
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
    return `${date.start.format} ~ ${date.final.format} (${date.diff.format})`;
  },
};

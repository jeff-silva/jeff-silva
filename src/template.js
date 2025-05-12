import _ from "lodash";
import format from "./format.js";

export default {
  loop(data, callLoop, callEmpty = () => "", glue = "") {
    if (data.length == 0) {
      return callEmpty();
    }
    return (
      `\n` +
      data
        .filter((...args) => {
          return callLoop(...args);
        })
        .map((...args) => {
          return callLoop(...args);
        })
        .join(glue)
    );
  },
  if(condition, callTrue, callFalse = () => "") {
    return condition ? callTrue() : callFalse();
  },
  // https://lodash.com/docs/4.17.15#template
  parse(data, template) {
    const compiled = _.template(template, {});
    return compiled({ ...data, format });
  },
};

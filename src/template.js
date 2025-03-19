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
};

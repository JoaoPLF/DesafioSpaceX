exports.objectToArray = (object) => {
  return Object.keys(object).map((key) => ({ ...object[key] }));
};
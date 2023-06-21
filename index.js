const addDays = require("date-fns/addDays");

function getDateElements(days) {
  const result = addDays(new Date(2020, 8, 22), days);
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
}

module.export = getDateElements;

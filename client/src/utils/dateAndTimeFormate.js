import enGB from "date-fns/locale/en-GB";
import { formatRelative } from "date-fns";

const format = {
  yesterday: "'Yesterday'",
  today: "'Today'",
  tomorrow: "'Tomorrow'",
  other: "dd/MM/yyyy",
};

const locale = {
  ...enGB,
  formatRelative: (token) => format[token],
};

const changeDateFormate = (test) =>
  formatRelative(Date.parse(test), new Date());

export { changeDateFormate };

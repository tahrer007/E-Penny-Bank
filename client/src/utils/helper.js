import {
  CHARACTERS,
  KEY_LENGTH,
  TEXT_LENGTH_MAX,
  TEXT_LENGTH_MIN,
} from "constants/const";
const makeKey = () => {
  let result = "";

  const charactersLength = CHARACTERS.length;

  for (let i = 0; i < KEY_LENGTH; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const checkId = (userId, adminId) => userId === adminId;
const textLength = (text) =>
  text.length >= TEXT_LENGTH_MIN && text.length <= TEXT_LENGTH_MAX;

const capitalize1stChar = (str) => {
  if (!str) return null;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  return str2;
};

const capitalizeAll = (str) => {
  console.log(str);
  const arr = str.split(" ");

  const capitalized = arr.map((str) => capitalize1stChar(str));
  console.log(capitalized);

  return capitalized.join(" ");
};

export { makeKey, checkId, textLength, capitalize1stChar, capitalizeAll };

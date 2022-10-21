import { CHARACTERS, KEY_LENGTH } from "constants/const";
const makeKey = () => {
  let result = "";

  const charactersLength = CHARACTERS.length;

  for (let i = 0; i < KEY_LENGTH; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const checkId = (userId, adminId) => userId === adminId;

const pwdLength = pwd => pwd.length >= 4 && pwd.length <= 24;
export { makeKey, checkId ,pwdLength };

import { CHARACTERS, KEY_LENGTH } from "constants/const";
const makeKey = () => {
  let result = "";

  const charactersLength = CHARACTERS.length;

  for (let i = 0; i < KEY_LENGTH; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const checkId =(userId,adminId) =>userId===adminId ;


export { makeKey ,checkId };

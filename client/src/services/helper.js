import { CHARACTERS, KEY_LENGTH } from "./const";
const makeKey = () => {
  let result = "";

  const charactersLength = CHARACTERS.length;

  for (let i = 0; i < KEY_LENGTH; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};


export { makeKey };

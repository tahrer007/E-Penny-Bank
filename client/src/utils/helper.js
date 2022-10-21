import { CHARACTERS, KEY_LENGTH ,TEXT_LENGTH_MAX ,TEXT_LENGTH_MIN } from "constants/const";
const makeKey = () => {
  let result = "";

  const charactersLength = CHARACTERS.length;

  for (let i = 0; i < KEY_LENGTH; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const checkId = (userId, adminId) => userId === adminId;

const textLength = text => text.length >= TEXT_LENGTH_MIN && text.length <= TEXT_LENGTH_MAX;
export { makeKey, checkId ,textLength };

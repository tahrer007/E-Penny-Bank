const MAX = 100;
const MIN = 1;
const PRIVATE_BOX = 0;
const SHARED_BOX = 1;
const BOXES_TYPES = ["private", "shared"];
const KEY_LENGTH = 5;
const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const EMAIL ="email" ; 
const PASSWORD = "password" ; 
const NAME = "name" ; 
const CONFIRMEDPASSWORD ="confirmedPassword" ;
const RANDOM = "random";
const EXACT = "exact";
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const TEXT_LENGTH_MIN = 4 ; 
const TEXT_LENGTH_MAX = 24 ; 

const INSTRACTIONS = {
  username: ["Valid e-mail address."],
  password: [
    " 8 to 24 characters.",
    "Must include uppercase and lowercase letters, a number and a special character.",
    "Allowed special characters: @ ! #",
  ],
  confirmPwd: ["Must match the first password input field."],
  name :[" 4 to 24 characters."] ,
  exactDeposit :["please add amount between 1 to 100"] , 
};

export {
  MAX,
  MIN,
  PRIVATE_BOX,
  SHARED_BOX,
  BOXES_TYPES,
  KEY_LENGTH,
  CHARACTERS,
  EMAIL ,
  PASSWORD ,
  CONFIRMEDPASSWORD , 
  NAME ,
  RANDOM ,
  EXACT ,
  PWD_REGEX ,
  INSTRACTIONS ,
  TEXT_LENGTH_MIN ,
  TEXT_LENGTH_MAX
};

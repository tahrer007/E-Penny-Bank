import { useRef, useState, useEffect } from "react";

//import InputField from "components/reusables/InputField/InputField";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import Label from "components/reusables/form/label/Label";
import Instructions from "components/reusables/form/instructions/Instructions";
import { PWD_REGEX } from "constants/const";
import { textLength } from "utils/helper";
import { useSignupMutation } from "features/auth/authApiSlice";
import useUserInfo from "hooks/useUserInfo";
//TODO :rector to shorter / reusable component 
import "./SignUp";
const SIGNUP_URL = "auth/signup";
const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const { theme } = useUserInfo();
  const [signup, { isLoading }] = useSignupMutation();

  const [name, setName] = useState("");
  const [nameFocus, setNameFocus] = useState(false);
  const [validName, setValidName] = useState(false);

  const [email, setUser] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const disableClick =
    !validEmail || !validPwd || !validMatch || !name ? true : false;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(textLength(name));
  }, [name]);

  useEffect(() => {
    setValidEmail(validator.isEmail(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd, name]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate("../Login");
      }, 5000);
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = validator.isEmail(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const newUser = await signup({
        email,
        password: pwd,
        name: "tahrer",
      }).unwrap();

      console.log(newUser);
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Email is already exist!");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className={`pageContainer signupPage ${theme}`}>
          <h1>Success!</h1>
          <p>
            <a href="#">Log in</a>
          </p>
        </section>
      ) : (
        <section className={`innerContainer authPage light`}>
          <h1>Registor</h1>
          <form>
            <Label
              labelName={"name: "}
              htmlFor={"name"}
              validInput={name}
              invalidInput={!validName && name}
            />
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              ref={userRef}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="namenote"
              onFocus={() => setNameFocus(true)}
              onBlur={() => setMatchFocus(false)}
              autoComplete="off"
            />
            <Instructions
              className={nameFocus && name && !validName}
              id="name"
            />
            <Label
              labelName={"email :"}
              htmlFor={"email"}
              validInput={validEmail}
              invalidInput={!validEmail && email}
            />
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <Instructions
              className={emailFocus && email && !validEmail}
              id="username"
            />
            <Label
              labelName={"Password: "}
              htmlFor={"password"}
              validInput={validPwd}
              invalidInput={!validPwd && pwd}
            />
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              autoComplete="off"
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <Instructions
              content={"pwd"}
              className={pwdFocus && !validPwd && pwd}
              id={"password"}
            />
            <Label
              labelName={"Confirm Password: "}
              htmlFor={"pwdConfirm"}
              validInput={validMatch && matchPwd }
              invalidInput={!validMatch && matchPwd }
            />
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setMatchFocus(false)}
              autoComplete="off"
            />
            <Instructions
              content={"confirmnote"}
              className={matchFocus && !matchPwd}
              id={"confirmPwd"}
            />

            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            <div className="singleBtnContainer">
              <div
                disabled={disableClick}
                className={` mainBtns columnFlex hoverable ${
                  disableClick ? "disabled" : ""
                }`}
                onClick={handleSubmit}
              >
                {isLoading ? "Loading ...." : " Sign up"}
              </div>
            </div>
          </form>

          <p>
            Already registered?
            <br />
            <span className="line">
              <a href="#">Login</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default SignUp;

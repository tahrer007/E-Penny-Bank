import { useRef, useState, useEffect } from "react";

//import InputField from "components/reusables/InputField/InputField";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import Label from "components/reusables/form/label/Label";
import Instructions from "components/reusables/form/instructions/Instructions";
import { PWD_REGEX } from "constants/const";
import { pwdLength } from "utils/helper";
import { useSignupMutation } from "features/auth/authApiSlice";
import { useDispatch } from "react-redux";

import useUserInfo from "hooks/useUserInfo";
import "./SignUp";
const SIGNUP_URL = "auth/signup";
const SignUp = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const { theme } = useUserInfo();
  const [signup, { isLoading }] = useSignupMutation();
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const disableClick = !validName || !validPwd || !validMatch ? true : false;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(validator.isEmail(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(pwdLength(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

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
    const v1 = validator.isEmail(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const newUser = await signup({
        email: user,
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
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section className={`innerContainer authPage light`}>
          <h1>Registor</h1>
          <form>
            <Label
              htmlFor={"username"}
              valid1={validName}
              valid2={validName || !user}
            />
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <Instructions
              className={userFocus && user && !validName}
              id="username"
            />
            <Label
              htmlFor={"password"}
              valid1={validPwd}
              valid2={validPwd || !pwd}
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
              className={pwdFocus && !validPwd}
              id={"password"}
            />
            <Label
              htmlFor={"confirm_pwd"}
              valid1={validPwd}
              valid2={validPwd || !pwd}
              text={"Confirm Password:"}
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
              className={matchFocus && !validMatch}
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

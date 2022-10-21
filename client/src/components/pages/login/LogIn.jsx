import React, { useRef, useState, useEffect } from "react";
import validator from "validator";
import { useNavigate, useLocation } from "react-router-dom";
import Label from "components/reusables/form/label/Label";
import Instructions from "components/reusables/form/instructions/Instructions";
import { useDispatch } from "react-redux";
import { setCredentials } from "features/auth/authSlice";
import { useLoginMutation } from "features/auth/authApiSlice";
import { textLength } from "utils/helper";
import useUserInfo from "hooks/useUserInfo";
import "./logIn.scss";

const LogIn = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/welcome";
  const { theme } = useUserInfo();

  const [user, setUser] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const disableClick = !validUserName || !validPwd;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUserName(validator.isEmail(user));
  }, [user]);
  useEffect(() => {
    setValidPwd(textLength(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ email: user, password: pwd }).unwrap();
      dispatch(setCredentials({ ...userData }));
      setUser("");
      setPwd("");
      navigate(from);
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <section className={`innerContainer authPage light`}>
      <h1>Log in</h1>
      <form>
        <Label
          labelName={"email :"}
          htmlFor={"username"}
          validInput={validUserName}
          invalidInput={!validUserName && user}
        />
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          aria-invalid={validUserName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <Instructions
          className={userFocus && user && !validUserName}
          //id="uidnote"
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
          autoComplete="off"
          value={pwd}
          required
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <Instructions className={pwdFocus && pwd && !validPwd} id="password" />
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
            {isLoading ? "Loading ...." : " Log in"}
          </div>
        </div>
      </form>
     
      <p>
        Need an Account?
        <br />
        <span className="line">
          {/*put router link here*/}
          <a href="/signup">Sign Up</a>
        </span>
      </p>
    </section>
  );
};

export default LogIn;

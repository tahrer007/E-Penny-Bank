import React, { useRef, useState, useEffect } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import Label from "components/reusables/form/label/Label";
import Instructions from "components/reusables/form/instructions/Instructions";
//import InputField from "components/reusables/InputField/InputField";
//import { EMAIL, PASSWORD } from "services/const";
import "./LogIn";
import { Button } from "rsuite";
import api from "api/axios";
const LOGIN_URL = "auth/login";

const LogIn = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(validator.isEmail(user));
  }, [user]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = validator.isEmail(user);

    if (!v1) {
      setErrMsg("Invalid Email");
      return;
    }
    try {
      const response = await api.post(
        LOGIN_URL,
        JSON.stringify({ email: user, password: pwd, name: "tahrer" }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  return (
    <div className="pageContainer signupPage">
      {success ? (
        <section>
          <h1>you logged in , Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <h1>Log in</h1>
          <form onSubmit={handleSubmit}>
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
              id="uidnote"
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
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <Instructions
              content={"pwd"}
              className={pwdFocus && !validPwd}
              id={"pwdnote"}
            />

            <button disabled={!validName || !pwd ? true : false}>
             log in
            </button>
          </form>

          <p>
            Need an Account?
            <br />
            <span className="line">
              {/*put router link here*/}
              <a href="#">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default LogIn;

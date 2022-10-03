import React, { useRef, useState, useEffect } from "react";
import validator from "validator";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Label from "components/reusables/form/label/Label";
import Instructions from "components/reusables/form/instructions/Instructions";
//import InputField from "components/reusables/InputField/InputField";
//import { EMAIL, PASSWORD } from "services/const";
import "./LogIn";

import api from "api/axios";
const LOGIN_URL = "auth/login";

const LogIn = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
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

  useEffect(() => {
    console.log(errMsg);
  }, [errMsg]);

  const handleSubmit = async (e) => {
    console.log("clicked !! ");
    e.preventDefault();

    try {
      const response = await api.post(
        LOGIN_URL,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      setSuccess(true);
      const accessToken = response?.data?.accessToken;
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
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
            <label htmlFor="password">password </label>
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

            <button disabled={!validName || !pwd ? true : false}>log in</button>
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

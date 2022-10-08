import React, { useRef, useState, useEffect } from "react";
import validator from "validator";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Label from "components/reusables/form/label/Label";
import Instructions from "components/reusables/form/instructions/Instructions";
import { useDispatch } from "react-redux";
import { setCredentials } from "features/auth/authSlice";
import { useLoginMutation } from "features/auth/authApiSlice";
import "./LogIn";

const LogIn = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/welcome";

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

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

    try {
      console.log(user, pwd);
      const userData = await login({ email: user, password: pwd }).unwrap();
      dispatch(setCredentials({ ...userData }));
      setUser("");
      setPwd("");
      navigate(from);
      console.log(userData.user._id);
      navigate(from, {state :{ userId: userData.user._id }});
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

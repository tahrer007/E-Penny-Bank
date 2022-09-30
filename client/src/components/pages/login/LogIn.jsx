import React, { useState, useEffect } from "react";
import InputField from "components/reusables/InputField/InputField";
import { EMAIL, PASSWORD } from "../../../services/const";
import validator from "validator";
import { useNavigate, Link } from "react-router-dom";
import "./LogIn";
import { Button } from "rsuite";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setrememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {}, []);
  const onChangeText = (e) =>
    e.target.id === EMAIL
      ? setEmail(e.target.value)
      : setPasswrod(e.target.value);

  useEffect(() => {
    if (!errorMessage) return;
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }, [errorMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email))
      setErrorMessage("please enter a valid email");
    console.log(email, password, rememberMe);
  };

  return (
    <div className="loginPage pageContainer ">
      log in
      <form onSubmit={handleSubmit} className="form">
        <InputField
          placeholder={"enter your email"}
          value={email}
          onChangeText={onChangeText}
          editable={true}
          type={"email"}
          label={EMAIL}
          id={EMAIL}
        />
        <InputField
          placeholder={"enter your password"}
          value={password}
          onChangeText={onChangeText}
          editable={true}
          type={PASSWORD}
          label={PASSWORD}
          id={PASSWORD}
        />
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setrememberMe(!rememberMe)}
          />
          My Value
        </label>

        <input type="submit" value="Submit" />
      </form>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <div className="signUpMessage">
        don't have account ?
        <button onClick={() => navigate("/signup")} /> test <button />
      </div>
    </div>
  );
};

export default LogIn;

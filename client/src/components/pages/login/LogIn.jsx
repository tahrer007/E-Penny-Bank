import React, { useState, useEffect } from "react";
import InputField from "components/reusables/InputField/InputField";
import { EMAIL, PASSWORD } from "../../../services/const";
import validator from "validator";
import "./LogIn";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setrememberMe] = useState(false);

  useEffect(() => {}, []);
  const onChangeText = (e) =>
    e.target.id === EMAIL
      ? setEmail(e.target.value)
      : setPasswrod(e.target.value);

  useEffect(() => {
    console.log(rememberMe);
    if (!errorMessage) return;
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }, [errorMessage, rememberMe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email))
      setErrorMessage("please enter a valid email");
    console.log(email, password);
    console.log("handleSubmit");
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
    </div>
  );
};

export default LogIn;

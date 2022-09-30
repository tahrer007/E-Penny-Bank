import React, { useState, useEffect } from "react";
import { EMAIL, PASSWORD, CONFIRMEDPASSWORD, NAME } from "services/const";
import InputField from "components/reusables/InputField/InputField";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import "./SignUp";

const SignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
    name: "",
    rememberMe: false,
  });

  /*const [error, setError] = useState({
    EMAIL: "",
    PASSWORD: "",
    CONFIRMEDPASSWORD: "",
    NAME: "",
  });*/
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(input);
  }, [input]);

  const validateInputs = (e) => {
    switch (e.target.id) {
      case EMAIL:
        if (!validator.isEmail(input.email))
          setError("please enter a valid email");
        break;
      case CONFIRMEDPASSWORD:
        if (
          input.password !== input.confirmedPassword ||
          !input.confirmedPassword
        )
          setError("passwords don't match");
        break;
      case NAME:
        if (!input.name) setError("please type name");

        break;
      default:
        if (!e.target.id) setError("please type name");
        break;
    }
  };

  const onChangeText = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="loginPage pageContainer ">
      SIgn in
      <form onSubmit={handleSubmit} className="form">
        <InputField
          placeholder={"Enter user name"}
          value={input.NAME}
          onChangeText={onChangeText}
          editable={true}
          type={"text"}
          label={NAME}
          id={NAME}
          validateInputs={validateInputs}
        />
        <InputField
          placeholder={"enter your email"}
          value={input.EMAIL}
          onChangeText={onChangeText}
          editable={true}
          type={EMAIL}
          label={EMAIL}
          id={EMAIL}
          validateInputs={validateInputs}
        />
        <InputField
          placeholder={"enter your password"}
          value={input.PASSWORD}
          onChangeText={onChangeText}
          editable={true}
          type={PASSWORD}
          label={"confirm password"}
          id={PASSWORD}
          validateInputs={validateInputs}
        />
        <InputField
          placeholder={"password"}
          value={input.CONFIRMEDPASSWORD}
          onChangeText={onChangeText}
          editable={true}
          type={PASSWORD}
          label={"confirm password"}
          id={CONFIRMEDPASSWORD}
          validateInputs={validateInputs}
        />
        <label>
          <input
            type="checkbox"
            checked={input.rememberMe}
            onChange={onChangeText}
            id={"rememberMe"}
          />
          Remmber me
        </label>

        <input type="submit" value="Submit" />
      </form>
      {error && <div className="errorMessage">{error}</div>}
    </div>
  );
};

export default SignUp;

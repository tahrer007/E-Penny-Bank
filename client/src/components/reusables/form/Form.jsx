import React, { useState, useEffect } from "react";
import InputField from "../InputField/InputField";

import { EMAIL, PASSWORD } from "services/const";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rememberMe, setrememberMe] = useState(false);
  const onChangeText = (e) =>
    e.target.id === EMAIL
      ? setEmail(e.target.value)
      : setPasswrod(e.target.value);
  return (
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
  );
};

export default Form;

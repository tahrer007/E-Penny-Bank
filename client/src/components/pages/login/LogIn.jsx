import React, { useState } from "react";
import InputField from "components/reusables/InputField/InputField";
import { EMAIL, PASSWORD } from "../../../services/const";
import { useEffect } from "react";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const onChangeText = (e) =>
    e.target.id === EMAIL
      ? setEmail(e.target.value)
      : setPasswrod(e.target.value);

  //useEffect(() => {}, [password, email]);

  return (
    <div className="pageContainer">
      log in
      <InputField
        placeholder={"enter your email"}
        value={email}
        onChangeText={onChangeText}
        editable={true}
        type={"text"}
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
    </div>
  );
};

export default LogIn;

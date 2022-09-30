import React, { useState } from "react";
import InputField from "components/InputField/InputField";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const onChangeText = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="pageContainer">
      log in
      <InputField
        placeholder={"enter your email"}
        value={email}
        onChangeText={onChangeText}
        editable={true}
        type={"text"}
        label ={"email"}
      />
    </div>
  );
};

export default LogIn;

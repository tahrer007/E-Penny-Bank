import React from "react";

const InputField = ({ label , placeholder, value, onChangeText, isEditable, type }) => {
  return (
    <label>
     {label} : 
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChangeText}
        editable={isEditable}
        type={type}
      />
    </label>
  );
};

export default InputField;

import React from "react";

const InputField = ({ id,label , placeholder, value, onChangeText, isEditable, type }) => {
  return (
    <label>
     {label} : 
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChangeText}
        editable={isEditable}
        type={type}
        id={id}
      />
    </label>
  );
};

export default InputField;

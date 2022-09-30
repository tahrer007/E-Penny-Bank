import React from "react";

const InputField = ({
  id,
  label,
  placeholder,
  value,
  onChangeText,
  isEditable,
  type,
  validateInputs
}) => {
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
        onBlur ={validateInputs}
      />
    </label>
  );
};

export default InputField;

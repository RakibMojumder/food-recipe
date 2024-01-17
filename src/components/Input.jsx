import React from "react";

const Input = ({ placeholder, handleChange, defaultValue }) => {
  return (
    <input
      type="text"
      name=""
      id=""
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={handleChange}
      className="w-full py-1 pl-3 border focus:outline-none focus:border-primary rounded"
    />
  );
};

export default Input;

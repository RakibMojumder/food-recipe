import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      name=""
      id=""
      placeholder={placeholder}
      className="w-full py-1 pl-3 border focus:outline-none focus:border-primary rounded"
    />
  );
};

export default Input;

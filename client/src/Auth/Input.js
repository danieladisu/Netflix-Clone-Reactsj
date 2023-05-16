import React from "react";
import "./input.css";

const Input = ({ id, onChange, value, label, type }) => {
  return (
    <div className="input-container">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        className="input-field"
        placeholder=""
      />
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;

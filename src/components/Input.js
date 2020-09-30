import React from "react";

function Input(props) {
  return (
    <div className="input">
      <input
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;

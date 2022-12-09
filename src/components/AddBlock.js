import React, { useState } from "react";
import "./AddBlock.css";

function AddBlock({ handleClick }) {
  const [value, setValue] = useState("");
  const [isValid, setIsvalid] = useState(true);
  const [isFocused, setIsfocused] = useState(false);
  const onClick = (value) => {
    if (value.length) {
      if (value.length >= 54) {
        setIsvalid(false);
      } else {
        handleClick(value);
        setValue("");
      }
    }
  };

  return (
    <div className="add-block">
      <p className="add-text">Task</p>
      <input
        className={`add-inp ${!isValid ? "inp-red" : ""}`}
        placeholder="Write here"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsfocused(true)}
        onBlur={() => setIsfocused(false)}
      />
      {isFocused ? (
        <button className="button" onMouseDown={() => setValue("")}>
          <b>X</b>
        </button>
      ) : null}
      <button className="but" onClick={() => onClick(value)}>
        Add
      </button>
      {!isValid ? <p className="error-text">Task content can contain max 54 characters</p> : null}
    </div>
  );
}

export default AddBlock;

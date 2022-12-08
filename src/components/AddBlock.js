import React, { useState } from "react";
import './AddBlock.css';

function AddBlock({ handleClick }) {
  const [value, setValue] = useState("");
  const onClick = (value) => {
    handleClick(value);
    setValue("");
  };
  return (
    
    <div className="add-block">
      <p className="add-text">Task</p>
      <input
        className="add-inp"
        placeholder="Write here"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="but" onClick={() => onClick(value)}>
        Add
      </button>
    </div>
  );
}

export default AddBlock;

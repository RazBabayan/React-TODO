import React, { useState } from "react";
import Popup from "./Popup";
import "./TodoItem.css";

function TodoItem({ item, onCheck, onDelete }) {
  const [popup, setPopup] = useState(false);

  return (
    <div className="add-list-div">
      <div className="add-list">
        <input
          className="inp-check"
          type={"checkbox"}
          value={item.isChecked}
          onChange={() => onCheck(item.id)}
          checked={item.isChecked}
        />
        {item.value}
        <button className="delete" onClick={() => setPopup(true)}>
          <b>X</b>
        </button>
        <Popup
          trigger={popup}
          onDelete={() => {
            onDelete(item.id);
            setPopup(false);
          }}
          onCancel={() => setPopup(false)}
          onClose={() => setPopup(false)}
        />
      </div>
    </div>
  );
}

export default TodoItem;

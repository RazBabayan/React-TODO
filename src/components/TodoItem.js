import React from "react";
import Popup from "./Popup";
import "./TodoItem.css";

function TodoItem({ item, onCheck, onDelete }) {
  return (
    <div className="add-list-div">
      <div className="add-list">
        <input
         className="inp-check"
          type={"checkbox"}
          value={item.isChecked}
          onChange={() => onCheck(item.id)}
        />
        {item.value}
        <button className="delete" onClick={() => onDelete(item.id)}>
         <b>X</b> 
        </button>
      
      </div>
    </div>
  );
}

export default TodoItem;

import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, onCheck, onDelete }) {
  return (
    <div>
      {items.map((el, i) => (
        <TodoItem key={i} item={el} onCheck={onCheck} onDelete ={onDelete} />
      ))}
    </div>
  );
}

export default TodoList;

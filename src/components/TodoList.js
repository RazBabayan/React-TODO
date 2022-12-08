import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, onCheck, onDelete, filter }) {
  return (
    <div>
      {items.map((el, i) =>
        !(filter && el.isChecked) ? (
          <TodoItem key={i} item={el} onCheck={onCheck} onDelete={onDelete} />
        ) : null
      )}
    </div>
  );
}

export default TodoList;

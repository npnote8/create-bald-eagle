import React from "react";
const TodoListItem = ({ item, onRemoveTodo }) => {
  return (
    <li>
      {item.fields.Title}
      &nbsp;
      <button type="button" onClick={() => onRemoveTodo(item.id)}>
        Remove
      </button>
    </li>
  );
};
export default TodoListItem;

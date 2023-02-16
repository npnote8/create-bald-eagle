import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({ item, onRemoveTodo }) => {
  return (
    <div className={style.parent}>
      <li className={style.ListItem}>
        {item.fields.Title}
        &nbsp;
        <button
          type="button"
          className={style.buttonRemove}
          onClick={() => onRemoveTodo(item.id)}
        >
          Remove
        </button>
      </li>
    </div>
  );
};
TodoListItem.propTypes = {
  item: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};
export default TodoListItem;

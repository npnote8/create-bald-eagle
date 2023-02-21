import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import style from "./TodoList.module.css";

const TodoList = ({ todoList, onRemoveTodo }) => {
  return (
    <ul className={style.parent}>
      {todoList.map((item, index) => (
        <TodoListItem
          key={item.id}
          item={item}
          onRemoveTodo={onRemoveTodo}
          index={index}
        />
      ))}
    </ul>
  );
};
TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};
export default TodoList;

import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import style from "./TodoList.module.css";

const TodoList = ({ todoList, onRemoveTodo }) => {
  const tableRows = todoList.map((item, index) => {
    return (
      <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
    );
  });
  return (
    <>
      {/*    <ul className={style.parent}>
        {todoList.map((item, index) => (
          <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul> */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Due Date</th>
            <th>Days Left</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
};
TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};
export default TodoList;

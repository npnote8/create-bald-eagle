import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
const TodoListOutdated = ({ todoList, onRemoveTodo, onImportantTodo }) => {
  const tableRows = todoList.map((item) => {
    if (
      Math.ceil(
        (Date.parse(item.fields.DueDate) - new Date()) / (1000 * 3600 * 24)
      ) < 0
    ) {
      return (
        <TodoListItem
          key={item.id}
          item={item}
          onRemoveTodo={onRemoveTodo}
          onImportantTodo={onImportantTodo}
        />
      );
    } else {
      return "";
    }
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Due Date</th>
          <th>Days Left</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};
TodoListOutdated.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};

export default TodoListOutdated;

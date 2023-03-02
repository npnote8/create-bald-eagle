import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import style from "./TodoList.module.css";
import ButtonSortTitle from "./ButtonSortTitle";
import ButtonSortDate from "./ButtonSortDate";
import ButtonSortDays from "./ButtonSortDays";

const TodoList = ({ todoList, onRemoveTodo, setTodoList, onImportantTodo }) => {
  const tableRows = todoList.map((item) => {
    if (
      Math.ceil(
        (Date.parse(item.fields.DueDate) - new Date()) / (1000 * 3600 * 24)
      ) >= 0
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
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>
              Title
              {
                <ButtonSortTitle
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              }
            </th>
            <th>
              Due Date
              {<ButtonSortDate todoList={todoList} setTodoList={setTodoList} />}
            </th>
            <th>
              Days Left
              {<ButtonSortDays todoList={todoList} setTodoList={setTodoList} />}
            </th>
            <th>Important</th>
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

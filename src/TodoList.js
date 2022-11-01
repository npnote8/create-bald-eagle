import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Complete reading the textbook" },
    { id: 3, title: "Complete watching tutorials" },
  ];
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default TodoList;

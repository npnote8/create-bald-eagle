import React from "react";

const TodoList = () => {
  const todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Complete reading the textbook" },
    { id: 3, title: "Compete watching tutorials" },
  ];
  return (
    <ul>
      {todoList.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
export default TodoList;

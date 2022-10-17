import React from "react";

let todoList = [];
todoList.push({ id: 1, title: "Complete assignment" });
todoList.push({ id: 2, title: "Complete reading the textbook" });
todoList.push({ id: 3, title: "Compete watching tutorials" });

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

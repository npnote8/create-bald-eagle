import React, { Fragment, useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("savedTodoList"));
    return savedTodoList || [];
  });
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodoList];
};
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };
  return (
    <Fragment>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </Fragment>
  );
}

export default App;

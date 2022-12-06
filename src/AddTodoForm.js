import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo({ id: Date.now(), title: todoTitle });

    setTodoTitle("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};
export default AddTodoForm;

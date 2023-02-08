import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./AddTodoForm.module.css";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ id: Date.now(), title: todoTitle });

    setTodoTitle("");
  };
  return (
    <form onSubmit={handleAddTodo} className={style.submitForm}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        <strong>Title:</strong>
      </InputWithLabel>
      &nbsp;
      <input type="submit" className={style.buttonAdd} value="Add" />
    </form>
  );
};
export default AddTodoForm;

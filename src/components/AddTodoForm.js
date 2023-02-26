import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./AddTodoForm.module.css";
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo, addDueDate }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleDateChange = (event) => {
    const newDueDate = event.target.value;
    console.log(newDueDate);
    setDueDate(newDueDate);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ id: Date.now(), title: todoTitle, duedate: dueDate });

    setTodoTitle("");
    setDueDate("");
  };
  return (
    <form onSubmit={handleAddTodo} className={style.submitForm}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
        dueDate={dueDate}
        handleDateChange={handleDateChange}
      >
        <strong>Title:</strong>
      </InputWithLabel>
      &nbsp;
      <input type="submit" className={style.buttonAdd} value="Add" />
    </form>
  );
};
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};
export default AddTodoForm;

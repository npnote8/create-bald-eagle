import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./AddTodoForm.module.css";
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };
  const handleDateChange = (event) => {
    const newDueDate = event.target.value;
    setDueDate(newDueDate);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    if (dueDate) {
      onAddTodo({ id: Date.now(), title: todoTitle, duedate: dueDate });
      setTodoTitle("");
      setDueDate("");
    } else {
      alert("Enter valid Date");
    }
  };
  return (
    <form onSubmit={handleAddTodo} className={style.submitForm}>
      <InputWithLabel
        label="Title"
        handleChange={handleTitleChange}
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        placeholder="Add a new Todo"
        isFocused
      />
      <InputWithLabel
        label="Due Date"
        handleChange={handleDateChange}
        type="date"
        id="duedate"
        name="Due Date"
        value={dueDate}
      />
      &nbsp;
      <input type="submit" className={style.buttonAdd} value="Add" />
    </form>
  );
};
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};
export default AddTodoForm;

import React from "react";
import style from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

const InputWithLabel = ({
  todoTitle,
  handleTitleChange,
  children,
  dueDate,
  handleDateChange,
}) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <React.Fragment>
      <label htmlFor="todoTitle" className={style.label}>
        Title
      </label>
      &nbsp;
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
        className={style.searchBox}
        placeholder="Add a new Todo"
      />
      <label htmlFor="todoTitle" className={style.label}>
        Due Date
      </label>
      &nbsp;
      <input
        type="date"
        id="duedate"
        name="DueDate"
        value={dueDate}
        onChange={handleDateChange}
        ref={inputRef}
        className={style.searchBox}
      />
    </React.Fragment>
  );
};
InputWithLabel.propTypes = {
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
  children: PropTypes.object,
};
export default InputWithLabel;

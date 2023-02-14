import React from "react";
import style from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, [todoTitle]);
  return (
    <React.Fragment>
      <label htmlFor="todoTitle" className={style.label}>
        {children}
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
        placeholder="Enter text here..."
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

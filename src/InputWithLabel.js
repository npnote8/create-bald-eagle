import React from "react";
import style from "./InputWithLabel.module.css";

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
export default InputWithLabel;

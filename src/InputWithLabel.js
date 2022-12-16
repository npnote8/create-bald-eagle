import React from "react";
const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, [todoTitle]);
  return (
    <React.Fragment>
      <label htmlFor="todoTitle">{children}</label>
      &nbsp;
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </React.Fragment>
  );
};
export default InputWithLabel;

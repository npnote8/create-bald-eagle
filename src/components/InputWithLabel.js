import React from "react";
import style from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

const InputWithLabel = ({
  label,
  handleChange,
  type,
  id,
  name,
  value,
  placeholder,
  isFocused,
}) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [value, isFocused]);
  return (
    <React.Fragment>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      &nbsp;
      <input
        value={value}
        id={id}
        type={type}
        name={name}
        onChange={handleChange}
        ref={inputRef}
        className={style.searchBox}
        placeholder={placeholder}
        // autoFocus={isFocused}
      />
    </React.Fragment>
  );
};
InputWithLabel.propTypes = {
  label: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.object,
};
export default InputWithLabel;

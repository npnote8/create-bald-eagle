import React, { useState } from "react";
import style from "./ButtonSortTitle.module.css";
import { ReactComponent as ArrowBlack } from "./assets/arrow-black.svg";
import PropTypes from "prop-types";

const ButtonSortDate = ({ todoList, setTodoList }) => {
  const [order, setOrder] = useState(-1);
  const sortTodoList = (newOrder) => {
    return [...todoList].sort(function (one, two) {
      const a = one.fields.DueDate;
      const b = two.fields.DueDate;
      if (a < b) return newOrder;
      else if (a === b) return 0;
      else return -1 * newOrder;
    });
  };
  function handleClick() {
    const newOrder = -1 * order;
    setOrder(newOrder);
    const newTodoList = sortTodoList(newOrder);
    setTodoList(newTodoList);
  }
  return (
    <button onClick={handleClick} className={style.changeOrder}>
      {<ArrowBlack height="15px" width="15px" />}
    </button>
  );
};

ButtonSortDate.propTypes = {
  todoList: PropTypes.array,
  setTodoList: PropTypes.func,
};

export default ButtonSortDate;

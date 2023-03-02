import React, { useState } from "react";
import style from "./ButtonSortTitle.module.css";
import { ReactComponent as ArrowBlack } from "./assets/arrow-black.svg";
import PropTypes from "prop-types";
import moment from "moment";

const ButtonSortDays = ({ todoList, setTodoList }) => {
  const [order, setOrder] = useState(-1);
  const sortTodoList = (newOrder) => {
    return [...todoList].sort(function (one, two) {
      const a = moment(one.fields.DueDate).diff(moment(), "days");
      const b = moment(two.fields.DueDate).diff(moment(), "days");
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

ButtonSortDays.propTypes = {
  todoList: PropTypes.array,
  setTodoList: PropTypes.func,
};

export default ButtonSortDays;

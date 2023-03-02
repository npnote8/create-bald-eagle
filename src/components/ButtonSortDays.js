import React, { useState } from "react";
import style from "./ButtonSortDate.module.css";
import { ReactComponent as ArrowBlack } from "./assets/arrow-black.svg";
const ButtonSortDays = ({ todoList, setTodoList }) => {
  const [order, setOrder] = useState(-1);
  const sortTodoList = (newOrder) => {
    return [...todoList].sort(function (one, two) {
      const a = Math.ceil(
        (Date.parse(one.fields.DueDate) - Date.now()) / (1000 * 3600 * 24)
      );
      const b = Math.ceil(
        (Date.parse(two.fields.DueDate) - Date.now()) / (1000 * 3600 * 24)
      );
      console.log("a,b", a, b);
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
export default ButtonSortDays;

import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({ item, onRemoveTodo }) => {
  const todayDate = Date.now();
  const formatDate = (dt) => {
    const localDate = new Date(dt);
    console.log("localDate", localDate);
    const year = localDate.getFullYear();
    const month = localDate.getMonth() + 1;
    const day = localDate.getDate();
    const displayDate = `${month}/${day}/${year}`;

    return displayDate;
  };
  console.log(Date.parse(item.fields.DueDate));
  return (
    <>
      {/* <li className={style.ListItem}> */}
      <tr>
        <td> {item.fields.Title}</td>
        {/* <td>{item.fields.DueDate}</td> */}
        <td>{formatDate(item.fields.DueDate)}</td>
        <td>
          {Math.ceil(
            (Date.parse(item.fields.DueDate) - todayDate) / (1000 * 3600 * 24)
          )}
        </td>
        <td>
          <button
            type="button"
            className={style.buttonRemove}
            onClick={() => onRemoveTodo(item.id)}
          >
            Remove
          </button>
        </td>
        {/* &nbsp; */}
      </tr>
    </>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};
export default TodoListItem;

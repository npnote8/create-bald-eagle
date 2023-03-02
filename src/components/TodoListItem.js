import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";
import moment from "moment";

const TodoListItem = ({ item, onRemoveTodo, onImportantTodo }) => {
  const formatDate = (dt) => {
    const year = dt.substring(0, 4);
    const month = dt.substring(5, 7);
    const day = dt.substring(8, 10);
    const displayDate = `${month}/${day}/${year}`;

    return displayDate;
  };
  const handleImportantClick = () => {
    item.fields.Important = !item.fields.Important;
    onImportantTodo(item);
  };

  return (
    <>
      <tr>
        <td> {item.fields.Title}</td>
        <td>{formatDate(item.fields.DueDate)}</td>
        <td>{moment(item.fields.DueDate).diff(moment(), "days")}</td>
        <td>
          {item.fields.Important === true ? (
            <button
              type="button"
              onClick={handleImportantClick}
              className={style.buttonImportant}
              style={{ backgroundColor: "red" }}
            ></button>
          ) : (
            <button
              type="button"
              onClick={handleImportantClick}
              className={style.buttonImportant}
            ></button>
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
      </tr>
    </>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  onImportantTodo: PropTypes.func,
};
export default TodoListItem;

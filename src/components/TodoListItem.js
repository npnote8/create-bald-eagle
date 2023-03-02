import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";
import moment from "moment";

const TodoListItem = ({ item, onRemoveTodo, onImportantTodo }) => {
  console.log(moment("2023-02-28"));
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
      {/* <li className={style.ListItem}> */}
      <tr>
        <td> {item.fields.Title}</td>
        {/* <td>{item.fields.DueDate}</td> */}
        <td>{formatDate(item.fields.DueDate)}</td>
        <td>
          {Math.ceil(
            (Date.parse(item.fields.DueDate) - Date.now()) / (1000 * 3600 * 24)
          )}
        </td>
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
};
export default TodoListItem;

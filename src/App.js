import React, { Fragment, useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import style from "./App.module.css";

function App() {
  const [order, setOrder] = useState(-1);
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortTodoList = (newOrder) => {
    return [...todoList].sort(function (one, two) {
      const a = one.fields.Title;
      const b = two.fields.Title;
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

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setTodoList([...result.records]);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const deleteTodo = async (id) => {
    let response;
    try {
      response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
        }
      );
      return response.json();
    } catch (err) {
      console.log("err:", err);
    }
  };

  const removeTodo = (id) => {
    const filterestTodoList = todoList.filter((item) => item.id !== id);
    console.log("aaaaaa", filterestTodoList);
    deleteTodo(id).then(() => setTodoList(filterestTodoList));
  };

  const postTodo = async (newTodo) => {
    const payload = {
      records: [
        {
          fields: {
            Title: newTodo["title"],
            DueDate: newTodo["duedate"],
          },
        },
      ],
    };

    let response;
    try {
      response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
          body: JSON.stringify(payload),
        }
      );
      return response.json();
    } catch (err) {
      console.log("err:", err);
    }
  };

  const addTodo = (newTodo) => {
    console.log("addTodo", [...todoList, newTodo]);

    postTodo(newTodo).then((result) =>
      setTodoList([...todoList, ...result.records])
    );
  };
  const addDueDate = (newDueDate) => {
    console.log("addDate", [...todoList, newDueDate]);
    postTodo(newDueDate).then((result) =>
      setTodoList([...todoList, ...result.records.DueDate])
    );
  };

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="nav">
          <Link to="/" className={style.navItem}>
            Todo List
          </Link>
          <Link to="/outdated" className={style.navItem}>
            Outdated
          </Link>
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <div className={style.container}>
                  <h1>Todo List</h1>
                  <AddTodoForm onAddTodo={addTodo} addDueDate={addDueDate} />
                  <button onClick={handleClick} className={style.changeOrder}>
                    Sort by Title
                  </button>
                  {isLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                  )}
                </div>
              </Fragment>
            }
          />
          <Route path="/outdated" element={<h1>Outdated</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

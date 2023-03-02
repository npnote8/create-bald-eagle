import React, { Fragment, useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import style from "./App.module.css";
import TodoListOutdated from "./components/TodoListOutdated";

import Navbar from "./components/Navbar";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const putTodo = async (id, payload) => {
    let response;
    try {
      response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
        {
          method: "PUT",
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

  const updateTodo = (todo) => {
    console.log("updateTodo", todo);
    const todoClone = structuredClone(todo);
    delete todoClone.id;
    delete todoClone.createdTime;

    putTodo(todo.id, todoClone).then((todoItem) => {
      const newTodoList = todoList.map((obj) =>
        obj.id === todoItem.id ? todoItem : obj
      );
      setTodoList([...newTodoList]);
    });
  };
  const Homepage = () => {
    const navigate = useNavigate();

    function handleClick() {
      navigate("/todolist");
    }
    return (
      <div className={style.container}>
        <h2>This is the app to create Todo</h2>

        <button
          type="button"
          className={style.buttonStart}
          onClick={handleClick}
        >
          Start here
        </button>
      </div>
    );
  };

  return (
    <BrowserRouter>
      {/* <nav>
        <Link to="/" className={style.navItemLogo}>
          {<TickBlue height="40px" width="40px" />}
        </Link>
        <Link to="/todolist" className={style.navItem}>
          Todo List
        </Link>
        <Link to="/outdated" className={style.navItem}>
          Outdated
        </Link>
      </nav> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          exact
          path="/todolist"
          element={
            <Fragment>
              <div className={style.container}>
                <h1>Todo List</h1>
                <AddTodoForm onAddTodo={addTodo} />

                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <TodoList
                    todoList={todoList}
                    setTodoList={setTodoList}
                    onRemoveTodo={removeTodo}
                    onImportantTodo={updateTodo}
                  />
                )}
              </div>
            </Fragment>
          }
        />
        <Route
          path="/outdated"
          element={
            <Fragment>
              <div className={style.container}>
                <h1>Outdated Todo</h1>
                <TodoListOutdated
                  todoList={todoList}
                  onRemoveTodo={removeTodo}
                  onImportantTodo={updateTodo}
                />
              </div>
            </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

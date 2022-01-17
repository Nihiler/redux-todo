import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

const todoList = [
  { item: "dope", done: true, id: 651951489 },
  { item: "dope2", done: true, id: 551951489 },
  { item: "dope3", done: true, id: 151951489 },
];

function App() {
  return (
    <div className="App">
      <div className="app">
        <div className="app__container">
          <div className="app__todoContainer">
            {todoList.map((item) => (
              <TodoItem name={item.item} />
            ))}
          </div>
        </div>
        {/* todo list */}
        {/* done */}

        <Input />
      </div>
    </div>
  );
}

export default App;

//http://www.youtube.com/watch?v=tBigGpLRMtU

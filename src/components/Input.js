import React from "react";
import "./Input.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/TodoSlice";

export const Input = () => {

const [input, setInput]=useState('');
const dispatch = useDispatch ();

  const addTodo = () => {
    console.log(`Adding ${input}`);
    dispatch (saveTodo({
      item: input,
      done: false,
      id: Date.now(),
    }))
  };
  return (
    <div>
      <div className="input">
        <input type="text"  value={input} onChange={e=>setInput(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
};

export default Input;

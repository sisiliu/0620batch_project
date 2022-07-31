import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <TodoHeader header="Demo" />
      <TodoInput list={list} setList={setList} />
      <TodoList list={list} setList={setList} />
    </div>
  );
}

export default App;

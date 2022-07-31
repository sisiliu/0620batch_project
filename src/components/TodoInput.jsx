import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const textInput = useRef(null);

  const focusInput = () => {
    textInput.current.focus();
  };
  const addItem = (input) => {
    if (!input.trim()) {
      setInput("");
      return;
    }

    // setList([...list, input]);
    // console.log(input);
    addTodo(dispatch)(input);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        ref={textInput}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          addItem(input);
          focusInput();
        }}
      >
        Add
      </button>
    </div>
  );
};
export default TodoInput;

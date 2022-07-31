import { useState, useRef } from "react";

const TodoInput = ({ list, setList }) => {
  const [input, setInput] = useState("");
  const textInput = useRef(null);

  const focusInput = () => {
    textInput.current.focus();
  };
  const addItem = (input) => {
    if (!input.trim()) {
      setInput("");
      return;
    }

    setList([...list, input]);
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

import { useState } from "react";

const TodoItem = ({ item, list, setList, index }) => {
  const [completed, setCompleted] = useState(false);
  const del = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  return (
    <li>
      <span
        style={{ textDecoration: completed ? "line-through" : "none" }}
        onDoubleClick={() => {
          setCompleted(!completed);
        }}
      >
        {item}
      </span>
      <button
        onClick={() => {
          del(index);
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default TodoItem;

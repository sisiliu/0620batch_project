import { useDispatch } from "react-redux";
import { delTodo, modTodo } from "../actions";

const TodoItem = ({ content, isCompleted, index }) => {
  const dispatch = useDispatch();
  // const del = (index) => {
  // setList([...list.slice(0, index), ...list.slice(index + 1)]);

  // };

  return (
    <li>
      <span
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        onDoubleClick={() => modTodo(dispatch)(index)}
      >
        {content}
      </span>
      <button
        onClick={() => {
          delTodo(dispatch)(index);
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default TodoItem;

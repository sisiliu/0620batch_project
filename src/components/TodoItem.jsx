import { useDispatch } from "react-redux";
import { delTodo, modTodo } from "../actions";
import "../styles/todo_item.css";
const TodoItem = ({ content, isCompleted, index }) => {
  const dispatch = useDispatch();
  // const del = (index) => {
  // setList([...list.slice(0, index), ...list.slice(index + 1)]);

  // };

  return (
    <li className="todo_item">
      <span
        className={isCompleted ? "is_completed" : "is_not_completed"}
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

import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const list = useSelector((state) => {
    return state;
  });
  // console.log(list);
  const userList = list.map(({ content, isCompleted }, index) => {
    // console.log(content);
    return (
      <TodoItem
        key={`${index}-${content}`}
        content={content}
        isCompleted={isCompleted}
        index={index}
      />
    );
  });
  return <ul>{userList}</ul>;
};
export default TodoList;

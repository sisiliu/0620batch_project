import TodoItem from "./TodoItem";

const TodoList = ({ list, setList }) => {
  const userList = list.map((item, index) => {
    return (
      <TodoItem
        key={`${index}-${item}`}
        item={item}
        list={list}
        setList={setList}
        index={index}
      />
    );
  });
  return <ul>{userList}</ul>;
};
export default TodoList;

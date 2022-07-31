import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  // const [list, setList] = useState([]);
  return (
    <div className="App">
      <TodoHeader header="Demo" />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;

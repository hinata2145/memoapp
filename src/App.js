import { useState } from "react";
import "./App.css";
import { InputForm } from "./components/InputForm";
import { TodoList } from "./components/TodoList";
import { Title } from "./components/title";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;

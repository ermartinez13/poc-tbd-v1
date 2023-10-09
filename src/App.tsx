import "./App.css";
import { MicroTaskForm } from "./components/MicroTaskForm";
import { MicroTaskList } from "./components/MicroTaskList";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Timer } from "./components/Timer";
import { microTasks, tasks } from "./constants";

function App() {
  return (
    <>
      <TaskList tasks={tasks} />
      <MicroTaskList microTasks={microTasks} />
      <TaskForm />
      <MicroTaskForm />
      <Timer />
    </>
  );
}

export default App;

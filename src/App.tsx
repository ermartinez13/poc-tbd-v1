import { useState } from "react";
import "./App.css";
import { MicroTaskForm } from "./components/MicroTaskForm";
import { MicroTaskList } from "./components/MicroTaskList";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Timer } from "./components/Timer";
import {
  microTasks as initialMicroTasks,
  tasks as initialTasks,
} from "./constants";
import { Status } from "./models";

function App() {
  const [microTasks, setMicroTasks] = useState(initialMicroTasks);
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [selectedMicroTaskId, setSelectedMicroTaskId] = useState<string | null>(
    null
  );

  function selectTask(id: string) {
    setSelectedTaskId(id);
    setSelectedMicroTaskId(null);
  }

  function selectMicroTask(id: string) {
    setSelectedMicroTaskId(id);
  }

  function createTask(name: string, microBudget: number) {
    const newTask = {
      id: Date.now().toString(),
      name,
      defaultMicroBudget: microBudget,
      timeSpent: 0,
      timeBudget: microBudget,
      status: Status.Active,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function createMicroTask(name: string, timeBudget: number, parentId: string) {
    const newMicroTask = {
      id: Date.now().toString(),
      taskId: parentId,
      name,
      timeSpent: 0,
      timeBudget,
      status: Status.Active,
    };
    setMicroTasks((prevMicroTasks) => [...prevMicroTasks, newMicroTask]);
  }

  return (
    <>
      <div>
        <div>
          <TaskList tasks={tasks} selectTask={selectTask} />
          <TaskForm createTask={createTask} />
        </div>
        {selectedTaskId ? (
          <div>
            <MicroTaskList
              microTasks={microTasks.filter(
                (microTask) => microTask.taskId === selectedTaskId
              )}
              selectMicroTask={selectMicroTask}
            />
            <MicroTaskForm
              selectedTaskId={selectedTaskId}
              createMicroTask={createMicroTask}
            />
          </div>
        ) : null}
      </div>

      {selectedMicroTaskId ? <Timer /> : null}
    </>
  );
}

export default App;

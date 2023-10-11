import { useState } from "react";
import "./App.css";
import { MicrotaskForm } from "./components/MicrotaskForm";
import { MicrotaskList } from "./components/MicrotaskList";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { Timer } from "./components/Timer";
import {
  microtasks as initialMicrotasks,
  tasks as initialTasks,
} from "./constants";
import { MicrotaskUpdates, Status } from "./models";
import { Graph } from "./components/Graph";
import { TimerShell } from "./components/TimerShell";

function App() {
  const [microtasks, setMicrotasks] = useState(initialMicrotasks);
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [selectedMicrotaskId, setSelectedMicrotaskId] = useState<string | null>(
    null
  );

  const selectedMicrotask = microtasks.find(
    (microtask) => microtask.id === selectedMicrotaskId
  );
  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  function selectTask(id: string) {
    setSelectedTaskId(id);
    setSelectedMicrotaskId(null);
  }

  function selectMicrotask(id: string) {
    setSelectedMicrotaskId(id);
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

  function createMicrotask(name: string, timeBudget: number, parentId: string) {
    const newMicrotask = {
      id: Date.now().toString(),
      taskId: parentId,
      name,
      timeSpent: 0,
      timeBudget,
      status: Status.Active,
    };
    setMicrotasks((prevMicrotasks) => [...prevMicrotasks, newMicrotask]);
  }

  function updateMicrotask(id: string, updates: MicrotaskUpdates) {
    setMicrotasks((prevMicrotasks) =>
      prevMicrotasks.map((microtask) =>
        microtask.id === id ? { ...microtask, ...updates } : microtask
      )
    );
  }

  return (
    <>
      <div className="container">
        <div className="task-container">
          <TaskList
            tasks={tasks}
            selectTask={selectTask}
            microtasks={microtasks}
          />
          <TaskForm createTask={createTask} />
        </div>
        {selectedTask ? (
          <div className="microtask-container">
            <MicrotaskList
              microtasks={microtasks.filter(
                (microtask) => microtask.taskId === selectedTaskId
              )}
              selectMicrotask={selectMicrotask}
            />
            <MicrotaskForm
              selectedTask={selectedTask}
              createMicrotask={createMicrotask}
            />
          </div>
        ) : null}
      </div>
      <hr className="divider" />
      {selectedTask && selectedMicrotask ? (
        <Timer
          key={selectedMicrotask.id}
          selectedMicrotask={selectedMicrotask}
          selectedTask={selectedTask}
          updateMicrotask={updateMicrotask}
        />
      ) : (
        <TimerShell />
      )}
      <hr className="divider" />
      <Graph tasks={tasks} microtasks={microtasks} />
    </>
  );
}

export default App;

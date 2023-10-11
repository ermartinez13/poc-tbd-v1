import React, { useState } from 'react';
import { Task, Microtask } from './models';
import TaskList from './TaskList';
import MicrotaskList from './MicrotaskList';
import Timer from './Timer';
import Graph from './Graph';
import TaskForm from './TaskForm';
import MicrotaskForm from './MicrotaskForm';
import { initialTasks, initialMicrotasks } from './constants';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [microtasks, setMicrotasks] = useState<Microtask[]>(initialMicrotasks);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const [selectedMicrotaskId, setSelectedMicrotaskId] = useState<number | null>(null);

  const createTask = (task: Task) => {
    setTasks([...tasks, task]);
    // TODO: Dispatch TASK_CREATED message
  };

  const createMicrotask = (microtask: Microtask) => {
    setMicrotasks([...microtasks, microtask]);
    // TODO: Dispatch MICROTASK_CREATED message
  };

  const selectTask = (taskId: number) => {
    setSelectedTaskId(taskId);
    // TODO: Dispatch TASK_SELECTED message
  };

  const selectMicrotask = (microtaskId: number) => {
    setSelectedMicrotaskId(microtaskId);
    // TODO: Dispatch MICROTASK_SELECTED message
  };

  return (
    <div className="App">
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} selectTask={selectTask} />
      <MicrotaskForm createMicrotask={createMicrotask} />
      <MicrotaskList microtasks={microtasks} selectMicrotask={selectMicrotask} />
      <Timer selectedMicrotaskId={selectedMicrotaskId} />
      <Graph tasks={tasks} />
    </div>
  );
};

export default App;

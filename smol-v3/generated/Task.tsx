import React from 'react';
import { Task as TaskModel } from './models.ts';

interface TaskProps {
  task: TaskModel;
  selectTask: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, selectTask }) => {
  const handleClick = () => {
    selectTask(task.id);
  };

  return (
    <div id={`task-${task.id}`} onClick={handleClick}>
      <h2>{task.name}</h2>
      <p>Status: {task.status}</p>
      <p>Default Microtask Budget: {task.defaultMicroBudget}</p>
    </div>
  );
};

export default Task;

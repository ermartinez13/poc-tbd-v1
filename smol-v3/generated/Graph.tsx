// Importing necessary libraries and components
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Task, Microtask } from './models';

type GraphProps = {
  tasks: Task[];
  microtasks: Microtask[];
}

// Graph component to display a bar chart of time spent and budgeted for each task
const Graph: React.FC<GraphProps> = ({ tasks, microtasks }) => {
  
  // Function to calculate time spent on a task
  const calculateTimeSpent = (taskId: number) => {
    return microtasks
      .filter(microtask => microtask.taskId === taskId)
      .reduce((total, microtask) => total + microtask.timeSpent, 0);
  }

  // Function to calculate time budgeted for a task
  const calculateTimeBudget = (taskId: number) => {
    return microtasks
      .filter(microtask => microtask.taskId === taskId)
      .reduce((total, microtask) => total + microtask.timeBudget, 0);
  }

  // Preparing data for the bar chart
  const data = {
    labels: tasks.map(task => task.name),
    datasets: [
      {
        label: 'Time Spent',
        data: tasks.map(task => calculateTimeSpent(task.id)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Time Budgeted',
        data: tasks.map(task => calculateTimeBudget(task.id)),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }
    ]
  };

  // Rendering the bar chart
  return (
    <div id="graph">
      <Bar data={data} />
    </div>
  );
}

export default Graph;
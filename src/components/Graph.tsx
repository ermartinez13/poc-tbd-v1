import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Microtask, Task } from "../models";

interface Props {
  tasks: Task[];
  microtasks: Microtask[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Graph({ tasks, microtasks }: Props) {
  const data = {
    labels: tasks.map((task) => task.name),
    datasets: [
      {
        label: "Time Spent",
        data: tasks.map((task) => {
          const childMicrotasks = microtasks.filter(
            (microtask) => microtask.taskId === task.id
          );
          return childMicrotasks.reduce((acc, cur) => acc + cur.timeSpent, 0);
        }),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Time Budget",
        data: tasks.map((task) => {
          const childMicrotasks = microtasks.filter(
            (microtask) => microtask.taskId === task.id
          );
          return childMicrotasks.reduce((acc, cur) => acc + cur.timeBudget, 0);
        }),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Task Time Spent vs Time Budget",
      },
    },
  };

  return (
    <div id="bar-graph">
      <Bar data={data} options={options} />
    </div>
  );
}

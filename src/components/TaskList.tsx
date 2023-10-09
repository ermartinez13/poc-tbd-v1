import { Task as TaskI } from "../models";
import { Task } from "./Task";

interface Props {
  tasks: TaskI[];
  selectTask: (id: string) => void;
}

export function TaskList({ tasks, selectTask }: Props) {
  function handleItemClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) return;
    // obtain task id
    if (e.target instanceof HTMLElement) {
      const taskId = e.target.closest<HTMLElement>("[data-id]")?.dataset.id;
      if (taskId) selectTask(taskId);
    }
  }

  return (
    <div onClick={handleItemClick}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

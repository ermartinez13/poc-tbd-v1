import { Task as TaskI } from "../models";
import { Task } from "./Task";

interface Props {
  tasks: TaskI[];
}

export function TaskList({ tasks }: Props) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

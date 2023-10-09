import { Task as TaskI } from "../models";

interface Props {
  task: TaskI;
}
export function Task({ task }: Props) {
  return (
    <div data-id={task.id} className="row">
      <span>{task.name}</span>
      <span>{task.id}</span>
      <span>{task.timeSpent}</span>
      <span>{task.timeBudget}</span>
      <span>{task.status}</span>
    </div>
  );
}

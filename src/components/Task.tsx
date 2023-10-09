import { Microtask, Task as TaskI } from "../models";

interface Props {
  task: TaskI;
  childMicrotasks: Microtask[];
}
export function Task({ task, childMicrotasks }: Props) {
  const timeSpent = childMicrotasks.reduce(
    (acc, cur) => acc + cur.timeSpent,
    0
  );
  const timeBudget = childMicrotasks.reduce(
    (acc, cur) => acc + cur.timeBudget,
    0
  );

  return (
    <div data-id={task.id} className="row">
      <span>{task.name}</span>
      <span>{task.id}</span>
      <span>{timeSpent}</span>
      <span>{timeBudget}</span>
      <span>{task.status}</span>
    </div>
  );
}

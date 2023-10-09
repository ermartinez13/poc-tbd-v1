import { MicroTask as MicroTaskI } from "../models";

interface Props {
  microTask: MicroTaskI;
}

export function MicroTask({ microTask }: Props) {
  return (
    <div>
      <span>{microTask.name}</span>
      <span>{microTask.id}</span>
      <span>{microTask.timeSpent}</span>
      <span>{microTask.timeBudget}</span>
      <span>{microTask.status}</span>
    </div>
  );
}

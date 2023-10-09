import { Microtask as MicroTaskI } from "../models";

interface Props {
  microTask: MicroTaskI;
}

export function Microtask({ microTask }: Props) {
  return (
    <div data-id={microTask.id} className="row">
      <span>{microTask.name}</span>
      <span>{microTask.id}</span>
      <span>{microTask.timeSpent}</span>
      <span>{microTask.timeBudget}</span>
      <span>{microTask.status}</span>
    </div>
  );
}

import { Microtask as MicroTaskI } from "../models";
import { Microtask } from "./MicroTask";

interface Props {
  microtasks: MicroTaskI[];
  selectMicrotask: (id: string) => void;
}

export function MicrotaskList({
  microtasks: microTasks,
  selectMicrotask: selectMicroTask,
}: Props) {
  function handleItemClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) return;
    if (e.target instanceof HTMLElement) {
      const microTaskId =
        e.target.closest<HTMLElement>("[data-id]")?.dataset.id;
      if (microTaskId) selectMicroTask(microTaskId);
    }
  }
  return (
    <div onClick={handleItemClick} className="microtask-list">
      <p style={{ margin: 0 }}>Micro Tasks</p>
      <div className="row">
        <span>name</span>
        <span>id</span>
        <span>timeSpent</span>
        <span>timeBudget</span>
        <span>status</span>
      </div>
      {microTasks.map((microTask) => (
        <Microtask key={microTask.id} microTask={microTask} />
      ))}
    </div>
  );
}

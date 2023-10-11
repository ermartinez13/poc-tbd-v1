import { Microtask as MicrotaskI } from "../models";
import { Microtask } from "./Microtask";

interface Props {
  microtasks: MicrotaskI[];
  selectMicrotask: (id: string) => void;
}

export function MicrotaskList({
  microtasks: microTasks,
  selectMicrotask: selectMicrotask,
}: Props) {
  function handleItemClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) return;
    if (e.target instanceof HTMLElement) {
      const microTaskId =
        e.target.closest<HTMLElement>("[data-id]")?.dataset.id;
      if (microTaskId) selectMicrotask(microTaskId);
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

import { MicroTask as MicroTaskI } from "../models";
import { MicroTask } from "./MicroTask";

interface Props {
  microTasks: MicroTaskI[];
  selectMicroTask: (id: string) => void;
}

export function MicroTaskList({ microTasks, selectMicroTask }: Props) {
  function handleItemClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) return;
    if (e.target instanceof HTMLElement) {
      const microTaskId =
        e.target.closest<HTMLElement>("[data-id]")?.dataset.id;
      if (microTaskId) selectMicroTask(microTaskId);
    }
  }
  return (
    <div onClick={handleItemClick}>
      {microTasks.map((microTask) => (
        <MicroTask key={microTask.id} microTask={microTask} />
      ))}
    </div>
  );
}

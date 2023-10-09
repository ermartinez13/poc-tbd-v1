import { MicroTask as MicroTaskI } from "../models";
import { MicroTask } from "./MicroTask";

interface Props {
  microTasks: MicroTaskI[];
}

export function MicroTaskList({ microTasks }: Props) {
  return (
    <div>
      {microTasks.map((microTask) => (
        <MicroTask key={microTask.id} microTask={microTask} />
      ))}
    </div>
  );
}

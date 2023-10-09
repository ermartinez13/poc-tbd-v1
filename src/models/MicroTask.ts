import { Status } from ".";

export interface MicroTask {
  id: string;
  name: string;
  taskId: string;
  timeSpent: number;
  timeBudget: number;
  status: Status;
}

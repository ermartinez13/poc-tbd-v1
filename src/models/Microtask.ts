import { Status } from ".";

export interface Microtask {
  id: string;
  name: string;
  taskId: string;
  timeSpent: number;
  timeBudget: number;
  status: Status;
}

export type MicrotaskUpdates = Partial<
  Pick<Microtask, "timeSpent" | "timeBudget" | "status">
>;

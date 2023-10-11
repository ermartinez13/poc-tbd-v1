import { Status } from ".";

export interface Task {
  id: string;
  name: string;
  defaultMicroBudget: number;
  status: Status;
}

import { Task, Status, Microtask } from "../models";

export const tasks: Task[] = [
  {
    id: "1",
    name: "Task 1",
    defaultMicroBudget: 5,
    timeSpent: 0,
    timeBudget: 0,
    status: Status.Active,
  },
  {
    id: "2",
    name: "Task 2",
    defaultMicroBudget: 5,
    timeSpent: 0,
    timeBudget: 0,
    status: Status.Active,
  },
  {
    id: "3",
    name: "Task 3",
    defaultMicroBudget: 5,
    timeSpent: 0,
    timeBudget: 0,
    status: Status.Active,
  },
  {
    id: "4",
    name: "Task 4",
    defaultMicroBudget: 10,
    timeSpent: 0,
    timeBudget: 0,
    status: Status.Active,
  },
];

export const microtasks: Microtask[] = [
  {
    id: "1",
    name: "Micro Task 1",
    taskId: "1",
    timeSpent: 0,
    timeBudget: 5,
    status: Status.Active,
  },
  {
    id: "2",
    name: "Micro Task 2",
    taskId: "1",
    timeSpent: 0,
    timeBudget: 5,
    status: Status.Active,
  },
];

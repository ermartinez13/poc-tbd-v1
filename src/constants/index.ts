import { Task, Status, Microtask } from "../models";

export const tasks: Task[] = [
  {
    id: "1",
    name: "Task 1",
    defaultMicroBudget: 5,
    status: Status.Active,
  },
  {
    id: "2",
    name: "Task 2",
    defaultMicroBudget: 15,
    status: Status.Active,
  },
  {
    id: "3",
    name: "Task 3",
    defaultMicroBudget: 10,
    status: Status.Active,
  },
  {
    id: "4",
    name: "Task 4",
    defaultMicroBudget: 20,
    status: Status.Active,
  },
];

export const microtasks: Microtask[] = [
  {
    id: "1",
    name: "Micro Task 1",
    taskId: "1",
    timeSpent: 5,
    timeBudget: 5,
    status: Status.Done,
  },
  {
    id: "2",
    name: "Micro Task 2",
    taskId: "1",
    timeSpent: 0,
    timeBudget: 5,
    status: Status.Active,
  },
  {
    id: "3",
    name: "Micro Task 3",
    taskId: "2",
    timeSpent: 5,
    timeBudget: 15,
    status: Status.Done,
  },
  {
    id: "4",
    name: "Micro Task 4",
    taskId: "3",
    timeSpent: 0,
    timeBudget: 10,
    status: Status.Active,
  },
];

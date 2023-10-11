// TypeScript interfaces and enums used in the application.

// Enum for task and microtask status
export enum Status {
    Done = 'Done',
    Active = 'Active'
}

// Interface for Task
export interface Task {
    id: number;
    name: string;
    defaultMicroBudget: number;
    status: Status;
}

// Interface for Microtask
export interface Microtask {
    id: number;
    name: string;
    taskId: number;
    timeSpent: number;
    timeBudget: number;
    status: Status;
}
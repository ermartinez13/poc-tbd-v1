// Import the Task and Microtask interfaces from the models.ts file
import { Task, Microtask } from './models';

// Define the initial state for tasks and microtasks
export const initialTasks: Task[] = [
    {
        id: 1,
        name: 'Task 1',
        defaultMicroBudget: 30,
        status: 'Active'
    },
    {
        id: 2,
        name: 'Task 2',
        defaultMicroBudget: 60,
        status: 'Active'
    },
    {
        id: 3,
        name: 'Task 3',
        defaultMicroBudget: 45,
        status: 'Active'
    }
];

export const initialMicrotasks: Microtask[] = [
    {
        id: 1,
        name: 'Microtask 1',
        taskId: 1,
        timeSpent: 0,
        timeBudget: 30,
        status: 'Active'
    },
    {
        id: 2,
        name: 'Microtask 2',
        taskId: 1,
        timeSpent: 0,
        timeBudget: 30,
        status: 'Active'
    },
    {
        id: 3,
        name: 'Microtask 3',
        taskId: 2,
        timeSpent: 0,
        timeBudget: 60,
        status: 'Active'
    }
];

# Plan

## Files

```yaml
- App.tsx:
    - exports: App
    - description: The main application component, containing the overall layout and state management.

- main.tsx:
    - exports: N/A
    - description: The entry point of the application which renders the App component.

- MicrotaskList.tsx:
    - exports: MicrotaskList
    - description: A component that displays a list of microtasks.

- TimerShell.tsx:
    - exports: TimerShell
    - description: A component that displays a timer interface with disabled controls.

- Task.tsx:
    - exports: Task
    - description: A component that displays a single task.

- TaskList.tsx:
    - exports: TaskList
    - description: A component that displays a list of tasks.

- App.css:
    - exports: N/A
    - description: The CSS styles for the application.

- Graph.tsx:
    - exports: Graph
    - description: A component that displays a bar graph of time spent and budgeted for each task.

- Microtask.tsx:
    - exports: Microtask
    - description: A component that displays a single microtask.

- Timer.tsx:
    - exports: Timer
    - description: A component that displays a timer interface with active controls.

- MicrotaskForm.tsx:
    - exports: MicrotaskForm
    - description: A form for creating new microtasks.

- TaskForm.tsx:
    - exports: TaskForm
    - description: A form for creating new tasks.

- models.ts:
    - exports: Task, Microtask
    - description: TypeScript interfaces and enums used in the application.

- constants.ts:
    - exports: initialTasks, initialMicrotasks
    - description: Initial data for tasks and microtasks.
```

## Data Schemas

- `Task`: 
    - `id: number`: The task id
    - `name: string`: The task name
    - `defaultMicroBudget: number`: The default budgeted time for microtasks
    - `status: 'Done' | 'Active'`: The status of the task

- `Microtask`: 
    - `id: number`: The microtask id
    - `name: string`: The microtask name
    - `taskId: number`: The id of the parent task
    - `timeSpent: number`: The time spent on the microtask
    - `timeBudget: number`: The budgeted time for the microtask
    - `status: 'Done' | 'Active'`: The status of the microtask

## DOM Elements

- `task-list`: The div containing the list of tasks
- `microtask-list`: The div containing the list of microtasks
- `timer`: The div containing the timer
- `graph`: The div containing the graph

## Function Names

- `createTask`: Function to create a new task
- `createMicrotask`: Function to create a new microtask
- `selectTask`: Function to select a task and display its microtasks
- `selectMicrotask`: Function to select a microtask and start the timer
- `startTimer`: Function to start the timer
- `stopTimer`: Function to stop the timer
- `resetTimer`: Function to reset the timer
- `extendTimer`: Function to extend the timer
- `markAsDone`: Function to mark a microtask as done
- `calculateTimeSpent`: Function to calculate the total time spent on a task
- `calculateTimeBudget`: Function to calculate the total time budgeted for a task

## Messages

- `TASK_CREATED`: Message indicating a new task has been created
- `MICROTASK_CREATED`: Message indicating a new microtask has been created
- `TASK_SELECTED`: Message indicating a task has been selected
- `MICROTASK_SELECTED`: Message indicating a microtask has been selected
- `TIMER_STARTED`: Message indicating the timer has started
- `TIMER_STOPPED`: Message indicating the timer has stopped
- `TIMER_RESET`: Message indicating the timer has been reset
- `TIMER_EXTENDED`: Message indicating the timer has been extended
- `MICROTASK_DONE`: Message indicating a microtask has been marked as done
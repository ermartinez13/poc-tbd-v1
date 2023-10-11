# Program Description

This program is a task management application built using React. It allows users to create tasks and microtasks, track time spent on each microtask, and visualize the time spent and
budgeted for each task.

## File Structure

The program consists of the following files:

- `App.tsx`: The main application component.
- `main.tsx`: The entry point of the application.
- `MicrotaskList.tsx`: A component that displays a list of microtasks.
- `TimerShell.tsx`: A component that displays a timer interface with disabled controls.
- `Task.tsx`: A component that displays a single task.
- `TaskList.tsx`: A component that displays a list of tasks.
- `App.css`: The CSS styles for the application.
- `Graph.tsx`: A component that displays a bar graph of time spent and budgeted for each task.
- `Microtask.tsx`: A component that displays a single microtask.
- `Timer.tsx`: A component that displays a timer interface with active controls.
- `MicrotaskForm.tsx`: A form for creating new microtasks.
- `TaskForm.tsx`: A form for creating new tasks.
- `models.ts`: TypeScript interfaces and enums used in the application.
- `constants.ts`: Initial data for tasks and microtasks.

## Data Structures

The application uses two main data structures: `Task` and `Microtask`. Both are defined in `models.ts` and have the following properties:

- `Task`: `id`, `name`, `defaultMicroBudget`, `status`.
- `Microtask`: `id`, `name`, `taskId`, `timeSpent`, `timeBudget`, `status`.

The `status` property in both structures is an enum with two possible values: `Done` and `Active`.

## Functionality

The application allows users to:

- Create new tasks and microtasks.
- Select a task or microtask to view its details.
- Start, stop, reset, extend, and mark a microtask as done.
- View a list of tasks and microtasks.
- View a bar graph of time spent and budgeted for each task.

## User Interface

The user interface consists of:

- A list of tasks on the left side of the screen.
- A list of microtasks for the selected task on the right side of the screen.
- A timer interface below the lists, which displays the time spent on the selected microtask and controls to start, stop, reset, extend, and mark the microtask as done.
- A bar graph at the bottom of the screen, which displays the time spent and budgeted for each task.

## CSS Styles

The CSS styles for the application are defined in `App.css`. They include styles for the root element, task and microtask lists, rows, task and microtask containers, timer, button group,
and bar graph.

## Error Handling

The application does not include any specific error handling functionality. However, it does prevent users from interacting with the timer controls when a microtask is marked as done.

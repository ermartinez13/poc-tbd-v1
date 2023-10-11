import React, { useState } from 'react';

// Define the TaskForm component
const TaskForm = ({ createTask }) => {
  // Define the initial state of the form
  const [name, setName] = useState('');
  const [defaultMicroBudget, setDefaultMicroBudget] = useState(0);

  // Define the function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Call the createTask function with the form data
    createTask({ name, defaultMicroBudget });

    // Reset the form fields
    setName('');
    setDefaultMicroBudget(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-name">Task Name:</label>
      <input
        id="task-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="default-micro-budget">Default Microtask Budget:</label>
      <input
        id="default-micro-budget"
        type="number"
        value={defaultMicroBudget}
        onChange={(e) => setDefaultMicroBudget(Number(e.target.value))}
      />

      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;

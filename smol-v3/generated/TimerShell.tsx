import React from 'react';

// TimerShell.tsx
// This component displays a timer interface with disabled controls.
// It is meant to show the timer when no microtask is selected or if the selected microtask is marked as done.

const TimerShell: React.FC = () => {
  return (
    <div id="timer-shell">
      <h2>Timer</h2>
      <div id="timer-display">
        00:00:00
      </div>
      <div id="timer-controls">
        <button disabled>Start</button>
        <button disabled>Stop</button>
        <button disabled>Reset</button>
        <button disabled>Extend</button>
        <button disabled>Mark as Done</button>
      </div>
    </div>
  );
}

export default TimerShell;
import React, { useState, useEffect } from 'react';

// Define the TimerProps interface
interface TimerProps {
  timeSpent: number;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  extendTimer: () => void;
  markAsDone: () => void;
}

// Timer component
const Timer: React.FC<TimerProps> = ({ timeSpent, startTimer, stopTimer, resetTimer, extendTimer, markAsDone }) => {
  const [seconds, setSeconds] = useState(timeSpent);

  // Effect to update timer value
  useEffect(() => {
    setSeconds(timeSpent);
  }, [timeSpent]);

  // Format time display
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div id="timer">
      <h2>Time Spent: {formatTime(seconds)}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={extendTimer}>Extend</button>
      <button onClick={markAsDone}>Done</button>
    </div>
  );
};

export default Timer;

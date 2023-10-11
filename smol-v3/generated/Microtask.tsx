import React from 'react';
import { Microtask as MicrotaskType } from './models';

// Component props structure
interface MicrotaskProps {
  microtask: MicrotaskType;
}

// Microtask component
const Microtask: React.FC<MicrotaskProps> = ({ microtask }) => {
  return (
    <div id={`microtask-${microtask.id}`}>
      <h3>{microtask.name}</h3>
      <p>Status: {microtask.status}</p>
      <p>Time Spent: {microtask.timeSpent}</p>
      <p>Time Budget: {microtask.timeBudget}</p>
    </div>
  );
};

export default Microtask;

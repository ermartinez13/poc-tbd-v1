import { useEffect, useState } from "react";
import { Microtask, MicrotaskUpdates, Status, Task } from "../models";

interface Props {
  selectedMicrotask: Microtask;
  selectedTask: Task;
  updateMicrotask: (id: string, updates: MicrotaskUpdates) => void;
}

export function Timer({
  selectedMicrotask: selectedMicrotask,
  updateMicrotask: updateMicrotask,
  selectedTask,
}: Props) {
  const [timeElapsed, setTimeElapsed] = useState(selectedMicrotask.timeSpent);
  const [isActive, setIsActive] = useState(false);

  function handleStop() {
    setIsActive(false);
    updateMicrotask(selectedMicrotask.id, { timeSpent: timeElapsed });
  }

  function handleExtend() {
    updateMicrotask(selectedMicrotask.id, {
      timeBudget:
        selectedMicrotask.timeBudget + selectedTask.defaultMicroBudget,
    });
  }

  function handleDone() {
    updateMicrotask(selectedMicrotask.id, { status: Status.Done });
  }

  useEffect(() => {
    if (isActive) {
      if (timeElapsed >= selectedMicrotask.timeBudget) {
        handleStop();
        handleDone();
      } else {
        const id = setInterval(() => {
          setTimeElapsed((timeElapsed) => timeElapsed + 1);
        }, 1000);

        return () => {
          clearInterval(id);
        };
      }
    }
  }, [isActive, timeElapsed]);

  return (
    <div className="timer">
      <fieldset
        disabled={selectedMicrotask.status === Status.Done}
        className="btn-group"
      >
        <button disabled={isActive === true} onClick={() => setIsActive(true)}>
          Start
        </button>
        <button disabled={isActive === false} onClick={handleStop}>
          Stop
        </button>
        <button onClick={() => setTimeElapsed(0)}>Reset</button>
        <button onClick={handleExtend}>Extend</button>
        <button disabled={isActive === true} onClick={handleDone}>
          Done
        </button>
      </fieldset>
      <span className="time">
        {Math.floor(timeElapsed / 60)}:{timeElapsed % 60}
      </span>
    </div>
  );
}

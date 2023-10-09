import { useEffect, useState } from "react";
import { Microtask, MicrotaskUpdates, Status, Task } from "../models";

interface Props {
  selectedMicrotask: Microtask;
  selectedTask: Task;
  updateMicrotask: (id: string, updates: MicrotaskUpdates) => void;
}

export function Timer({
  selectedMicrotask: selectedMicroTask,
  updateMicrotask: updateMicroTask,
  selectedTask,
}: Props) {
  const [timeElapsed, setTimeElapsed] = useState(selectedMicroTask.timeSpent);
  const [isActive, setIsActive] = useState(false);

  function handleStop() {
    setIsActive(false);
    updateMicroTask(selectedMicroTask.id, { timeSpent: timeElapsed });
  }

  function handleExtend() {
    updateMicroTask(selectedMicroTask.id, {
      timeBudget:
        selectedMicroTask.timeBudget + selectedTask.defaultMicroBudget,
    });
  }

  function handleDone() {
    updateMicroTask(selectedMicroTask.id, { status: Status.Done });
  }

  useEffect(() => {
    if (isActive) {
      if (timeElapsed >= selectedMicroTask.timeBudget) {
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
        disabled={selectedMicroTask.status === Status.Done}
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

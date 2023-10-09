import { useState } from "react";
import { Task } from "../models";

interface Props {
  selectedTask: Task;
  createMicrotask: (name: string, timeBudget: number, parentId: string) => void;
}

export function MicrotaskForm({ createMicrotask, selectedTask }: Props) {
  const [name, setName] = useState("");
  const [timeBudget, setTimeBudget] = useState(selectedTask.defaultMicroBudget);
  const [prevTask, setPrevTask] = useState(selectedTask);

  /**
   * according to react docs, approach below is preffered over using an effect
   * because useEffect will trigger a re-render after the commit phase
   * whereas this approach triggers a re-render immediately after the current render phase
   */
  if (prevTask.id !== selectedTask.id) {
    setPrevTask(selectedTask);
    setTimeBudget(selectedTask.defaultMicroBudget);
  }

  function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createMicrotask(name, timeBudget, selectedTask.id);
    setName("");
    setTimeBudget(0);
  }

  return (
    <form onSubmit={handleSubmission} className="row">
      <label>
        Micro Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Time Budget
        <input
          type="number"
          value={timeBudget}
          onChange={(e) => setTimeBudget(Number(e.target.value))}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

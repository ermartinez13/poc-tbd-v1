import { useState } from "react";

interface Props {
  selectedTaskId: string;
  createMicroTask: (name: string, timeBudget: number, parentId: string) => void;
}

export function MicroTaskForm({ createMicroTask, selectedTaskId }: Props) {
  const [name, setName] = useState("");
  const [timeBudget, setTimeBudget] = useState(0);

  function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createMicroTask(name, timeBudget, selectedTaskId);
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

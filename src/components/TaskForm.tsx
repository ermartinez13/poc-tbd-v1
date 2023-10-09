import { useState } from "react";

interface Props {
  createTask: (name: string, microBudget: number) => void;
}

export function TaskForm({ createTask }: Props) {
  const [name, setName] = useState("");
  const [microTimeBudget, setMicroTimeBudget] = useState(0);

  function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTask(name, microTimeBudget);
    setName("");
    setMicroTimeBudget(0);
  }

  return (
    <form onSubmit={handleSubmission} className="row">
      <label>
        Task Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Default Micro Budget
        <input
          type="number"
          value={microTimeBudget}
          onChange={(e) => setMicroTimeBudget(Number(e.target.value))}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

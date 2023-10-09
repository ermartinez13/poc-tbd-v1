export function TaskForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        Task Name
        <input type="text" />
      </label>
      <label>
        Default Micro Budget
        <input type="number" />
      </label>
    </form>
  );
}

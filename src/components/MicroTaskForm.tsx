export function MicroTaskForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        Micro Name
        <input type="text" />
      </label>
      <label>
        Time Budget
        <input type="number" />
      </label>
    </form>
  );
}

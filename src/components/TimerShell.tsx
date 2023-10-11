export function TimerShell() {
  return (
    <div className="timer">
      <fieldset disabled className="btn-group">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
        <button>Extend</button>
        <button>Done</button>
      </fieldset>
      <span className="time">0:0</span>
    </div>
  );
}

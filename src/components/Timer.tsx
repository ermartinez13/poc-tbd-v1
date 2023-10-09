export function Timer() {
  return (
    <div className="timer">
      <div className="btn-group">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
        <button>Extend</button>
      </div>
      <span className="time">00:00</span>
    </div>
  );
}

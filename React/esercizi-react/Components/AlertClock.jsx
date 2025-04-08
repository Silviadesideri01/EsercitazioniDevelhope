function NewDate() {
  const date = new Date().toLocaleTimeString();
  alert(`The current time is: ${date}`);
}

export function AlertClock() {
  return (
    <div>
      <p><em>Click the button to show current time!</em></p>
      <button className="button" onClick={NewDate}>
        {" "}
        What time is it?
      </button>
    </div>
  );
}

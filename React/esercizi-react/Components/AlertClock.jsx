export function AlertClock(props) {
  return (
    <div>
      <p>
        <em>Click the button to show current time!</em>
      </p>
      <button className="button" onClick={props.date}>
        {" "}
        What time is it?
      </button>
    </div>
  );
}

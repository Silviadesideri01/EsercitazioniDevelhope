import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <h1>The count is: {count}</h1>
      <button onClick={changeCount}>Click me</button>
    </div>
  );
}

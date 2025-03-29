import { useState } from "react";

export default function Task1() {
  const countBtn = {
    background: "lime",
  };
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const updateCount = count + 1;
    setCount(updateCount);
  };
  const handleDecrease = () => {
    const updateCount = count - 1;
    setCount(updateCount);
  };
  const handleReset = () => {
    const updateCount = 0;
    setCount(updateCount);
  };
  return (
    <div className="card">
      <h2>Counter Button App</h2>
      <p>Count: {count} </p>
      <button onClick={handleIncrease} style={countBtn}>Increase</button>
      <button onClick={handleDecrease} style={countBtn}>Decrease</button>
      <button onClick={handleReset} style={countBtn}>Reset</button>
    </div>
  );
}

import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const counterStyle = {
    border: "2px solid green",
  };
  const counterBtn = {
    background: "red",
  };
  return (
    <div style={counterStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handleAdd} style={counterBtn}>
        Add
      </button>
    </div>
  );
}

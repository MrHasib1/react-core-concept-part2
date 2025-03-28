import { useState } from "react";

export default function Batsman() {
  const runBtn = {
    background: "lime",
  };

  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  function handleSingle() {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  }
  const handleSix = () => {
    const updateRuns = runs + 6;
    setRuns(updateRuns);
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes);
  };
  const handleFour = () => {
    const updateRuns = runs + 4;
    setRuns(updateRuns);
  };

  return (
    <div>
      <h3>Player: Bangladeshi Batsman</h3>
      <p><small>Six: {sixes}</small></p>

      {runs >= 50 && <p>Your score 50</p>}

      <h1>Score: {runs}</h1>
      <button onClick={handleSingle} style={runBtn}>
        singles
      </button>
      <button onClick={handleFour} style={runBtn}>
        Four
      </button>
      <button onClick={handleSix} style={runBtn}>
        Six
      </button>
    </div>
  );
}

import { useState } from "react";

export default function Task2() {
  const [message, setMessage] = useState(null);
  const buttonColor1 = {
    background: "yellow",
  };
  const buttonColor2 = {
    background: "red",
  };

  const showBtn = () => {
    const message = <h4>Hello, React Learner!</h4>;
    setMessage(message);
  };
  const hideBtn = () => {
    // const message = <h4>Nothing should be displayed!!</h4>;
    const message = "";

    setMessage(message);
  };

  return (
    <div className="card2">
      <h2>Hide and Show Message</h2>
      <p> {message}</p>

      <button onClick={showBtn} style={buttonColor1}>
        Show
      </button>
      <button onClick={hideBtn} style={buttonColor2}>
        Hide
      </button>
    </div>
  );
}

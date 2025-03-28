import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";

function App() {
  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("Clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <Batsman></Batsman>

      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={function handleClick2() {
          alert("Clicked 2");
        }}
      >
        Click me 2
      </button>

      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert("clicked 4")}>Click Me 4</button>
      <button onClick={() => handleAdd5(7)}>Click Me 5</button>
    </>
  );
}

export default App;

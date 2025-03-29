import { Suspense } from "react";

import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";
import Player from "./Player";

// ------Practice Task-------
import Task1 from "./Task1";
import Task2 from "./Task2";
import Task3 from "./Task3";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const fetchCompany = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
function App() {
  // const friendsPromise = fetchFriends();
  // const postsPromise = fetchPosts();
  const companyPromise = fetchCompany();

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

      {/* ........task 1....... */}
      {/* <Suspense>
        <Task1></Task1>
      </Suspense> */}

      {/* ........task 2....... */}
      {/* <Suspense fallback={<h3>Task 2 is coming</h3>}>
        <Task2></Task2>
      </Suspense> */}

      {/* ........task 3....... */}
      <Suspense fallback={<h3>Task 3 is coming</h3>}>
        <Task3 companyPromise={companyPromise}></Task3>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat....</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      {/* <Suspense fallback={<h4>Posts are coming.......</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense>
        <Player></Player>
      </Suspense> */}

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

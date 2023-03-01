import "./App.css";
import Child from "./components/Child";
import String from "./components/String";
import User from "./components/User";

import { useState } from "react";

function App() {
  const users = [
    {
      name: "Alonso",
      title: "Montor",
    },
    {
      name: "Alex",
      title: "Montor",
    },
    {
      name: "Razor",
      title: "Mentee",
    },
    {
      name: "Mehmet",
      title: "Mentee",
    },
  ];

  const [selectedUser, setSelectedUser] = useState();

  const string = "This is a string";
  const number = 10;

  const onButtonClick = (user) => {
    console.log("button clicked");
    setSelectedUser(user);
  };
  const onStaticButtonClick = () => {
    const index = Math.floor(Math.random() * users.length);
    setSelectedUser(users[index]);
  };
  const onButtonMouseEnter = () => {
    setSelectedUser(users[0]);
  };
  return (
    <div className="main-container">
      <h1>To Do app</h1>
      <p>This is a todo app</p>

      <button onMouseEnter={onButtonMouseEnter} onClick={onStaticButtonClick}>
        Button
      </button>

      <String string={string}></String>
      <p>{number} </p>
      <Child user={selectedUser} />
      <div>
        <h1>User</h1>
        {users.map((user) => {
          return (
            <button onClick={() => onButtonClick(user)}>
              <p> Name: {user.name} </p>
              <p> Title: {user.title} </p>
            </button>
          );
        })}
      </div>
      {/* <User users={users} /> */}
    </div>
  );
}

export default App;
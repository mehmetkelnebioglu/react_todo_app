import React from "react";

export default function User(props) {
  console.log("user props", props.users);
  return (
    <div>
      <h1>User</h1>
      {props.users.map((user) => {
        return (
          <div>
            <p> Name: {user.name} </p>
            <p> Title: {user.title} </p>
          </div>
        );
      })}
    </div>
  );
}
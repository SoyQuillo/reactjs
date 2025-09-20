import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { func } from "prop-types";
import { Post } from "./Post";

//<> {} []

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Santiag Jose",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Juan Jose",
    image: "https://robohash.org/user2",
  },
];

root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name} </h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);

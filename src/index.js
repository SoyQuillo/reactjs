import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from './Button'

//<> {} []

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>

    <Button/>

    <UserCard
      name="Quillosky"
      amount={20000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <UserCard
      name="Joe"
      amount={15000}
      married={false}
      points={[100, 32.3, 21.2]}
      address={{ street: "av some", city: "New York" }}
    />
  </>
);

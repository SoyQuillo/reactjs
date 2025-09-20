import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from './Button'
import { TaskCard } from './Task'
import { Saludar } from "./Saludar";
import { func } from "prop-types";

//<> {} []

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  console.log(e.target.value)
}

root.render(
  <>  
<TaskCard ready= {false}  />
<Saludar/>
<Button text="Saludar"/>

  <input onChange={handleChange}></input>

  </>


);

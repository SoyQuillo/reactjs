import React, {useState} from "react";
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

function Counter() {

  const [counter , setCounter] = useState(10);

  
  return(
    <div>
     <h1>Counter: {counter} </h1>
    <button onClick={() =>{
      setCounter(counter + 10)
    } }>Sumar</button>
    <button onClick={() => setCounter(counter - 10) }>Restar</button>
    <button onClick={() => setCounter(1000) }>Reiniciar</button>
    </div>
  )
}

root.render(
  <>
  <Counter/>
  </>
);

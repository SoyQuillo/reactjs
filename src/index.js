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

  const [mensaje, setMensaje] = useState('');

  
  return(
    <div>
    <input onChange={e => setMensaje(e.target.value) }/>
    <button onClick={() => alert('El mensaje es: ' + mensaje)}>Save</button>

    </div>
  )
}

root.render(
  <>
  <Counter/>
  </>
);

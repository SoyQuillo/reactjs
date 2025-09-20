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


root.render(
  <>  
<TaskCard ready= {false}  />
<Saludar/>
<Button text="Saludar"/>

 <form onSubmit={(e) => { e.preventDefault()
  console.log('enviado')}
 }>

  <h1> Registro de usuario </h1>  
    <button>send</button>  

</form> 
  </>


);

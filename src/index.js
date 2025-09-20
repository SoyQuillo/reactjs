import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from './Button'
import { TaskCard } from './Task'
import { Saludar } from "./Saludar";
import { func } from "prop-types";
import {Post} from './Post'

//<> {} []

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>  
      <Post/>
  </>


);

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (

 
    <div>
      <Nav />
 // Remove and replace with Router and Switch with different Route(s)
      <Books />
      
      
      
    </div>
  );
}

export default App;

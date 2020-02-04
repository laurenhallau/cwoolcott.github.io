import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import CardNew from "./components/CardNew";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Jumbotron />
      <Card />
      <CardNew />
    </div>
  );
}

export default App;

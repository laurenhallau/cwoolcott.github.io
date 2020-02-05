import React from "react";
import Cars from "./components/Cars";
import CarList from "./data/cars.json";
//var CarList = [];

function App() {
	return <Cars carList={CarList} />;
}

export default App;
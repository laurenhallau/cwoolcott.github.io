import React from "react";
import Cars from "./components/Cars";

const carsList = [
	{
		id: 1,
		year: "1983",
		make: "Mazda",
		model: "Rx-7"
	},
	{
		id: 2,
		year: "1984",
		make: "Toyota",
		model: "Celica"
	},
	{
		id: 3,
		year: "2002",
		make: "Ferrari",
		model: "Modena"
	},
	{
		id: 4,
		year: "1975",
		make: "AMC",
		model: "Pacer"
	}
]

function App() {
	return <Cars carList={carsList} />;
}

export default App;

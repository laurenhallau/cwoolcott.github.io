import React from "react";

function Cars(props) {
  //Condition if statement and Map function to loop through array

  const night = true;

  return (
    <div>
      {props.carList.length ? (
        <ul className="list-group">
          <h2>Featured Cars</h2>

          {props.carList.map(result => (
            <li className="list-group-item" key={result.id}>
              <b>{result.year}</b> {result.make} {result.model}
            </li>
          ))}
        </ul >
      ) : (
          <h2>Sorry No Cars</h2>
        )}
    </div>
  )
}

export default Cars;

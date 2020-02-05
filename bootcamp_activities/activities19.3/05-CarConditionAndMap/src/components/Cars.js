import React from "react";

function Cars(props) {
  //Condition if statement and Map function to loop through array
  return (
    <div>
      {props.carList.length ? (
        <ul className="list-group">
          {props.carList.map(result => (
            <li className="list-group-item" key={result.id}>
              <b>{result.year}</b> {result.make} {result.model}
            </li>
          ))
          }
        </ul >
      ) : (
          <h3>No Cars</h3>
        )}
    </div>
  )
}

export default Cars;

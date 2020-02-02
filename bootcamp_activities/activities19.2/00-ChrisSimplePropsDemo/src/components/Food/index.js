import React from "react";
import "./style.css";

function Food(props) {
  console.log(props);

  return (
    <div className="card">
      <div className={props.styleClass} data-type={`food-${props.type}`} data-quality={props.quality}>
        {props.children}
      </div>
    </div>
  );
}

export default Food;

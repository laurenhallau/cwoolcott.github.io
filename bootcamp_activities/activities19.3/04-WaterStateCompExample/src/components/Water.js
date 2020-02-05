import React from "react";

function Water(props) {
  return (
    <div>
      <p>At {props.temp}°F, water is considered to be a liquid state of matter.</p>
      <img src="https://static1.squarespace.com/static/583ca2f2d482e9bbbef7dad9/58863361d2b857a1707bf488/588677d403596ebc5f1d798b/1534376808162/iStock-5078775151900.jpg?format=300w" alt="Water" style={{ width: '400px' }} />
    </div>
  );
}

export default Water;

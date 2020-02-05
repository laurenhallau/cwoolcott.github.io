import React from "react";

function Ice(props) {
  return (
    <div>
      <p>At {props.temp}°F, water is considered to be a Solid state of matter.</p>
      <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/10/15/0/fnd_Ice-Cubes-thinkstock.jpg.rend.hgtvcom.616.462.suffix/1413404558868.jpeg" alt="Ice" style={{ width: '400px' }} />
    </div>
  );
}

export default Ice;

import React from "react";

function Gas(props) {
  return (
    <div>
      <p>At {props.temp}°F, water is considered to be a Gas state of matter.</p>
      <img src="https://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/41/213/87782780.jpg" alt="Gas" style={{ width: '300px' }} />
    </div>
  );
}

export default Gas;

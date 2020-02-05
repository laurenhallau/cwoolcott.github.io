import React from "react";

class WaterContainer extends React.Component {
  state = {
    currentTemp: 10
  };

  setTemperature = (event) => {
    let newTemp = event.target.value;
    if (isNaN(newTemp) && newTemp !== "-") {
      newTemp = '';
    }
    this.setState({ currentTemp: newTemp });

  }

  render() {
    let stateOfMatter;
    let imageMatter;
    var imageMatterStyle = { width: '300px' };

    if (this.state.currentTemp <= 32) {
      stateOfMatter = 'Solid';
      imageMatter = 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/10/15/0/fnd_Ice-Cubes-thinkstock.jpg.rend.hgtvcom.616.462.suffix/1413404558868.jpeg';
    } else if (this.state.currentTemp >= 212) {
      stateOfMatter = 'Gas';
      imageMatter = 'https://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/41/213/87782780.jpg';
    } else {
      stateOfMatter = 'Liquid';
      imageMatter = 'https://static1.squarespace.com/static/583ca2f2d482e9bbbef7dad9/58863361d2b857a1707bf488/588677d403596ebc5f1d798b/1534376808162/iStock-5078775151900.jpg?format=1500w';
    }

    return (
      <div>
        <input type="text" onChange={this.setTemperature} value={this.state.currentTemp} />
        <p>At {this.state.currentTemp}°F, water is considered to be a "{stateOfMatter}" state of matter.</p>
        <img src={imageMatter} style={imageMatterStyle} />
      </div>
    );
  }
}

export default WaterContainer;

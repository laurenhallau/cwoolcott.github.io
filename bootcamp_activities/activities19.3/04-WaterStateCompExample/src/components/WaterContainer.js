import React from "react";
import Ice from "./Ice"
import Water from "./Water"
import Gas from "./Gas"
import Question from "./Question"

class WaterContainer extends React.Component {
  state = {
    currentTemp: 10,
    currentStatus: "Ice"
  };

  setTemperature = (event) => {
    let newTemp = event.target.value;
    this.setState({ currentTemp: newTemp });
  }

  renderPage = () => {
    //console.log("this.state.currentTemp", this.state.currentTemp)
    if (this.state.currentTemp <= 32) {
      return <Ice temp={this.state.currentTemp} />;
    } else if (this.state.currentTemp > 32 && this.state.currentTemp < 212) {
      return <Water temp={this.state.currentTemp} />;
    } else if (this.state.currentTemp >= 212) {
      return <Gas temp={this.state.currentTemp} />;
    } else {
      return <Question temp={this.state.currentTemp} />;
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center" }} >
        <br /> <br />
        <label>Temp:</label>
        <input type="text" size="5" maxLength="4" onChange={this.setTemperature} value={this.state.currentTemp} />° F
          <br /> <br />
        {this.renderPage()}
      </div >
    );
  }
}

export default WaterContainer;

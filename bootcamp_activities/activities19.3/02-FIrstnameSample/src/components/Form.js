import React, { Component } from "react";

class Form extends Component {
  state = {
    firstname: "",
    lastname: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)

    console.log(event.target);


    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.firstname && this.state.lastname) {
      alert(`Hi ${this.state.firstname}. 
I'll call you Professor ${this.state.lastname}!`);
      this.setState({
        firstname: "",
        lastname: ""
      });
    }
    else {
      alert(`Need more info!`);
      this.setState({
        firstname: this.state.firstname,
        lastname: this.state.lastname
      });
    }
  };

  render() {
    return (
      <form>
        <p>Firstname: {this.state.firstname}</p>
        <p>Lastname: {this.state.lastname}</p>
        <input
          type="text"
          placeholder="Firstname"
          name="firstname"
          value={this.state.firstname}
          onChange={this.handleInputChange}
        />
        <input
          type="lastname"
          placeholder="Lastname"
          name="lastname"
          value={this.state.lastname}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;

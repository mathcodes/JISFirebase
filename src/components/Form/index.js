import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: "",
    selectOne: "",
    selectTwo: ""
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state.lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      alert(`Hey hey ${this.state.selectOne}`)
    }

    this.setState({
      firstName: "",
      lastName: "",
      password: "",
      selectOne: "",
      selectTwo: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h5>
          Hello <span className="fName">{this.state.firstName}</span> <span className="lName">{this.state.lastName}</span>. To maximize your time while <span className="sOne">{this.state.SelectOne}</span> and making sure you are also <span className="sTwo">{this.state.SelectTwo}</span>, please submit this form to get started.
        </h5>
        <form className="form" action="mailto:jonpchristie@gmail.com">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <select
            className="custom-select"
            value={this.state.SelectOne}
            name="SelectOne"
            onChange={this.handleInputChange}
            type="SelectOne"
            placeholder="SelectOne"
          >
            <option selected>Choose one:</option>
            <option value="finding a new career">I am looking for a job.</option>
            <option value="furthering your education">
              I am looking to further my education.
            </option>
            <option value="more interests">
              I am interested in expanding my interests.
            </option>
          </select>
          <select
            className="custom-select"
            value={this.state.SelectTwo}
            name="SelectTwo"
            onChange={this.handleInputChange}
            type="SelectTwo"
            placeholder="SelectTwo"
          >
            <option selected>Choose one:</option>
            <option value="create things">I like to create things.</option>
            <option value="complete and accomplish tasks">I like to complete tasks.</option>
          </select>
          <button onClick={this.handleFormSubmit} action="mailto:jonpchristie@gmail.com">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

import React, { Component } from "react";

class NumberInput extends Component {
  constructor(props) {
    super(props);
    // Be sure to add a state.
    this.state = {
      number: 0
    };
  }
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ number: event.target.value });
  };
  render() {
    return (
      // Replace this JSX with code from App.js
      <li className="NumberInput cards-item">
        <NumberInput />
        <div className="card">
          <div className="card-content">
            <div className="card-title">Number</div>
            <p className="card-text">
              <div className="input btn-block">
                <input
                  type="number"
                  className="textInput"
                  onChange={this.handleChange}
                />
              </div>
              <div className="output">
                <label for="numberOutput">State:{this.state.number} </label>
                <span name="numberOutput"></span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default NumberInput;

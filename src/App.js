import React, { Component } from "react";
import "./App.css";
import NumberInput from "./components/NumberInput";
class App extends Component {
  render() {
    return (
      <div className="container">
        <ul className="cards">
          <li className="NumberInput cards-item">
            <NumberInput />
            <div className="card">
              <div className="card-content">
                <div className="card-title">Number</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="number" className="textInput" />
                  </div>
                  <div className="output">
                    <label for="numberOutput">State: </label>
                    <span name="numberOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
          <li className="ButtonInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Button</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="button" value="Click me!" className="btn" />
                  </div>
                  <div className="output">
                    <label for="buttonOutput">State: </label>
                    <span name="buttonOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;

import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0 
    };
  }

  upHandler() {
    this.setState((prevstate) => {
      return {count : prevstate.count + 1}
    });
  }
  downHandler() {
    this.setState((prevstate) => {
  
      return {count : prevstate.count - 1}
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.upHandler.bind(this)}>up</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.downHandler.bind(this)}>down</button>
      </div>
    );
  }
}
export default App;

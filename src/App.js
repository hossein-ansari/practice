import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "blue",
    };
  }

  upHandler() {
    if (this.state.count > 5) {
      return false;
    }
    this.setState((prevstate) => {
      return { count: prevstate.count + 1 };
    });
    if (this.state.count >= 3) {
      this.setState({ color: "red" });
    }
  }
  downHandler() {
    if (this.state.count <= 0) {
      return false;
    }
    this.setState((prevstate) => {
      return { count: prevstate.count - 1 };
    });
    if (this.state.count <= 3) {
      this.setState({ color: "blue" });
    }
  }
  render() {
    return (
      <div id={this.state.color}>
        <button id="upBtn" onClick={this.upHandler.bind(this)}>
          up
        </button>
        <h1>{this.state.count}</h1>
        <button onClick={this.downHandler.bind(this)}>down</button>
      </div>
    );
  }
}
export default App;

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
  downHandler(msg) {
    if (this.state.count <= 0) {
      return false;
    }
    this.setState((prevstate) => {
      return { count: prevstate.count - 1 };
    });
    if (this.state.count <= 3) {
      let msg1 = document.getElementById('msgCold')
      this.setState({ color: "blue" });
      msg1.innerText = msg

    }
  }
  render() {
    return (
      <div id={this.state.color}>
        <button id="upBtn" onClick={this.upHandler.bind(this)}>
          up
        </button>
        <h1>{this.state.count}</h1>
        <button id="msgCold" onClick={()=>{this.downHandler('its cold')}}>down</button>
      </div>
    );
  }
}
export default App;

import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "blue",
      news: ["gta vi released", "mincraft deleted"],
      newsCount: 0,
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
      let msg1 = document.getElementById("msgCold");
      this.setState({ color: "blue" });
      msg1.innerText = msg;
    }
  }
  NotificationHandler() {
    console.log("click");
    alert(this.state.news[0]);
    this.state.news.shift();

    console.log(this.state.news);
    this.setState((prev) => {
      return this.state.news.length - 1;
    });
  }
  render() {
    let moveOut = null;
    if (this.state.count > 5) {
      moveOut = "dont";
    }
    return (
      <div id={this.state.color}>
        <button id="upBtn" onClick={this.upHandler.bind(this)}>
          up
        </button>
        <h1>{this.state.count}</h1>
        <button
          id="msgCold"
          onClick={() => {
            this.downHandler("its cold");
          }}
        >
          down
        </button>
        <h2>{moveOut} go out</h2>
        {this.state.news.length > 0 && (
          <h3 onClick={this.NotificationHandler.bind(this)}>
            news:{this.state.news.length}
          </h3>
        )}
      </div>
    );
  }
}
export default App;

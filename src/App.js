import "./App.css";
import React, { Component } from "react";
import Carts from "./Carts";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "blue",
      news: ["gta vi released", "mincraft deleted"],
      info: [
        { name: "alex", id: 0 },
        { name: "mikle", id: 30 },
        { name: "jana", id: 20 },
      ],
      inputValue: "",
      submited: null,
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
  onChangeHandler(e) {
    this.setState((prev) => {
      return { inputValue: e.target.value };
    });
  }
  submitHandler(e) {
    e.preventDefault();
    this.setState((prev) => {
      if (this.state.inputValue == false) {
        return { submited: false };
      } else {
        return { submited: true };
      }
    });
  }
  render() {
    let moveOut = null;
    if (this.state.count > 5) {
      moveOut = "dont";
    }
    return (
      <div className="base" id={this.state.color}>
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
        {this.state.info.map((n) => (
          <div key={n.id}>
            <Carts {...n} />
          </div>
        ))}
        <form onSubmit={this.submitHandler.bind(this)} action="">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.onChangeHandler.bind(this)}
          />
          {this.state.submited == false && (
            <span className="spanNotification">*</span>
          )}

          <input type="submit" value="Send Request" />
        </form>
      </div>
    );
  }
}
export default App;

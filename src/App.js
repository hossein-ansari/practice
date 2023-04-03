import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [{ count: 0 }],
    };
  }
  render() {
    return <div>
      <button>up</button>
      <h1>{this.state.user[0].count}</h1>
      <button>down</button>

    </div>;
  }
}
export default App;

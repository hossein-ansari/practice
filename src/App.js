import "./App.css";
import React, { Component } from "react";
import Carts from "./Carts";
class App extends Component {
  constructor() {
    super();
    this.state = {
      countriesData: [
        {iran:['tabriz','fars','esfahan','mashhad']},
        {unitedStates:['chicago','Los Angeles','san diego']},
        {canada:['Toronto','Vancouver','Montreal',]}
      ],
    };
  }
  render() {
    return <div>
      <div>
        <form action=""><input type="chekbox" />select your country</form>
      </div>
    </div>;
  }
}

export default App;

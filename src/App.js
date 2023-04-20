import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showModal:true
    };
  }
  componentDidMount(){
    console.log('mounted');
  }
  render() {
    return (
      <div></div>
    );
  }
}

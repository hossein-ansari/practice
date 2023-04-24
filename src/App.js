import React, { Component ,PureComponent } from "react";
import "./App.css";
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        showModal:true
    };
  }
  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps');
  }
  componentDidMount(){
    console.log('mounted');
  }
  shouldComponentUpdate(props,state){
    console.log('update');

  }
  render() {
    return (
      <div>
        <h1>ok!!!</h1>
      </div>
    );
  }
}

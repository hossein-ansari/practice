import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
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
    if (this.props.showModal == props.showModal) {
      return false
    }
    return true
  }
  render() {
    return (
      <div>
        <h1>ok!!!</h1>
      </div>
    );
  }
}

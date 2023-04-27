import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],    
      formData:{
      hossein:'name'
    }
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: this.state.formData,
    })
  }
  render() {

    return (
      <div>
      </div>
    );
  }
}

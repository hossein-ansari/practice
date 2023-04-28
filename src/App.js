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
    }).then(Response=>Response.json())
    .then(data=>console.log(data))
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "DELETE",
      
    }).then(Response=>Response.json())
      .then(data=>console.log(data))
  }
  render() {
    return (
      <div>
        <h2></h2>
      </div>
    );
  }
}

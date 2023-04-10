
import "./Carts.css";
import React, { Component } from 'react'

export default class Carts extends Component {
  removeHandler(id){
    console.log(id);
  }
  render() {
    return (
      <div ><button onClick={this.removeHandler.bind(this,this.props.id)}>remove</button></div>
    )
  }
}


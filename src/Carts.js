
import "./Carts.css";
import React from 'react'

export default class Carts extends React.Component {
  removeBtn(id){
    this.props.onRemove(id)
  }
  render() {
    return (
      <h1>{this.props.name}<button onClick={this.removeBtn.bind(this,this.props.id)}>remove</button></h1>
    )
  }
}


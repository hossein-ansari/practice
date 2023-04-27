import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      data:null
    }
  }    
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/posts',{
        method : 'GET'
      })
        .then(Response=>{Response.json()})
        .then(data =>{this.setState({data:data})})
    }
  render() {
    console.log(this.state.data);

    return (
      <div>App</div>
    )
  }
}


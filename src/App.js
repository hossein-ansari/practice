import React, { Component } from 'react'
import './App.css'
import Alert from 'react-bootstrap/Alert';
export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    render() {
        return (
            <div><Alert variant='info'>test msg</Alert></div>
        )
    }
}

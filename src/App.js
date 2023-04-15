import React, { Component } from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        return (
            <div>
                <TodoList {...this.state} ></TodoList>
            </div>
        )
    }
}

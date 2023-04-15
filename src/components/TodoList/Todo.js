import React, { Component } from 'react'

export default class Todo extends Component {
    completed(){
        let indexCompleted = this.props.todos.findIndex((x) => x.id === this.props.id - 1);
        this.props.todos.split(indexCompleted,1)
    }
    render() {
        let {id,title,complete} = this.props
        return (
            // 'completed' class for completed todos
            <div className='todo' style={{ display: 'flex'}}>
                <li className="todo-item">{title}</li>

                <button onClick={this.completed.bind(this)} className="check-btn">
                    <i  className="fas fa-check" aria-hidden="true">Done</i>
                </button>

                <button className="trash-btn">
                    <i className="fas fa-trash" aria-hidden="true">-</i>
                </button>
            </div>
        )
    }
}
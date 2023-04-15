import React, { Component } from 'react'

export default class Todo extends Component {
    completHandler(id){
        this.props.onComplet(id)
    }
    Remove(id){
        this.props.onRemove(id)
    }
    render() {
        let {id,title,complete} = this.props
        return (
            // 'completed' class for completed todos
            <div className='todo' style={{ display: 'flex'}}>
                <li className="todo-item">{title}</li>

                <button onClick={this.completHandler.bind(this,id)} className="check-btn">
                    <i  className="fas fa-check" aria-hidden="true">Done</i>
                </button>

                <button onClick={this.Remove.bind(this,id)} className="trash-btn">
                    <i className="fas fa-trash"  aria-hidden="true">-</i>
                </button>
            </div>
        )
    }
}
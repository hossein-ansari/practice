import React, { Component } from "react";
import Header from "./Header";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoTitle: "",
      status: "all",
    };

  }
  todoInput(e) {
    this.setState({
      todoTitle: e.target.value,
    });
  }
  addTodo(e) {
    e.preventDefault();
    if (this.state.todoTitle) {
      let todosObj = {
        id: this.state.todos.length + 1,
        title: this.state.todoTitle,
        complete: false,
      };
      this.setState({
        todos: [...this.state.todos, todosObj],
      });

      this.setState({
        todoTitle: "",
      });
    }
  }
  render() {
    
    return (
      <>
        <Header />
        <form>
          <input
            value={this.state.todoTitle}
            onChange={(e) => this.todoInput(e)}
            type="text"
            className="todo-input"
            maxLength="40"
          />
          <button
            onClick={(e) => this.addTodo(e)}
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-plus-square">+</i>
          </button>
          <div className="select">
            <select name="todos" className="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>

        <div className="todo-container">
          <ul className="todo-list">
            {this.state.todos.map((todo) => (
              <Todo {...todo} todos={this.state.todos} key={todo.id} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

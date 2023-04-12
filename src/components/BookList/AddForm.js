import React, { Component } from "react";
import Book from "./Book";

export default class AddForm extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      id: null,
      title: "",
      author: "",
      year: "",
    };
  }

  titleInput(e) {
    this.setState(() => {
      return { title: e.target.value };
    });
  }
  authorInput(e) {
    this.setState(() => {
      return { author: e.target.value };
    });
  }
  yearInput(e) {
    this.setState(() => {
      return { year: e.target.value };
    });
  }
  addBookHandler(e) {
    e.preventDefault();
    if (this.state.title && this.state.author && this.state.year) {
      let newBook = {
        id: this.state.books.length + 1,
        title: this.state.title,
        author: this.state.author,
        year: this.state.year,
      };
      this.setState({
        books: [...this.state.books, newBook],
      });
    }
  }
  render() {
    return (
      <>
        <form
          onSubmit={this.addBookHandler.bind(this)}
          id="book-form"
          autocomplete="off"
        >
          <div>
            <label for="title">Title</label>
            <input
              value={this.state.title}
              onChange={(e) => {
                this.titleInput(e);
              }}
              type="text"
              id="title"
            />
          </div>

          <div>
            <label for="author">Author</label>
            <input
              value={this.state.author}
              onChange={(e) => {
                this.authorInput(e);
              }}
              type="text"
              id="author"
            />
          </div>

          <div>
            <label for="year">Year</label>
            <input
              value={this.state.year}
              onChange={(e) => {
                this.yearInput(e);
              }}
              type="text"
              id="year"
            />
          </div>
          <input type="submit" value="Add Book" />
        </form>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody id="book-list">
            {this.state.books.map((book) => (
              <Book {...book} key={book.id} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

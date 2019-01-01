import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import Paginaton from "./common/pagination";

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render() {
    const { books, changeShelf } = this.props;
    const { length: count } = books;

    if (count === 0) return <p>Book shelf empty!</p>;

    return (
      <div className="row">
        <div className="col-md-12">
          <ol className="books-grid">
            {books.map(book => (
              <Book
                book={book}
                books={books}
                key={book.id}
                changeShelf={changeShelf}
              />
            ))}
          </ol>
          <div className="books-grid">
            <Paginaton />
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;

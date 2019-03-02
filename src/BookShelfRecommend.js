import React, { Component } from "react";
// import PropTypes from "prop-types";
import Book from "./Book";
import Recommend from "./Recommend";
import Paginaton from "./common/pagination";

class BookShelfRecommend extends Component {
  state = {
    books: [],
    changeShelf: ""
  };

  render() {
    const { books, changeShelf } = this.props;
    const { length: count } = books;

    if (count === 0) return <p>Book shelf empty!</p>;

    return (
      <div className="row">
        <div className="col-md-12">
          <ol className="books-grid">
            <p>Showing {count} books.</p>
            {books.map(book => (
              <Recommend
                book={book}
                books={books}
                key={book.id}
                changeShelf={changeShelf}
              />
            ))}
          </ol>
          <Paginaton />
        </div>
      </div>
    );
  }
}

export default BookShelfRecommend;

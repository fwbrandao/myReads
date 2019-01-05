import React, { Component } from "react";
// import PropTypes from "prop-types";
import Book from "./Book";
import Paginaton from "./common/pagination";
import { paginate } from './utils/paginate';
import _ from 'lodash';

class BookShelf extends Component {
  state = {
    books: [],
    changeShelf: "",
    pageSize: 3,
    currentPage: 1,
    // selectedGenre: "",
    // sortColumn: { path: 'title', order: 'asc' }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  // getPageData = () => {
  //   const {
  //           currentPage,
  //           pageSize,
  //           sortColumn,
  //           books: allBooks,
  //           selectedGenre
  //           } = this.state;
  //   const filtered =
  //     selectedGenre && selectedGenre._id
  //       ? allBooks.filter(m => m.genre._id === selectedGenre._id)
  //       : allBooks;

  //   const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  //   const books = paginate(sorted, currentPage, pageSize);

  //   return { totalCount: filtered.length, data: books };
  //   };

  render() {
    const {  books, changeShelf, currentPage, pageSize, sortColumn } = this.props;

    if (count === 0) return <p>Book shelf is empty!</p>;


    // const books = paginate( currentPage, pageSize);

    const { length: count } = books;



    // const {totalCount} = this.getPageData();

    return (
      <div className="row">
        <div className="col-md-12">
        <p>Showing {count} books.</p>
        <nav aria-label="Page navigation example">
          <ul className="books-grid">
            {books.map(book => (
              <Book
                book={book}
                books={books}
                key={book.id}
                changeShelf={changeShelf}
              />
            ))}
          </ul>
          </nav>
          <div className="books-grid">
            <Paginaton
              itemsCount={count}
              pageSize={this.state.pageSize}
              onPageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;

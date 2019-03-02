import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfRecommend from './BookShelfRecommend'

class BookListRecommend extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = { shefChange: false }

  render() {
    const { books, changeShelf } = this.props
    const shelfTypes = [
      { type: 'fiveStarBooks', title: 'Five Star Books' },
      { type: 'topReactBooks', title: 'Top React Books' },
      { type: 'topSciFiBooks', title: 'Top SciFi Books' }
    ];

    return (
      <div className="list-books-content">
        {shelfTypes.map((shelf, index) => {
          const shelfBooks = books.filter(book => book.shelf === shelf.type)
          return (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <BookShelfRecommend
                  books={shelfBooks}
                  changeShelf={changeShelf}
                />
              </div>
            </div>)
        })}
      </div>
    )
  }
}


export default BookListRecommend
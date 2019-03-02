import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, changeShelf } = this.props

    // set current shelf to none as defalt
    let currentShelf = 'none'

    // if book is in current list, set current shelf to book.shelf
    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf
        break
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => changeShelf(book, event.target.value)}
          defaultValue={currentShelf}>
          <option value="none" disabled>Move book to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="fiveStarBooks">Five Star Books</option>
          <option value="topReactBooks">React Books</option>
          <option value="topSciFiBooks">Top SciFi Books</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }

}

export default ShelfChanger










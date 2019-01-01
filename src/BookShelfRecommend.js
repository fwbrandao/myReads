import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Recommend from './Recommend'

class BookShelfRecommend extends Component {
  	static propTypes = {
    	books: PropTypes.array.isRequired,
      	changeShelf: PropTypes.func.isRequired
    }

render() {
	const { books, changeShelf } = this.props
	const { length: count } = books

	if (count === 0) return <p>Book shelf empty!</p>

return (
	<ol className="books-grid">
  {books.map((book) => (
	<Recommend
		book={ book }
		books={ books }
		key={ book.id }
		changeShelf={ changeShelf }
	/>
	))}
	</ol>
)
}
}

export default BookShelfRecommend
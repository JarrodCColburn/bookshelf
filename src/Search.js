import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Book from './Book';
import Changer from './Changer';

/**
 * @description Allows for querying of books
 * @description Displays book results
 */
class Search extends React.Component {
  state = {
    value: '',
    results: [],
  };
  static propTypes = {
    books: PropTypes.object,
    shelfs: PropTypes.array,
    update: PropTypes.func,
    searchPromise: PropTypes.func,
  };
  handleChange = event => {
    let value = event.target.value;
    this.setState({value});
    this.props.searchPromise(value.trim()).then(books => {
      // Compare Array of Books to previously saved Books
      let results = Array.isArray(books) ? books : [];
      this.setState({results});
    });
  };

  updateBook = book => {
    return shelf => this.props.update(book, shelf);
  };
  render() {
    let shelfs = this.props.shelfs;
    let books = this.props.books || new Map();
    let results = this.state.results.map(
      book => (books.has(book.id) ? books.get(book.id) : book),
    );
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.map(book => (
              <Book key={book.id} book={book}>
                <Changer
                  value={book.shelf}
                  shelfs={shelfs}
                  changeShelf={this.updateBook(book)}
                />
              </Book>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;

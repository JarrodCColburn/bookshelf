import React from 'react';
import Book from './Book';

class Search extends React.Component {
  state = {
    value: '',
    results: [],
  };
  handleChange = event => {
    let value = event.target.value;
    this.setState({value});
    this.props.searchPromise(value).then(books => {
      let results = Array.isArray(books) ? books : [];
      this.setState({results});
    });
  };

  render() {
    let books = this.props.books || new Map()
    let results = this.state.results.map( book => (books.has(book.id) ? books.get(book.id) : book));
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={() => this.setState({showSearchPage: false})}>
            Close
          </a>
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
            {results.map(book => <Book key={book.id} book={book} />)}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;

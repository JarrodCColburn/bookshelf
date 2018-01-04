import {Route} from 'react-router-dom';
import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from './Search';
import List from './List';
/**
 * @description Maps array of Books to a Map<book.id,book> 
 * @param {Array} arr - The array of books
 * @returns {Map} map 
 */
const arr2map = arr =>
  arr.reduce((map, book) => map.set(book.id, book), new Map());
class App extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      books = Array.isArray(books) ? books : [];
      this.setState({books});
    });
  }
  update = (book, shelf) => {
    this.setState(prev => {
      let {books} = prev;
      books = books.filter(b => b.id !== book.id);
      book.shelf = shelf;
      if (!shelf || shelf !== 'none') books.push(book);
      return {books};
    });
    BooksAPI.update(book, shelf);
  };
  render() {
    var shelfs = ['read', 'wantToRead', 'currentlyReading'];
    let books = this.state.books || [];
    return (
      <div className="app">
        <Route
          path='/search'
          render={() => (
            <Search
              books={arr2map(books)}
              shelfs={shelfs}
              update={this.update}
              searchPromise={BooksAPI.search}
            />
          )}
        />
        <Route
          exact
          path='/'
          render={() => (
            <List books={books} shelfs={shelfs} update={this.update} />
          )}
        />
      </div>
    );
  }
}

export default App;

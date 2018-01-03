import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Search from './Search';
import List from './List';
// var { books } = require("./books.json");
class Bookshelf extends React.Component {
  state = {
    books: [],
  };
  update = (book, shelf) => {
    this.setState( prev => { 
      let { books } = prev 
      books = books.filter( b => b.id !== book.id)
      book.shelf = shelf
      if ( !shelf || shelf !== 'none') books.push(book);
      return ({books})
    })
    BooksAPI.update(book,shelf)
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}));
  }
  render() {
    var shelfs = ['read', 'wantToRead', 'currentlyReading'];
    let books = this.state.books || [];
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search books={books} update={this.update}/>
        ) : (
          <List books={books} shelfs={shelfs} update={this.update} />
        )}
      </div>
    );
  }
}

export default Bookshelf;

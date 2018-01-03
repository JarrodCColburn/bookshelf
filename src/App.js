import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import List from './List'
var shelfs = ["read", "wantToRead", "currentlyReading"];
var { books } = require("./books.json");
class Bookshelf extends React.Component {
  state = {
    books
  }
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (<Search books={books}/>) : <List books={books} shelfs={shelfs}/>}
      </div>
    )
  }
}

export default Bookshelf

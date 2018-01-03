import React from "react";
import Book from "./Book";
import Changer from "./Changer";
class List extends React.Component {
  render() {
    let books = this.props.books || []
    let shelfs = this.props.shelfs || []
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelfs.map(shelf => (
              <div className="bookshelf" key={shelf}>
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(book => book.shelf === shelf)
                      .map(book => <Book key={book.id} book={book} >
                          <Changer shelf={shelf} shelfs={shelfs} />
                        </Book>)}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </a>
        </div>
      </div>
    );
  }
}
export default List;

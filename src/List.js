import React from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';
import Changer from './Changer';
import PropTypes from 'prop-types'
import toTitleCase from 'to-title-case'
class List extends React.Component {
  static propTypes = { 
    books:PropTypes.array,
    shelfs:PropTypes.array,
    update:PropTypes.func
  }
  updateBook = book => {
    return shelf => this.props.update(book, shelf);
  };
  render() {
    let books = this.props.books || [];
    let shelfs = this.props.shelfs || [];

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            {shelfs.map(shelf => (
              <div className='bookshelf' key={shelf}>
                <h2 className='bookshelf-title'>{toTitleCase(shelf)}</h2>
                <div className='bookshelf-books'>
                  <ol className='books-grid'>
                    {books.filter(book => book.shelf === shelf).map(book => (
                      <Book key={book.id} book={book}>
                        <Changer
                          value={shelf}
                          shelfs={shelfs}
                          changeShelf={this.updateBook(book)}
                        />
                      </Book>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search' className='open-search'>
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}
export default List;

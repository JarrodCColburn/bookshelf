import React from "react";
class Book extends React.Component {
  render() {
    let book
    // debugger
    if ( this.props.book ) {
      ({book} = this.props )
    }
    else {
      return (<li><div>Something Here</div></li>)
    }
    let { authors, title, imageLinks } = book
    let author = Array.isArray(authors) && authors.length && authors[0] || ''
    let image = imageLinks && ( imageLinks.thumbnail || imageLinks.smallThumbnail ) || '';
    return (
      <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              'backgroundImage': `url(${image})`
            }}
          />
      {this.props.children}
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
      </li>
    );
  }
}

export default Book;

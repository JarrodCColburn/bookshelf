import React from 'react';
class Changer extends React.Component {
  state = {};

  handleChange = event => {
    let value = event.target.value || '';
    this.props.changeShelf(value)
  };
  render() {
    let shelfs = this.props.shelfs || [];
    let value = this.props.value || 'none';
    console.log(value);
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={value}>
          <option value="none" disabled>
            Move to...
          </option>
          {shelfs.map(shelf => (
            <option key={shelf} value={shelf}>
              {shelf}
            </option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Changer;

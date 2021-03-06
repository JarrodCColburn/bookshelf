import toTitleCase from 'to-title-case';
import PropTypes from 'prop-types';
import React from 'react';
/**
 * @description Allows for options to select shelf
 *
 */
class Changer extends React.Component {
  // Not including state at this time because
  // component is automatically unmounted upon change
  static propTypes = {
    value: PropTypes.string,
    shelfs: PropTypes.array,
    changeShelf: PropTypes.func,
  };
  handleChange = event => {
    let value = event.target.value || '';
    this.props.changeShelf(value);
  };
  render() {
    let shelfs = this.props.shelfs || [];
    let value = this.props.value || 'none';
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={value}>
          <optgroup label="Move to...">
            {shelfs.map(shelf => (
              <option key={shelf} value={shelf}>
                {toTitleCase(shelf)}
              </option>
            ))}
            <option value="none">None</option>
          </optgroup>
        </select>
      </div>
    );
  }
}

export default Changer;

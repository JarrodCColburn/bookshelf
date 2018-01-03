import React from 'react'
class Changer extends React.Component {
  state = {
  }

  render() {
    let shelfs = this.props.shelfs || []
    let value = this.props.value || 'none'
    return (
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>
                Move to...
              </option>
      {

      shelfs.map( shelf => (
              <option key={shelf} value={shelf}>{shelf}</option>
      ))
      }
              <option value="none">None</option>

            </select>
          </div>
    )
  }
}

export default Changer 

import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ handleSearch }) => (
  <div className="search">
    <input
      className="pq"
      type="search"
      placeholder=" Usuario GitHub... "
      onKeyUp={handleSearch}
    />
  </div>
)
Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}
export default Search

import React from 'react'

const Actions = ({ getRepos, getStarred }) => (
  <div className="actions">
    <button className="rep" onClick={getRepos}>
      {' '}
      Ver Repositorios
    </button>
    <button className="fav" onClick={getStarred}>
      {' '}
      Ver favoritos
    </button>
  </div>
)

export default Actions

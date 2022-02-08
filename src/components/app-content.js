import React from 'react'
import PropTypes from 'prop-types'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
}) => (
  <div className="app">
    <div className="Search">
      {' '}
      <Search handleSearch={handleSearch} />
    </div>
    {isFetching && <div className="dw">Carregando...</div>}
    {!!userinfo && <UserInfo userInfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

    {!!repos.length && (
      <Repos className="repos" title="Repositorios:" repos={repos} />
    )}

    {!!starred.length && (
      <Repos className="starred" title="Favoritos:" repos={starred} />
    )}
  </div>
)
AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
}

export default AppContent

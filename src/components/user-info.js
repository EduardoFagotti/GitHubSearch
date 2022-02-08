'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({ userInfo }) => (
  <div className="user-info">
    <img className='photo' src={userInfo.photo} />
    <h1 className="h1">
      <a className="name" href={`https://github.com/${userInfo.login}`}>{userInfo.username}</a>
    </h1>

    <ul className="repos-info">
      <li>Repositorios: {userInfo.repos}</li>
      <li>Seguidores: {userInfo.followers}</li>
      <li>Seguindo: {userInfo.following}</li>
    </ul>
  </div>
)
UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }),
}
export default UserInfo

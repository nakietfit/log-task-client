import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
      <div>
        <div>
          <div>Log Task</div>
          <Link to="/">
            new
          </Link>
          {authToken && (
            <div>
              <div>|</div>
              <Link to="/create">
                submit
              </Link>
            </div>
          )}
        </div>
        <div>
          {authToken ? (
            <div
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)
              }}
            >
              logout
            </div>
          ) : (
            <Link to="/login">
              login
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
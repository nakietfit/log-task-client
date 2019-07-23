import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
      <nav className="navbar">
        <div className="d-flex">
          <div className="mr-5">Log Task</div>
          <Link to="/">
            new
          </Link>
          {authToken && (
            <div className="d-flex">
              <div className="mx-5">|</div>
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
      </nav>
    )
  }
}

export default withRouter(Header)
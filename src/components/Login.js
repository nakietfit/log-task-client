import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      user {
        id
        username
      }
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    username: '',
    password: '',
  }

  render() {
    const { login, username, password } = this.state
    return (
      <div>
        <h4>{login ? 'Login' : 'Sign Up'}</h4>
        <div className="mt-4">
          <input
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
            type="text"
            placeholder="Your username address"
          />
          <div className="mt-4" />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div>
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ username, password }}
            onCompleted={data => this._confirm(data)}
          >
            {mutation => (
              <button onClick={mutation} className="mt-4">
                {login ? 'login' : 'create account'}
              </button>
            )}
          </Mutation>
          <div
            onClick={() => this.setState({ login: !login })}
            className="mt-4"
          >
            {login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
        </div>
      </div>
    )
  }

  _confirm = async data => {
    const { login } = this.state
    if (login) {
      localStorage.setItem(AUTH_TOKEN, data.tokenAuth.token)
      this.props.history.push(`/`)
    }
    if (!login) this.props.history.push(`/login`)
  }
}

export default Login
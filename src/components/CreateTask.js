import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const POST_MUTATION = gql`
  mutation PostMutation($name: String!) {
    createTask(name: $name) {
      id
      name
    }
  }
`

class CreateTask extends Component {
  state = {
    name: '',
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <div>
          <input
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="A name for the task"
          />
        </div>
        <Mutation 
          mutation={POST_MUTATION} 
          variables={{ name }}
          onCompleted={() => this.props.history.push('/')}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateTask
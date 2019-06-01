import React, { Component } from 'react'
import Task from './Task'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    feed {
      tasks {
        id
        createdAt
        name
      }
    }
  }
`

class TaskList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const tasksToRender = data.feed.tasks
    
          return (
            <div>
              {tasksToRender.map(task => <Task key={task.id} task={task} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default TaskList
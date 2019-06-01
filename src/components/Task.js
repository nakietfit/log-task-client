import React, { Component } from 'react'

class Task extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.task.name}
        </div>
      </div>
    )
  }
}

export default Task
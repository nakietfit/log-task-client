import React, { Component } from 'react'
import TaskList from './components/TaskList'
import CreateTask from './components/CreateTask'
import Header from './components/Header'
import Login from './components/Login'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={TaskList} />
            <Route exact path="/create" component={CreateTask} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
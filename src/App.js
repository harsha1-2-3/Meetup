import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'
import './App.css'

class App extends Component {
  state = {
    userName: localStorage.getItem('userName') || '',
    userTopic: localStorage.getItem('userTopic') || '',
  }

  onChangeName = userName => {
    this.setState({userName})
    localStorage.setItem('userName', userName)
  }

  onChangeTopic = userTopic => {
    this.setState({userTopic})
    localStorage.setItem('userTopic', userTopic)
  }

  render() {
    const {userTopic, userName} = this.state

    return (
      <MeetupContext.Provider
        value={{
          userName,
          userTopic,
          onChangeTopic: this.onChangeTopic,
          onChangeName: this.onChangeName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App

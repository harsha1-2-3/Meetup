import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'
import './App.css'

class App extends Component {
  state = {
    isRegistered: false,
    userName: '',
    userTopic: '',
  }

  onChangeName = userName => {
    this.setState({userName})
  }

  onChangeTopic = userTopic => {
    this.setState({userTopic})
    console.log(userTopic, 'App')
  }

  onRegistration = gotValue => {
    this.setState({isRegistered: gotValue})
  }

  render() {
    const {userTopic, userName, isRegistered} = this.state

    return (
      <MeetupContext.Provider
        value={{
          userName,
          isRegistered,
          userTopic,
          onRegistration: this.onRegistration,
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

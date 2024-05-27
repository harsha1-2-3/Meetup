import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'
import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Beauty',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    userName: '',
    userTopic: topicsList[0].displayText,
  }

  onChangeName = userName => {
    this.setState({userName})
  }

  onChangeTopic = userTopic => {
    this.setState({userTopic})
  }

  render() {
    const {userTopic, userName} = this.state

    return (
      <MeetupContext.Provider
        value={{
          userName,
          userTopic,
          topicsList,
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

import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'
import './index.css'

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
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    userName: '',
    userTopic: '',
    showErr: false,
  }

  onClickRegisterNow = (event, onChangeName, onChangeTopic) => {
    event.preventDefault()
    const {userName, userTopic} = this.state
    if (userName === '') {
      this.setState({showErr: true})
      return
    }
    const jwtToken = 'Token'
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    onChangeName(userName)
    onChangeTopic(userTopic)
    localStorage.setItem('userName', userName)
    localStorage.setItem('userTopic', userTopic)
    const {history} = this.props
    history.replace('/')
  }

  changeTopic = event => {
    const optionId = event.target.value
    const userOptionObj = topicsList.find(each => each.id === optionId)
    const userOptionText = userOptionObj.displayText
    this.setState({userTopic: userOptionText})
  }

  changeName = event => {
    const userValue = event.target.value
    this.setState({userName: userValue})
  }

  render() {
    const {userTopic, userName, showErr} = this.state

    return (
      <MeetupContext.Consumer>
        {value => {
          const {onChangeTopic, onChangeName} = value

          return (
            <>
              <Header />
              <div className="BgReg">
                <div className="RegCont">
                  <img
                    className="RegImg"
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <form
                    onSubmit={event =>
                      this.onClickRegisterNow(
                        event,
                        onChangeName,
                        onChangeTopic,
                      )
                    }
                    className="RegForm"
                  >
                    <h1 className="RegHead">Let us join</h1>
                    <div className="InputCont">
                      <label className="InputLabel" htmlFor="name">
                        NAME
                      </label>
                      <input
                        onChange={this.changeName}
                        value={userName}
                        placeholder="Your name"
                        className="InputBox"
                        type="text"
                        id="name"
                      />
                    </div>
                    <div className="InputCont">
                      <label className="InputLabel" htmlFor="topic">
                        TOPICS
                      </label>
                      <select
                        onChange={this.changeTopic}
                        value={userTopic}
                        className="InputBox"
                        id="topic"
                      >
                        {topicsList.map(eachOption => (
                          <option key={eachOption.id} value={eachOption.id}>
                            {eachOption.displayText}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button type="submit" className="RegBtn">
                      Register Now
                    </button>
                    {showErr && (
                      <p className="ErrorMsg">Please enter your name</p>
                    )}
                  </form>
                </div>
              </div>
            </>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Register

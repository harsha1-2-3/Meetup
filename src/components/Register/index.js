import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'
import {
  BgReg,
  RegCont,
  RegImg,
  RegForm,
  RegHead,
  InputCont,
  InputLabel,
  InputBox,
  InputBoxSelect,
  RegBtn,
  ErrorMsg,
} from './styledComponents'

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
    const {history} = this.props
    history.replace('/')
  }

  changeTopic = (event, topicsList) => {
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
    console.log('Rendered:', {userTopic, userName})

    return (
      <MeetupContext.Consumer>
        {value => {
          const {onChangeTopic, onChangeName, topicsList} = value

          return (
            <>
              <Header />
              <BgReg>
                <RegCont>
                  <RegImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <RegForm
                    onSubmit={event =>
                      this.onClickRegisterNow(
                        event,
                        onChangeName,
                        onChangeTopic,
                      )
                    }
                  >
                    <RegHead>Let us join</RegHead>
                    <InputCont>
                      <InputLabel htmlFor="name">NAME</InputLabel>
                      <InputBox
                        onChange={this.changeName}
                        value={userName}
                        placeholder="Your name"
                        type="text"
                        id="name"
                      />
                    </InputCont>
                    <InputCont>
                      <InputLabel htmlFor="topic">TOPICS</InputLabel>
                      <InputBoxSelect
                        onChange={event => this.changeTopic(event, topicsList)}
                        value={userTopic}
                        id="topic"
                      >
                        {topicsList.map(eachOption => (
                          <option key={eachOption.id} value={eachOption.id}>
                            {eachOption.displayText}
                          </option>
                        ))}
                      </InputBoxSelect>
                    </InputCont>
                    <RegBtn type="submit">Register Now</RegBtn>
                    {showErr && (
                      <ErrorMsg className="ErrorMsg">
                        Please enter your name
                      </ErrorMsg>
                    )}
                  </RegForm>
                </RegCont>
              </BgReg>
            </>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Register

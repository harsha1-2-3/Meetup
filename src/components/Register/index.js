import {Component} from 'react'
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
  InputOption,
  RegBtn,
  ErrorMsg,
} from './styledComponents'

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

class Register extends Component {
  state = {
    showErr: false,
  }

  render() {
    const {showErr} = this.state

    return (
      <MeetupContext.Consumer>
        {value => {
          const {onRegistration, onChangeTopic, onChangeName, userName} = value

          const onClickRegisterNow = event => {
            event.preventDefault()
            if (userName === '') {
              this.setState({showErr: true})
              return
            }

            const {history} = this.props
            history.replace('/')
            onRegistration(true)
          }

          const changeTopic = event => {
            const userTopicId = event.target.value
            const userTopicObj = topicsList.find(
              eachOption => eachOption.id === userTopicId,
            )
            const topicText = userTopicObj.displayText
            onChangeTopic(topicText)
            console.log(topicText, 'Register')
          }

          const changeName = event => {
            onChangeName(event.target.value)
          }

          return (
            <>
              <Header />
              <BgReg>
                <RegCont>
                  <RegImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <RegForm onSubmit={onClickRegisterNow}>
                    <RegHead>Let us join</RegHead>
                    <InputCont>
                      <InputLabel htmlFor="name">NAME</InputLabel>
                      <InputBox
                        onChange={changeName}
                        value={userName}
                        placeholder="Your name"
                        type="text"
                        id="name"
                      />
                    </InputCont>
                    <InputCont>
                      <InputLabel htmlFor="topic">TOPICS</InputLabel>
                      <InputBoxSelect onChange={changeTopic} id="topic">
                        {topicsList.map(each => (
                          <InputOption key={each.id} value={each.id}>
                            {each.displayText}
                          </InputOption>
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

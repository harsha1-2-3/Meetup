import {Link, withRouter} from 'react-router-dom'
import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'
import {
  RegDoneCont,
  RegDoneHead,
  RegDonePara,
  NotRegCont,
  NotRegHead,
  NotRegPara,
  NotRegBtn,
  BgHome,
  HomeImg,
} from './styledComponents'

const Home = props => {
  const renderRegisteredBox = () => (
    <MeetupContext.Consumer>
      {value => {
        const {
          userName,
          userTopic,
          onRegistration,
          onChangeName,
          onChangeTopic,
        } = value

        const clickedLogout = () => {
          const {history} = props
          history.replace('/register')
          onRegistration(false)
          onChangeName('')
          onChangeTopic('ARTS_AND_CULTURE')
        }

        return (
          <RegDoneCont>
            <RegDoneHead>Hello {userName}</RegDoneHead>
            <RegDonePara>Welcome to {userTopic}</RegDonePara>
            <NotRegBtn type="button" onClick={clickedLogout}>
              Logout
            </NotRegBtn>
          </RegDoneCont>
        )
      }}
    </MeetupContext.Consumer>
  )

  const renderNotRegistered = () => (
    <NotRegCont>
      <NotRegHead>Welcome to Meetup</NotRegHead>
      <NotRegPara>Please register for the topic</NotRegPara>
      <Link to="/register">
        <NotRegBtn type="button">Register</NotRegBtn>
      </Link>
    </NotRegCont>
  )

  const renderAllPages = isRegistered => {
    if (isRegistered) {
      return renderRegisteredBox()
    }
    return renderNotRegistered()
  }

  return (
    <MeetupContext.Consumer>
      {value => {
        const {isRegistered} = value
        return (
          <>
            <Header />
            <BgHome>
              {renderAllPages(isRegistered)}
              <HomeImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </BgHome>
          </>
        )
      }}
    </MeetupContext.Consumer>
  )
}

export default withRouter(Home)

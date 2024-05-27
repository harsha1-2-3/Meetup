import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
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

const Home = () => {
  const renderRegisteredBox = () => (
    <MeetupContext.Consumer>
      {value => {
        const {userName, userTopic} = value

        return (
          <RegDoneCont>
            <RegDoneHead>Hello {userName}</RegDoneHead>
            <RegDonePara>Welcome to {userTopic}</RegDonePara>
          </RegDoneCont>
        )
      }}
    </MeetupContext.Consumer>
  )

  const renderNotRegistered = () => (
    <NotRegCont>
      <NotRegHead>Welcome to the Meetup</NotRegHead>
      <NotRegPara>Please register for the topic</NotRegPara>
      <Link to="/register">
        <NotRegBtn type="button">Register</NotRegBtn>
      </Link>
    </NotRegCont>
  )

  const renderAllPages = () => {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken === undefined) {
      return renderNotRegistered()
    }
    return renderRegisteredBox()
  }

  return (
    <>
      <Header />
      <BgHome>
        {renderAllPages()}
        <HomeImg
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </BgHome>
    </>
  )
}

export default Home

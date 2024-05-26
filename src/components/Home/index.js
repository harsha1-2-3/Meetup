import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'
import './index.css'

const Home = props => {
  const clickedOut = () => {
    Cookies.remove('jwt_token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userTopic')
    const {history} = props
    history.replace('/register')
  }

  const renderRegisteredBox = () => (
    <MeetupContext.Consumer>
      {value => {
        const {userName, userTopic} = value

        return (
          <div className="RegDoneCont">
            <h1 className="RegDoneHead">Hello {userName}</h1>
            <p className="RegDonePara">Welcome to {userTopic}</p>
            <button className="NotRegBtn" onClick={clickedOut} type="button">
              LogOut
            </button>
          </div>
        )
      }}
    </MeetupContext.Consumer>
  )

  const renderNotRegistered = () => (
    <div className="NotRegCont">
      <h1 className="NotRegHead">Welcome to the Meetup</h1>
      <p className="NotRegPara">Please register for the topic</p>
      <Link className="Link" to="/register">
        <button type="button" className="NotRegBtn">
          Register
        </button>
      </Link>
    </div>
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
      <div className="BgHome">
        {renderAllPages()}
        <img
          className="HomeImg"
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </div>
    </>
  )
}

export default withRouter(Home)

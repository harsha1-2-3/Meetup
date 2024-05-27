import {BgNf, NfImg, NfHead, NfPara} from './styledComponents'

const NotFound = () => (
  <BgNf>
    <NfImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NfHead>Page Not Found</NfHead>
    <NfPara className="NfPara">
      We are sorry, the you requested could not be found.
    </NfPara>
  </BgNf>
)
export default NotFound

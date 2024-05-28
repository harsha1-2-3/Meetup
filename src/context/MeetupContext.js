import React from 'react'

const MeetupContext = React.createContext({
  userName: '',
  userTopic: '',
  isRegistered: false,
  onRegistration: () => {},
  onChangeName: () => {},
  onChangeTopic: () => {},
})

export default MeetupContext

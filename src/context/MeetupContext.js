import React from 'react'

const MeetupContext = React.createContext({
  userName: '',
  userTopic: '',
  onChangeName: () => {},
  onChangeTopic: () => {},
})

export default MeetupContext

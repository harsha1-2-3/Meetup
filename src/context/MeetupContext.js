import React from 'react'

const MeetupContext = React.createContext({
  userName: '',
  userTopic: '',
  topicsList: '',
  onChangeName: () => {},
  onChangeTopic: () => {},
})

export default MeetupContext

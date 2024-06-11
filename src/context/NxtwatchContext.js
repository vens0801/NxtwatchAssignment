import React from 'react'

const NxtwatchContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedList: [],
  savedVideo: () => {},
})

export default NxtwatchContext

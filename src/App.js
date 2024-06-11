import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import NxtwatchContext from './context/NxtwatchContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here

class App extends Component {
  state = {
    isDark: false,
    savedList: [],
  }

  onChangeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  onSaveVideo = video => {
    this.setState(prevState => ({
      savedList: [...prevState.savedList, video],
    }))
  }

  render() {
    const {isDark, savedList} = this.state

    return (
      <NxtwatchContext.Provider
        value={{
          isDark,
          changeTheme: this.onChangeTheme,
          savedList,
          savedVideo: this.onSaveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <NotFound />
        </Switch>
      </NxtwatchContext.Provider>
    )
  }
}

export default App

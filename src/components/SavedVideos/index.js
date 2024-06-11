import {FaFire} from 'react-icons/fa'
import NxtwatchContext from '../../context/NxtwatchContext'

import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideoItem from '../SavedVideoItem'

import {
  SavedVideosMainContainer,
  SidebarAndContentContainer,
  SavedVideosContentContainer,
  SavedVideosListContainer,
} from './styledComponents'

import './index.css'

const SavedVideos = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark, savedList} = value
      console.log(savedList)

      return (
        <SavedVideosMainContainer isDark={isDark} data-testid = 'savedVideos'>
          <Header />
          <SidebarAndContentContainer isDark={isDark}>
            <SideBar />
            <SavedVideosContentContainer isDark={isDark}>
              <h1>
                <FaFire className="saved-videos-icon" /> Saved Videos
              </h1>

              {savedList.length === 0 ? (
                <SavedVideosListContainer isDark={isDark}>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    className="no-savedVideos"
                    alt="no saved videos"
                  />
                  <h1>No saved videos found</h1>
                  <p>You can save your videos while watching them</p>
                </SavedVideosListContainer>
              ) : (
                <SavedVideosListContainer isDark={isDark}>
                  {savedList.map(eachSavedVideo => (
                    <SavedVideoItem
                      savedVideoDetails={eachSavedVideo}
                      key={eachSavedVideo.id}
                    />
                  ))}
                </SavedVideosListContainer>
              )}
            </SavedVideosContentContainer>
          </SidebarAndContentContainer>
        </SavedVideosMainContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default SavedVideos

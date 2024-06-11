import {Link} from 'react-router-dom'

import NxtwatchContext from '../../context/NxtwatchContext'

import {LiContainer, ViewCountAndYearsContainer} from './styledComponents'

import './index.css'

const SavedVideoItem = props => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {savedVideoDetails} = props
      const {id, title, thumbnailUrl, name, viewCount, publishedAt} =
        savedVideoDetails

      return (
        <Link className="link-style" to={`/videos/${id}`}>
          <LiContainer isDark={isDark}>
            <img
              src={thumbnailUrl}
              className="saved-thumbnail"
              alt="video thumbnail"
            />
            <div className="saved-video-content-container">
              <h1>{title}</h1>
              <p>{name}</p>
              <ViewCountAndYearsContainer isDark={isDark}>
                <p className="saved-video-count">{`${viewCount} views`}</p>
                <p>{publishedAt}</p>
              </ViewCountAndYearsContainer>
            </div>
          </LiContainer>
        </Link>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default SavedVideoItem

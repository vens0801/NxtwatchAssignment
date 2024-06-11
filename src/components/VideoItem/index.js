import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import NxtwatchContext from '../../context/NxtwatchContext'

import {VideoItemContainer, Title, Name} from './styledComponents'

import './index.css'

const VideoItem = props => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {videoDetails} = props
      const {
        id,
        title,
        thumbnailUrl,
        name,
        profileImgUrl,
        viewCount,
        publishedAt,
      } = videoDetails

      const time = `${formatDistanceToNow(new Date(publishedAt)).slice(6)} ago`

      return (
        <Link className="link-style" to={`/videos/${id}`}>
          <VideoItemContainer isDark={isDark}>
            <div>
              <img
                src={thumbnailUrl}
                className="thumbnail"
                alt="video thumbnail"
              />
            </div>
            <div className="profile-url-container">
              <img src={profileImgUrl} className="profile" alt="channel logo" />
              <div className="video-details-container">
                <Title isDark={isDark}>{title}</Title>
                <Name>{name}</Name>
                <div className="views-date-container">
                  <Name>{`${viewCount} views`}</Name>
                  <Name>{time}</Name>
                </div>
              </div>
            </div>
          </VideoItemContainer>
        </Link>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default VideoItem

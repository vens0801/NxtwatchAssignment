import {Link} from 'react-router-dom'

import './index.css'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <Link className="link-style" to={`/videos/${id}`}>
      <li className="gaming-video-container">
        <img src={thumbnailUrl} className="gaming-thumbnail" alt="video thumbnail" />
        <p className="title">{title}</p>
        <p className="views">{`${viewCount} views`}</p>
      </li>
    </Link>
  )
}

export default GamingVideoItem

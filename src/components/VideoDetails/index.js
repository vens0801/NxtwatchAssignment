import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiPlayListAddLine} from 'react-icons/ri'

import NxtwatchContext from '../../context/NxtwatchContext'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  VideoDetailsMainContainer,
  VideoDetailsLightContainer,
  Title,
  ViewsAndLikesContainer,
  Name,
  LikesContainer,
  IconButtonLike,
  IconButtonDislike,
  IconButtonSave,
  ProfileContainer,
  FailureViewContainer,
  RetryBtn,
} from './styledComponents'

import './index.css'

class VideoDetails extends Component {
  state = {
    isLoading: true,
    isliked: false,
    isDisliked: false,
    isSaved: false,
    videoDetails: {},
    isFailure: false,
    saveBtnText: 'Save',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    try {
      const jwtToken = Cookies.get('jwt_token')

      const {match} = this.props
      const {params} = match
      const {id} = params

      console.log(id)

      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }

      const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)

      const data = await response.json()

      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        thumbnailUrl: data.video_details.thumbnail_url,
        videoUrl: data.video_details.video_url,
        name: data.video_details.channel.name,
        profileImgUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: `${formatDistanceToNow(
          new Date(data.video_details.published_at),
        ).slice(6)} ago`,
        description: data.video_details.description,
      }

      if (response.ok === true) {
        this.onSuccess(updatedData)
      }
    } catch (e) {
      this.onFailure()
    }
  }

  onSuccess = updatedData => {
    this.setState({
      isLoading: false,
      videoDetails: updatedData,
    })
  }

  onClickLike = () => {
    this.setState({
      isliked: true,
      isDisliked: false,
    })
  }

  onClickDislike = () => {
    this.setState({
      isDisliked: true,
      isliked: false,
    })
  }

  onClickSave = () => {
    this.setState({
      isSaved: true,
      saveBtnText: 'Saved',
    })
  }

  onFailure = () => {
    this.setState({
      isLoading: false,
      isFailure: true,
    })
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark, savedVideo, savedList} = value
          const {
            videoDetails,
            isDisliked,
            isliked,
            isSaved,
            saveBtnText,
            isLoading,
            isFailure,
          } = this.state
          const {
            videoUrl,
            thumbnailUrl,
            title,
            name,
            viewCount,
            description,
            id,
            profileImgUrl,
            subscriberCount,
            publishedAt,
          } = videoDetails

          console.log(savedList)

          const onClickSaveBtn = () => {
            savedVideo(videoDetails)
          }

          const activeLikeBtn = isliked ? 'active-btn' : null
          const activeDislikeBtn = isDisliked ? 'active-btn' : null
          const activeSaveBtn = isSaved ? 'active-btn' : null

          return (
            <VideoDetailsMainContainer data-testid="VideoItemDetails">
              <Header />
              <div className="light-sidebar-and-content-container">
                <SideBar />
                {isLoading ? (
                  <VideoDetailsLightContainer
                    className="loader-container"
                    data-testid="loader"
                    isDark={isDark}
                  >
                    <Loader
                      type="ThreeDots"
                      color="#ffffff"
                      height="50"
                      width="50"
                    />
                  </VideoDetailsLightContainer>
                ) : (
                  <VideoDetailsLightContainer>
                    <ReactPlayer
                      url={videoUrl}
                      controls
                      width="80%"
                      height="450px"
                    />
                    <Title>{title}</Title>
                    <ViewsAndLikesContainer>
                      <div className="views-date-container">
                        <Name>{`${viewCount} views`}</Name>
                        <Name>{publishedAt}</Name>
                      </div>
                      <LikesContainer>
                        <IconButtonLike
                          className={`${activeLikeBtn} like-btn`}
                          type="button"
                          onClick={this.onClickLike}
                          isliked={isliked}
                        >
                          <AiOutlineLike
                            className={`${activeLikeBtn} like-icon`}
                          />{' '}
                          Likes
                        </IconButtonLike>
                        <IconButtonDislike
                          className={`${activeDislikeBtn} dislike-btn`}
                          type="button"
                          onClick={this.onClickDislike}
                          isDisliked={isDisliked}
                        >
                          <AiOutlineDislike
                            className={`${activeDislikeBtn} dislike-icon`}
                          />{' '}
                          Dislikes
                        </IconButtonDislike>
                        <IconButtonSave
                          className={`${activeSaveBtn} save-btn`}
                          type="button"
                          onClick={(this.onClickSave, onClickSaveBtn)}
                          isSaved={isSaved}
                        >
                          {' '}
                          <RiPlayListAddLine
                            className={`${activeSaveBtn} save-icon`}
                          />{' '}
                          {saveBtnText}
                        </IconButtonSave>
                      </LikesContainer>
                    </ViewsAndLikesContainer>
                    <hr className="line" />
                    <ProfileContainer>
                      <img
                        src={profileImgUrl}
                        className="profile-img-detail"
                        alt="channel logo"
                      />
                      <div className="channel-container">
                        <Title>{name}</Title>
                        <Name>{`${subscriberCount} Subscribers`}</Name>
                        <Name>{description}</Name>
                      </div>
                    </ProfileContainer>
                  </VideoDetailsLightContainer>
                )}
                {isFailure ? (
                  <FailureViewContainer>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                      className="failure"
                      alt="failure view"
                    />
                    <h1 className="failure-msg">OOPS! Something Went Wrong</h1>
                    <p className="failure-desc">
                      We are having some trouble to complete your request.
                      <br />
                      Please try again.
                    </p>
                    <RetryBtn type="button" onClick={this.onClickRetry}>
                      Retry
                    </RetryBtn>
                  </FailureViewContainer>
                ) : null}
              </div>
            </VideoDetailsMainContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default VideoDetails

import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import NxtwatchContext from '../../context/NxtwatchContext'

import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideoItem from '../GamingVideoItem'

import {
  LightMainContainer,
  LightContentContainer,
  HomeMainContainer,
  VideoListContainer,
  BannerContainer,
  PremiumPlansContainer,
  PremiumBtn,
  FailureViewContainer,
  RetryBtn,
} from './styledComponents'

import './index.css'

class Gaming extends Component {
  state = {
    isLoading: true,
    videosList: [],
    showBanner: true,
    isFailure: false,
  }

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    try {
      const jwtToken = Cookies.get('jwt_token')

      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }

      const response = await fetch(
        `https://apis.ccbp.in/videos/gaming`,
        options,
      )
      const data = await response.json()

      const updatedList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      if (response.ok === true) {
        this.onSuccess(updatedList)
      }
    } catch (e) {
      this.onFailure()
    }
  }

  onFailure = () => {
    this.setState({
      isLoading: false,
      isFailure: true,
    })
  }

  onSuccess = updatedList => {
    this.setState({
      isLoading: false,
      videosList: updatedList,
    })
  }

  onClickBannerClose = () => {
    this.setState({
      showBanner: false,
    })
  }

  onClickRetry = () => {
    this.setState({
      isLoading: true,
    })
    this.getGamingData()
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value
          const {videosList, showBanner, isLoading, isFailure} = this.state

          const isDarkMode = isDark ? 'dark-mode' : null

          return (
            <HomeMainContainer isDark={isDark} data-testid="gaming">
              <Header />
              <LightMainContainer isDark={isDark}>
                <div className="light-sidebar-and-content-container">
                  <SideBar />
                  {isLoading ? (
                    <LightContentContainer
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
                    </LightContentContainer>
                  ) : (
                    <LightContentContainer isDark={isDark} data-testid="gaming">
                      <h1 className={`${isDarkMode} `}>
                        <FaFire className={`saved-videos-icon`} /> Gaming
                      </h1>
                      {showBanner ? (
                        <BannerContainer data-testid="banner">
                          <PremiumPlansContainer>
                            <img
                              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                              className="logo"
                              alt="nxt watch logo"
                            />
                            <p className="premium-desc">
                              Buy Nxt Watch Premium prepaid plans with UPI
                            </p>
                            <PremiumBtn>GET IT NOW</PremiumBtn>
                          </PremiumPlansContainer>
                          <PremiumPlansContainer>
                            <button
                              className="banner-close-btn"
                              type="button"
                              onClick={this.onClickBannerClose}
                              data-testid="close"
                            >
                              <AiOutlineClose />
                            </button>
                          </PremiumPlansContainer>
                        </BannerContainer>
                      ) : null}

                      {isFailure ? (
                        <FailureViewContainer>
                          <img
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                            className="failure"
                            alt="failure view"
                          />
                          <h1 className="failure-msg">
                            OOPS! Something Went Wrong
                          </h1>
                          <p className="failure-desc">
                            We are having some trouble to complete your request.
                            <br />
                            Please try again.
                          </p>
                          <RetryBtn type="button" onClick={this.onClickRetry}>
                            Retry
                          </RetryBtn>
                        </FailureViewContainer>
                      ) : (
                        <VideoListContainer>
                          {videosList.map(eachVideo => (
                            <GamingVideoItem
                              videoDetails={eachVideo}
                              key={eachVideo.id}
                            />
                          ))}
                        </VideoListContainer>
                      )}
                    </LightContentContainer>
                  )}
                </div>
              </LightMainContainer>
            </HomeMainContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Gaming

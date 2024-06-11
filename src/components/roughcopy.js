// home DarkHome

renderDarkHome = () => {
  const {searchInput, videosList, showBanner, isLoading, isFailure} = this.state
  return (
    <DarkMainContainer>
      <div className="dark-sidebar-and-content-container">
        <SideBar />
        {isLoading ? (
          <DarkContentContainer
            className="loader-container"
            data-testid="loader"
          >
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </DarkContentContainer>
        ) : (
          <DarkContentContainer>
            {showBanner ? (
              <BannerContainer data-testid="banner">
                <PremiumPlansContainer>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    className="logo"
                    alt="logo"
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
            <DarkSearchInputContainer>
              <input
                type="search"
                value={searchInput}
                onChange={this.onChangeUsername}
                placeholder="Search"
                className="search-el"
              />
              <AiOutlineSearch className="search-icon" />
            </DarkSearchInputContainer>

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
            ) : (
              <VideoListContainer>
                {videosList.map(eachVideo => (
                  <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
                ))}
              </VideoListContainer>
            )}

            {videosList.length === 0 ? (
              <FailureViewContainer>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  className="failure"
                  alt="no videos"
                />
                <h1 className="failure-msg">No search results found</h1>
                <p className="failure-desc">
                  Try different key words or remove search filter
                </p>
                <RetryBtn type="button" onClick={this.onClickRetry}>
                  Retry
                </RetryBtn>
              </FailureViewContainer>
            ) : (
              <VideoListContainer>
                {videosList.map(eachVideo => (
                  <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
                ))}
              </VideoListContainer>
            )}
          </DarkContentContainer>
        )}
      </div>
    </DarkMainContainer>
  )
}

// home light

renderLightHome = () => {
  const {searchInput, videosList, showBanner, isLoading, isFailure} = this.state
  return (
    <LightMainContainer>
      <div className="light-sidebar-and-content-container">
        <SideBar />
        {isLoading ? (
          <LightContentContainer
            className="loader-container"
            data-testid="loader"
          >
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </LightContentContainer>
        ) : (
          <LightContentContainer>
            {showBanner ? (
              <BannerContainer data-testid="banner">
                <PremiumPlansContainer>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    className="logo"
                    alt="logo"
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
            <SearchInputContainer>
              <input
                type="search"
                value={searchInput}
                onChange={this.onChangeUsername}
                placeholder="Search"
                className="search-el"
              />
              <button
                className="search-btn"
                type="button"
                onClick={this.onSearchButton}
                data-testid="searchButton"
              >
                <AiOutlineSearch className="search-icon" />
              </button>
            </SearchInputContainer>

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
            ) : (
              <VideoListContainer>
                {videosList.map(eachVideo => (
                  <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
                ))}
              </VideoListContainer>
            )}

            {videosList.length === 0 ? (
              <FailureViewContainer>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  className="failure"
                  alt="no videos"
                />
                <h1 className="failure-msg">No search results found</h1>
                <p className="failure-desc">
                  Try different key words or remove search filter
                </p>
                <RetryBtn type="button" onClick={this.onClickRetry}>
                  Retry
                </RetryBtn>
              </FailureViewContainer>
            ) : (
              <VideoListContainer>
                {videosList.map(eachVideo => (
                  <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
                ))}
              </VideoListContainer>
            )}
          </LightContentContainer>
        )}
      </div>
    </LightMainContainer>
  )
}

// videoItem

const VideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, name, profileImgUrl, viewCount, publishedAt} =
    videoDetails

  const time = `${formatDistanceToNow(new Date(publishedAt)).slice(6)} ago`

  return (
    <Link className="link-style" to={`/videos/${id}`}>
      <VideoItemContainer>
        <div>
          <img src={thumbnailUrl} className="thumbnail" alt="video thumbnail" />
        </div>
        <div className="profile-url-container">
          <img src={profileImgUrl} className="profile" alt={name} />
          <div className="video-details-container">
            <Title>{title}</Title>
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
}

// sideBar

const renderLightSideBar = () => (
  <LightSidebarContainer>
    <TabListContainer>
      {activeTabOptions.map(eachTab => (
        <TabItem
          tabDetails={eachTab}
          activeTabId={activeTabId}
          key={eachTab.id}
          onClickTab={this.onClickTab}
        />
      ))}
    </TabListContainer>
    <ContactUsContainer>
      <h3>CONTACT US</h3>
      <SocialMediaContainer>
        <SocialMediaLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <SocialMediaLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <SocialMediaLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </SocialMediaContainer>
      <p>
        Enjoy! Now to see your <br />
        channels and <br />
        recommendations!
      </p>
    </ContactUsContainer>
  </LightSidebarContainer>
)

const renderDarkSideBar = () => (
  <LightSidebarContainer>
    <TabListContainer>
      {activeTabOptions.map(eachTab => (
        <TabItem
          tabDetails={eachTab}
          activeTabId={activeTabId}
          key={eachTab.id}
          onClickTab={this.onClickTab}
        />
      ))}
    </TabListContainer>
    <ContactUsContainer>
      <h3>CONTACT US</h3>
      <SocialMediaContainer>
        <SocialMediaLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <SocialMediaLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <SocialMediaLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </SocialMediaContainer>
      <p>
        Enjoy! Now to see your <br />
        channels and <br />
        recommendations!
      </p>
    </ContactUsContainer>
  </LightSidebarContainer>
)

return isDark ? renderDarkSideBar() : renderLightSideBar()

/// tabitem

const {tabDetails, activeTabId, onClickTab} = props
const {id, displayText, path} = tabDetails

const onClickTabItem = () => {
  onClickTab(id)
}

const renderIcon = () => {
  const activeIconClassName = activeTabId === id ? 'active-icon' : null

  switch (id) {
    case 'HOME':
      return <IoMdHome className={`${activeIconClassName} icon`} />
    case 'TRENDING':
      return <FaFire className={`${activeIconClassName} icon`} />
    case 'GAMING':
      return <SiYoutubegaming className={`${activeIconClassName} icon`} />
    case 'SAVED':
      return <RiPlayListAddLine className={`${activeIconClassName} icon`} />
    default:
      return null
  }
}
const activeTabClassName = activeTabId === id ? 'active-tab' : null

return (
  <Link className="link-style" to={path}>
    <li onClick={onClickTabItem} className={`${activeTabClassName} tab`}>
      {renderIcon()}
      <p>{displayText}</p>
    </li>
  </Link>
)

// trending

import {Component} from 'react'
import Cookies from 'js-cookie'
import NxtwatchContext from '../../context/NxtwatchContext'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

import {
  DarkMainContainer,
  LightMainContainer,
  LightContentContainer,
  HomeMainContainer,
  VideoListContainer,
} from './styledComponents'

import './index.css'

class Trending extends Component {
  state = {
    isLoading: true,
    videosList: [],
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(
      `https://apis.ccbp.in/videos/trending`,
      options,
    )
    const data = await response.json()
    console.log(data.total)

    const updatedList = data.videos.map(eachVideo => ({
      id: eachVideo.id,
      title: eachVideo.title,
      thumbnailUrl: eachVideo.thumbnail_url,
      name: eachVideo.channel.name,
      profileImgUrl: eachVideo.channel.profile_image_url,
      viewCount: eachVideo.view_count,
      publishedAt: eachVideo.published_at,
    }))

    if (response.ok === true) {
      this.onSuccess(updatedList)
    }
  }

  onSuccess = updatedList => {
    this.setState({
      isLoading: false,
      videosList: updatedList,
    })
  }

  renderLightHome = () => {
    const {videosList} = this.state
    return (
      <LightMainContainer>
        <div className="light-sidebar-and-content-container">
          <SideBar />
          <LightContentContainer>
            <VideoListContainer>
              {videosList.map(eachVideo => (
                <VideoItem videoDetails={eachVideo} key={eachVideo.id} />
              ))}
            </VideoListContainer>
          </LightContentContainer>
        </div>
      </LightMainContainer>
    )
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeMainContainer>
              <Header />
              {isDark ? this.renderDarkHome() : this.renderLightHome()}
            </HomeMainContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Trending

// gaming

import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose} from 'react-icons/ai'
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
  }

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(`https://apis.ccbp.in/videos/gaming`, options)
    const data = await response.json()
    console.log(data.total)

    const updatedList = data.videos.map(eachVideo => ({
      id: eachVideo.id,
      title: eachVideo.title,
      thumbnailUrl: eachVideo.thumbnail_url,
      viewCount: eachVideo.view_count,
    }))

    if (response.ok === true) {
      this.onSuccess(updatedList)
    }
  }

  onSuccess = updatedList => {
    this.setState({
      isLoading: false,
      videosList: updatedList,
    })
  }

  renderLightHome = () => {
    const {videosList} = this.state
    return (
      <LightMainContainer>
        <div className="light-sidebar-and-content-container">
          <SideBar />
          <LightContentContainer>
            <VideoListContainer>
              {videosList.map(eachVideo => (
                <GamingVideoItem videoDetails={eachVideo} key={eachVideo.id} />
              ))}
            </VideoListContainer>
          </LightContentContainer>
        </div>
      </LightMainContainer>
    )
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeMainContainer>
              <Header />
              {isDark ? this.renderDarkHome() : this.renderLightHome()}
            </HomeMainContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default Gaming

// header

import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import NxtwatchContext from '../../context/NxtwatchContext'

import './index.css'

import {
  DarkModeHeader,
  LightModeHeader,
  NavListContainer,
  ImageButton,
  DarkButton,
  LightButton,
} from './styledComponents'

const Header = props => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value

      const onClickTheme = () => {
        changeTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const renderDarkHeader = () => (
        <DarkModeHeader>
          <Link className="link-style" to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              className="logo-img"
              alt="website logo"
            />
          </Link>
          <NavListContainer>
            <li>
              <ImageButton
                type="button"
                onClick={onClickTheme}
                data-testid="theme"
              >
                <FiSun className="sun" />
              </ImageButton>
            </li>

            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                className="profile-img"
                alt="profile"
              />
            </li>

            <li>
              <Popup
                modal
                trigger={<DarkButton type="button">Logout</DarkButton>}
              >
                {close => (
                  <div className="dark-popup-container">
                    <p className="confirmation">
                      Are you sure, you want to logout
                    </p>
                    <button
                      className="dark-cancel-btn"
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button
                      className="light-confirm-btn"
                      type="button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </button>
                  </div>
                )}
              </Popup>
            </li>
          </NavListContainer>
        </DarkModeHeader>
      )

      const renderLightHeader = () => (
        <LightModeHeader>
          <Link className="link-style" to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              className="logo-img"
              alt="website logo"
            />
          </Link>
          <NavListContainer>
            <li>
              <ImageButton
                type="button"
                onClick={onClickTheme}
                data-testid="theme"
              >
                <FaMoon className="moon" />
              </ImageButton>
            </li>

            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                className="profile-img"
                alt="profile"
              />
            </li>

            <li>
              <Popup
                modal
                trigger={<LightButton type="button">Logout</LightButton>}
              >
                {close => (
                  <div className="light-popup-container">
                    <p className="confirmation">
                      Are you sure, you want to logout
                    </p>
                    <button
                      className="light-cancel-btn"
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button
                      className="light-confirm-btn"
                      type="button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </button>
                  </div>
                )}
              </Popup>
            </li>
          </NavListContainer>
        </LightModeHeader>
      )

      return isDark ? renderDarkHeader() : renderLightHeader()
    }}
  </NxtwatchContext.Consumer>
)

export default withRouter(Header)




// header


(
        <DarkModeHeader isDark={isDark}>
          <Link className="link-style" to="/">
            <img src={chooseLogo} className="logo-img" alt="website logo" />
          </Link>
          <NavListContainer>
            <li>
              <ImageButton
                type="button"
                onClick={onClickTheme}
                data-testid="theme"
              >
                {themeBtn}
              </ImageButton>
            </li>

            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                className="profile-img"
                alt="profile"
              />
            </li>

            <li>
              <Popup
                modal
                trigger={
                  <DarkButton type="button" isDark={isDark}>
                    Logout
                  </DarkButton>
                }
              >
                {close => (
                  <div className="dark-popup-container">
                    <p className="confirmation">
                      Are you sure, you want to logout
                    </p>
                    <button
                      className="dark-cancel-btn"
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </button>
                    <button
                      className="light-confirm-btn"
                      type="button"
                      onClick={onClickLogout}
                    >
                      Confirm
                    </button>
                  </div>
                )}
              </Popup>
            </li>
          </NavListContainer>
        </DarkModeHeader>
      )

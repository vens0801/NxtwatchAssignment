import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import NxtwatchContext from '../../context/NxtwatchContext'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

import {
  LightMainContainer,
  LightContentContainer,
  HomeMainContainer,
  SearchInputContainer,
  VideoListContainer,
  BannerContainer,
  PremiumPlansContainer,
  PremiumBtn,
  FailureViewContainer,
  RetryBtn,
} from './styledComponents'

import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    searchInput: '',
    videosList: [],
    showBanner: true,
    isFailure: false,
  }

  componentDidMount() {
    this.getHomeData()
  }

  getHomeData = async () => {
    try {
      const {searchInput} = this.state
      const jwtToken = Cookies.get('jwt_token')

      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }

      const response = await fetch(
        `https://apis.ccbp.in/videos/all?search=${searchInput}`,
        options,
      )
      const data = await response.json()

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

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
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
    this.getHomeData()
  }

  onSearchButton = () => {
    this.getHomeData()
  }

  render() {
    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value
          const {searchInput, videosList, showBanner, isLoading, isFailure} =
            this.state

          return (
            <HomeMainContainer isDark={isDark} data-testid='home'>
              <Header />
              <LightMainContainer isDark={isDark}>
                <div className='light-sidebar-and-content-container'>
                  <SideBar />
                  {isLoading ? (
                    <LightContentContainer
                      className='loader-container'
                      data-testid='loader'
                      isDark={isDark}
                    >
                      <Loader
                        type='ThreeDots'
                        color='#ffffff'
                        height='50'
                        width='50'
                      />
                    </LightContentContainer>
                  ) : (
                    <LightContentContainer isDark={isDark}>
                      {showBanner ? (
                        <BannerContainer data-testid='banner'>
                          <PremiumPlansContainer>
                            <img
                              src='https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                              className='logo'
                              alt='nxt watch logo'
                            />
                            <p className='premium-desc'>
                              Buy Nxt Watch Premium prepaid plans with UPI
                            </p>
                            <PremiumBtn>GET IT NOW</PremiumBtn>
                          </PremiumPlansContainer>
                          <PremiumPlansContainer>
                            <button
                              className='banner-close-btn'
                              type='button'
                              onClick={this.onClickBannerClose}
                              data-testid='close'
                            >
                              <AiOutlineClose />
                            </button>
                          </PremiumPlansContainer>
                        </BannerContainer>
                      ) : null}
                      <SearchInputContainer>
                        <input
                          type='search'
                          value={searchInput}
                          onChange={this.onChangeSearch}
                          placeholder='Search'
                          className='search-el'
                        />
                        <button
                          className='search-btn'
                          type='button'
                          onClick={this.onSearchButton}
                          data-testid='searchButton'
                        >
                          <AiOutlineSearch className='search-icon' />
                        </button>
                      </SearchInputContainer>

                      {isFailure ? (
                        <FailureViewContainer>
                          <img
                            src='https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                            className='failure'
                            alt='failure view'
                          />
                          <h1 className='failure-msg'>
                            OOPS! Something Went Wrong
                          </h1>
                          <p className='failure-desc'>
                            We are having some trouble to complete your request.
                            <br />
                            Please try again.
                          </p>
                          <RetryBtn type='button' onClick={this.onClickRetry}>
                            Retry
                          </RetryBtn>
                        </FailureViewContainer>
                      ) : (
                        <VideoListContainer>
                          {videosList.map(eachVideo => (
                            <VideoItem
                              videoDetails={eachVideo}
                              key={eachVideo.id}
                            />
                          ))}
                        </VideoListContainer>
                      )}

                      {videosList.length === 0 ? (
                        <FailureViewContainer>
                          <img
                            src='https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
                            className='failure'
                            alt='no videos'
                          />
                          <h1 className='failure-msg'>
                            No search results found
                          </h1>
                          <p className='failure-desc'>
                            Try different key words or remove search filter
                          </p>
                          <RetryBtn type='button' onClick={this.onClickRetry}>
                            Retry
                          </RetryBtn>
                        </FailureViewContainer>
                      ) : (
                        <ul>
                          {videosList.map(eachVideo => (
                            <VideoItem
                              videoDetails={eachVideo}
                              key={eachVideo.id}
                            />
                          ))}
                        </ul>
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

export default Home

import styled from 'styled-components'

export const LightMainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  height: 100vh;
`
export const LightContentContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  width: 100%;
  padding: 25px;
`

export const HomeMainContainer = styled.div`
  height: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`

export const VideoListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`

export const PremiumPlansContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const PremiumBtn = styled.button`
  border: 2px solid black;
  width: 120px;
  height: 36px;
  background-color: white;
  font-weight: 600;
  align-self: flex-start;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RetryBtn = styled.button`
  color: white;
  background-color: #0b69ff;
  border-width: 0px;
  border-radius: 6px;
  height: 36px;
  width: 130px;
  margin: 25px;
  cursor: pointer;
`

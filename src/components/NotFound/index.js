import Header from '../Header'
import SideBar from '../SideBar'

import NxtwatchContext from '../../context/NxtwatchContext'

import {
  NotfoundContainer,
  NotfoundImage,
  NotFoundContentContainer,
  ContentContainer,
  Heading,
  Paragraph,
} from './styledComponents'

const NotFound = () => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark} = value
      const chooseImage = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <NotfoundContainer isDark={isDark}>
          <Header />
          <NotFoundContentContainer isDark={isDark}>
            <SideBar />
            <ContentContainer isDark={isDark}>
              <NotfoundImage src={chooseImage} alt="not found" />
              <Heading isDark={isDark}>Page Not Found</Heading>
              <Paragraph isDark={isDark}>
                we are sorry, the page you requested could not be found.
              </Paragraph>
            </ContentContainer>
          </NotFoundContentContainer>
        </NotfoundContainer>
      )
    }}
  </NxtwatchContext.Consumer>
)

export default NotFound

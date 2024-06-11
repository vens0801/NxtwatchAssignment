import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import TabItem from '../TabItem'

import NxtwatchContext from '../../context/NxtwatchContext'

import {
  LightSidebarContainer,
  DarkSidebarContainer,
  TabListContainer,
  ContactUsContainer,
  SocialMediaContainer,
  SocialMediaLogo,
} from './styledComponents'

const activeTabOptions = [
  {
    id: 'HOME',
    displayText: 'Home',
    path: '/',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    path: '/trending',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    path: '/gaming',
  },
  {
    id: 'SAVED',
    displayText: 'Saved Videos',
    path: '/saved-videos',
  },
]

class SideBar extends Component {
  state = {
    activeTabId: activeTabOptions[0].id,
  }

  onClickTab = id => {
    this.setState({
      activeTabId: id,
    })
  }

  render() {
    const {activeTabId} = this.state

    return (
      <NxtwatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <LightSidebarContainer isDark={isDark}>
              <TabListContainer>
                {activeTabOptions.map(eachTab => (
                  <TabItem
                    tabDetails={eachTab}
                    activeTabId={activeTabId}
                    key={eachTab.id}
                  />
                ))}
              </TabListContainer>
              <ContactUsContainer isDark={isDark}>
                <p>CONTACT US</p>
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
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </ContactUsContainer>
            </LightSidebarContainer>
          )
        }}
      </NxtwatchContext.Consumer>
    )
  }
}

export default withRouter(SideBar)

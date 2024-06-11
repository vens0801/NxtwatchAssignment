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
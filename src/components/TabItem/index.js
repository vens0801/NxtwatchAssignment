import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddLine} from 'react-icons/ri'

import NxtwatchContext from '../../context/NxtwatchContext'

import './index.css'

const TabItem = props => (
  <NxtwatchContext.Consumer>
    {value => {
      const {isDark} = value

      const isDarkMode = isDark ? 'dark-mode' : 'light-mode'

      const {tabDetails, activeTabId} = props
      const {id, displayText, path} = tabDetails

      const onClickTabItem = () => {}

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
            return (
              <RiPlayListAddLine className={`${activeIconClassName} icon`} />
            )
          default:
            return null
        }
      }
      const activeTabClassName = activeTabId === id ? 'active-tab' : null

      return (
        <Link className="link-style" to={path}>
          <li className={`${activeTabClassName} tab`}>
            {renderIcon()}
            <p className={isDarkMode}>{displayText}</p>
          </li>
        </Link>
      )
    }}
  </NxtwatchContext.Consumer>
)
export default TabItem

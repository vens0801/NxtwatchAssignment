import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import NxtwatchContext from '../../context/NxtwatchContext'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'

import {HomeContainer} from './styledComponents'

import './index.css'

class CopyHome extends Component {
    state = {
    isLoading: true,
    searchInput: '',
    videosList: [],
    showBanner: true,
    isFailure: false,
  }
}

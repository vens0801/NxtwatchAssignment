import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  BgContainer,
  InputContainer,
  Button,
  Form,
  CheckboxContainer,
} from './styledComponents'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  postLoginCredentials = async () => {
    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    }

    if (response.status === 400) {
      this.onFailureLogin(data.error_msg)
    }
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    history.replace('/')
    Cookies.set('jwt_token', jwtToken, {expires: 7})
    this.setState({
      username: '',
      password: '',
      errorMsg: '',
    })
  }

  onFailureLogin = errorMsg => {
    this.setState({
      errorMsg: `*${errorMsg}`,
    })
  }

  onSubmitLoginForm = event => {
    event.preventDefault()
    this.postLoginCredentials()
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const passwordType = showPassword ? 'text' : 'password'

    return (
      <BgContainer>
        <Form onSubmit={this.onSubmitLoginForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="logo-img"
            alt="website logo"
          />
          <InputContainer>
            <label htmlFor="userName">USERNAME</label>
            <input
              type="text"
              value={username}
              id="userName"
              onChange={this.onChangeUsername}
              placeholder="Username"
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="passWord">PASSWORD</label>
            <input
              type={passwordType}
              value={password}
              id="passWord"
              onChange={this.onChangePassword}
              placeholder="Password"
            />
          </InputContainer>
          <CheckboxContainer>
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              value={showPassword}
              onChange={this.onClickShowPassword}
            />
            <label htmlFor="showPassword">Show Password</label>
          </CheckboxContainer>
          <Button type="submit">Login</Button>
          <p className="error-msg">{errorMsg}</p>
        </Form>
      </BgContainer>
    )
  }
}
export default Login

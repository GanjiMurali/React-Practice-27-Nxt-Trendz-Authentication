// Write your JS code here

import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMessage: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('JWT-Token', jwtToken, {expires: 30})

    history.replace('/')
  }

  getErrorMsg = errorMsg => {
    this.setState({showSubmitError: true, errorMessage: errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.getErrorMsg(data.error_msg)
    }
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  passwordInput = event => {
    this.setState({password: event.target.value})
  }

  userNameField = () => (
    <>
      <label className="user-name" htmlFor="username">
        USERNAME
      </label>
      <input
        className="user-name-input"
        type="text"
        id="username"
        placeholder="Username"
        onChange={this.onChangeUserInput}
      />
    </>
  )

  passwordField = () => (
    <>
      <label className="password" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input"
        placeholder="Password"
        onChange={this.passwordInput}
      />
    </>
  )

  render() {
    const {showSubmitError, errorMessage} = this.state

    const getCookiesData = Cookies.get('JWT-Token')
    if (getCookiesData !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
          className="login-page-logo"
        />
        <div className="login-card">
          <form onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-name"
            />
            <div className="user-name-container">{this.userNameField()}</div>
            <br />
            <div className="password-container">{this.passwordField()}</div>
            <br />
            <button className="login-button" type="submit">
              Login
            </button>
            {showSubmitError && (
              <p className="error-massage">*{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm

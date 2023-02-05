// Write your JS code here
import './index.css'

import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const Header = props => {
  const {history} = props

  const onLogOutButton = () => {
    Cookies.remove('JWT-Token')
    history.push('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />

        <div className="link-container">
          <ul className="nav-menu">
            <Link to="/" className="nav-link">
              <li>Home</li>
            </Link>
            <Link to="/products" className="nav-link">
              <li>Products</li>
            </Link>
            <Link to="/cart" className="nav-link">
              <li>Cart</li>
            </Link>
          </ul>
          <button
            onClick={onLogOutButton}
            type="button"
            className="logout-desktop-btn"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)

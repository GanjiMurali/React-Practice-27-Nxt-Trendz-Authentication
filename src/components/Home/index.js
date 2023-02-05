// Write your JS code here

import './index.css'

import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

class Home extends Component {
  render() {
    const accessToken = Cookies.get('JWT-Token')
    if (accessToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-data">
            <h1 className="home-data-heading">Clothes That Get YOU Noticed</h1>
            <p className="home-data-paragraph">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way.
            </p>
            <button className="home-page-button" type="button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="dresses to be noticed"
            className="home-desktop-img"
          />
        </div>
      </>
    )
  }
}

export default Home

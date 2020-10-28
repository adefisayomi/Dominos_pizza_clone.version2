import React from 'react'
import { homeNav } from "./Navigation"
import Header from './Header'
import "./styles/home.css"
import Footer from './Footer'
import UploadFoodButton from "./upload-food/UploadFoodButton"
import { useHistory } from 'react-router-dom'
import { UseStateValue } from "../components/contexts/StateProvider"
function Home() {
const {user} = UseStateValue()
const history = useHistory()

    return (
        <div className="home__wrapper">
         <Header navs = {homeNav}  />
         <div className="home">
        <div className="home__header">
          <span className="home__h1">START YOUR ORDER</span>
          <div className="">
             <button onClick = {user ? () => history.push('/menu') : () => history.push('/store/location')}>DELIVERY</button>
          <span className="home__span">or</span>
          <button onClick = {user ? () => history.push('/menu') : () => history.push('/store/location')} >CARRYOUT</button>
        
          </div>
         </div>

        <div className="home__banner">
          <div className="banner__main">
            <img
              src="https://cache.dominos.com/wam/prod/market/NG/_en/images/promo/363ff5f2-5be4-4a9d-84d5-431f0fb23dd8.jpg"
              alt="banner1"
            />
          </div>
          <div className="banner__aside">
            <img
              src="https://cache.dominos.com/wam/prod/market/NG/_en/images/promo/cdf0cdd2-53ba-4833-821a-6783e0d490e8.jpg"
              alt="banner2"
            />
            <img
              src="https://cache.dominos.com/wam/prod/market/NG/_en/images/promo/33f0fca8-be76-4a8b-9f33-09772934a76b.jpg"
              alt="banner3"
            />
          </div>
        </div>
        <div className="banner__notice">
          <img
            src="https://cache.dominos.com/wam/prod/market/NG/_en/images/promo/9de541a0-c8a6-4f43-9fab-f5f79fa19334.jpg"
            alt="banner4"
          />
        </div>
        <div className="home__deliveryTime">
          <span className="home__notice delivery__span1">
            Current Average Delivery Times
          </span>
          <span className="delivery__span2">2</span>
          <span className="delivery__span3">5</span>
          <span className="delivery__span4">mins</span>
        </div>
      </div>
      <UploadFoodButton/>
        <Footer />
        </div>
    )
}

export default Home

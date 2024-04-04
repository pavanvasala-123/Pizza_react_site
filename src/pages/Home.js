import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import "../styles/Home.css"
import BannerImage from "../assets/pizza.jpeg"


const Home = () => {
  return (
    <div className='home-continer'>
      <div className='home' style = {{backgroundImage: `url(${BannerImage})`}}>
            <div className='home_card-con'>
                <h1>pavan Pizza Hut</h1>
                <p>Taste Matters</p>
                
                <NavLink to = "/menu">
                   <button className="ordernow_btn">Order Now</button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Home

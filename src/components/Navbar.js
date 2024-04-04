import React from 'react'
import Logo from "../assets/pizzaLogo.png"
import "../styles/navbar.css"
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = (props) => {
 const {size} = props
    const [openlinks,setopenlinks] = useState(false)
    const togglenavbar = ()=>{
        setopenlinks(!openlinks)
    }
  return (
    <div>
      <nav className='navbar'>
        <div>
            <img src = {Logo} alt = "logo" className='logo '/>
        </div>
        <div className='nav-links-con'>
        <ul>
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/menu">Menu</NavLink>
            <NavLink to = "about">About us</NavLink>
            <NavLink to = "contact">Contact</NavLink>
            <span>
            <ShoppingCartIcon className='cart'/>
            <p>{size}</p>
            </span>
            
        </ul>
        <button className ="toggle_btn" onClick={togglenavbar}>
            <MenuIcon/>
        </button>
        </div>
      </nav>
      <ul className='hidden_links'  id = {openlinks ? "open" : "close"}>
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/menu">Menu</NavLink>
            <NavLink to = "about">About us</NavLink>
            <NavLink to = "contact">Contact</NavLink>
            
        </ul>
    </div>
  )
}

export default Navbar

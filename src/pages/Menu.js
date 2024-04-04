import React, { useState } from 'react'
import "../styles/menu.css"
import { Foodmenu } from '../MenuList/Menulist'
import Addtocart from './addtocart'

const Menu = (addToCart) => {
//   const [cart,setCart] = useState([])
//  const handleclick = (data) =>{
//    setCart(data)
   
//  }
    
  return (
    <div>
        <h1>Our Menu</h1>
    <div className='menu-container'>
       {
         Foodmenu.map((eachObj)=>{
           return <li key = {eachObj._id} className ="menu_items_container">
                    <div className='menuItem'>
                        <img src = {eachObj.image} alt = {eachObj.name}/>
                        <h4>{eachObj.name}</h4>
                        <p className='price'>Rs: {eachObj.price}</p>
                        <p className='description'>{eachObj.description}</p>
                        <button className='cart_button'>Add to cart</button>
                    </div>
               </li>
         })
       }
    </div>
    </div>
  )
}

export default Menu

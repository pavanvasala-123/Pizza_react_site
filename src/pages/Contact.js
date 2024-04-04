import React from 'react'
import "../styles/contact.css"
import pizzaLeft from "../assets/pizzaLeft.jpg"

const Contact = () => {
  return (
    <div className='contact'>
      <div className='left_side_conatner' style={{backgroundImage:`url(${pizzaLeft})`}}>
        
      </div>
      <div className='right_side_container'>
            <form>
                <div className='form_element'>
                      <label htmlFor='name'>Name : </label>
                      <input id ="name" type ="text" placeholder='Enter your name...' />
                </div>
                <div className='form_element'>
                      <label htmlFor='email'>Email : </label>
                      <input id ="email" type ="email" placeholder='Enter your email...' />
                </div>
                <div className='form_element'>
                      <label htmlFor='message' >Message : </label>
                      <input id = "message" type = "text" placeholder='Type Message Here...'/>
                </div>
                <button>Send Message</button>
            </form>
      </div>
      
    </div>
  )
}

export default Contact

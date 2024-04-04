import React from 'react'
import "../styles/footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
        <footer>
           <FacebookIcon className='icons' style={{href: "https://www.linkedin.com/in/pavan-kumar-vasala-470133171/"}} />
           <LinkedInIcon className='icons'/>
           <InstagramIcon className='icons'/>
        </footer>
        <span>
        {/* <CopyrightIcon/> */}
        <p>&copy; copyright2023
        </p>
        </span>
    </div>
  )
}

export default Footer

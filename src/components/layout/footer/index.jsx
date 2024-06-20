import React from 'react'
import { useLocation } from 'react-router-dom'

import './footer.scss'

const Footer = () => {

  const { pathname } = useLocation()
  if( pathname.includes("/admin")) {
    return <></>
  }
  
  return (
    <footer className='footer container'>
      <div className="footer__links row">
        <ul>
          <li>About Us</li>
          <li>Subscribe</li>
          <li>View More Products</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>Subscribe</li>
          <li>View More Products</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>Subscribe</li>
          <li>View More Products</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>Subscribe</li>
          <li>View More Products</li>
        </ul>
      </div>
      <hr />
      <div className="footer__desc">
        <p>@sherzodashurov/@copywriting</p>
      </div>
    </footer>
  )
}

export default Footer
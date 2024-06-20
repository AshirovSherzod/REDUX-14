import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import './header.scss'

const Header = () => {
  const { pathname } = useLocation()
  if( pathname.includes("/admin")) {
    return <></>
  }
  let token = localStorage.getItem("x-auth-token")
  return (
    <header>
      <nav className='nav row container'>
        <div className="nav__logo">
          <h1><NavLink to={"/"}>Logo</NavLink></h1>
        </div>
        <div className="nav__links row">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
          {
            token
              ?
              <NavLink to={'/admin/adminproducts'}>Admin</NavLink>
              :
              <></>
          }
        </div>
      </nav>
    </header>
  )
}

export default Header
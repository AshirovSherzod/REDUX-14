import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import './sidebar.scss'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <NavLink to={"/"}>
                    <h1>Logo</h1>
                </NavLink>
            </div>
            <div className="sidebar__links">
                <NavLink to={"createproduct"}>Create Product</NavLink>
                <NavLink to={"adminproducts"}>Products</NavLink>
            </div>

        </div>
    )
}

export default Sidebar 
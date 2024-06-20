import React from 'react'
import Sidebar from '../../components/sidebar'
import { Outlet } from 'react-router-dom'

import './admin.scss'

const Admin = () => {
  return (
    <main className='admin'>
      <Sidebar />
      <Outlet />
    </main>
  )
}

export default Admin
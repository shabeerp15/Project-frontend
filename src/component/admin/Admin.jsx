import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Topbar from './topbar/Topbar'
import './admin.css'
import Home from './pages/home/Home'
import UserList from './pages/userList/UserList'

export const Admin = () => {
  return (
    <>
      <Topbar />
      <div className="admin-container">
        <Sidebar />

        <Home/>
        <UserList/>
      </div>
    </>
  )
}

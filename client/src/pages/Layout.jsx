import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
      Layout
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
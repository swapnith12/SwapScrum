import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'

function Layout({children}) {
  return (
    <div className='min-w-full min-h-screen bg-blue-100'>
      <SideBar/>
      <TopBar/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout

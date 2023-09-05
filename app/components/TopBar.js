import React from 'react'

function TopBar() {
  return (
    <div className='h-12 ml-40 fixed bg-gradient-to-r from-purple-600 to-blue-500 w-full flex items-center justify-around
    '>
      <h1 className='flex items-center  text-xl h-12 text-white font-bold '>TopBar</h1>
      <input type='search' className='items-center'/>
    </div>
  )
}

export default TopBar

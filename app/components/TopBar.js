import React from 'react'
import {FcSearch} from 'react-icons/fc'
import {HiAtSymbol,HiBell} from 'react-icons/hi'

function TopBar() {
  return (
    <div className='h-12 ml-40 fixed bg-gradient-to-r from-purple-600 to-blue-500 w-full flex items-center justify-around pl-5 pr-5
    '>
      <div className='flex items-center'><FcSearch size={24}/>
      <input type='search' className='text-white items-center placeholder-white bg-transparent ml-1 p-1 focus:ring-0 outline-none' placeholder='search tasks...'/>
      </div>
      <div className='flex items-center space-x-5'>
         <HiAtSymbol className='text-white w-6 h-6' />
         <HiBell className='text-white w-6 h-6'/>
         <div className='flex items-center space-x-2'>
          <h4 className='text-white'>Mr.Scrum Master</h4>
          {/*https://randomuser.me/*/}
          <img src='https://randomuser.me/api/portraits/med/men/75.jpg' className='rounded-full' width={32}/>
         </div>
      </div>
    </div>
  )
}

export default TopBar

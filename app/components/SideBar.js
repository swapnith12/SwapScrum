import 'tailwindcss/tailwind.css'
import React from 'react'
import {FiUsers,FiSettings} from 'react-icons/fi'
import {BsDatabaseExclamation,BsCalendar2Date} from 'react-icons/bs'
import {HiOutlineDocumentReport} from 'react-icons/hi'


const SideBar = () => {
  return (
    <div className='fixed inset-y-0 left-0 min-h-screen bg-white w-40'>
      <h1 className='flex items-center justify-center text-xl h-12 bg-purple-600 text-white font-bold '>
        Swap Scrum</h1>
        <ul className='flex flex-col'>
            <li className='flex justify-center items-center flex-col py-5 font-bold border border-slate-100 hover:border-slate-800'>
             <FiUsers size={30}/>
             Manage
            </li>
            <li className='flex justify-center items-center flex-col py-5 text-purple-500 font-bold border border-slate-100 hover:border-slate-800'>
             <BsDatabaseExclamation size={30}/>
             Server
            </li>
            <li className='flex justify-center items-center flex-col py-5 text-blue-500 font-bold border border-slate-100 hover:border-slate-800'>
             <BsCalendar2Date size={30}/>
             Schedule
            </li>
            <li className='flex justify-center items-center flex-col py-5 text-yellow-500 font-bold border border-slate-100 hover:border-slate-800'>
             <HiOutlineDocumentReport size={30}/>
             Report
            </li>
            <li className='flex justify-center items-center flex-col py-5 text-red-500 font-bold border border-slate-100 hover:border-slate-800'>
             <FiSettings size={30}/>
             Settings
            </li>
        </ul>
    </div>
  )
}

export default SideBar;

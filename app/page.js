import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout'
import { LiaChevronDownSolid } from 'react-icons/lia'
import { GoPersonAdd } from 'react-icons/go'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Card from './components/Card'

import BoardData from './components/data/board_data'


export default function Home() {
  return (
    <Layout>
      <div className='p-10'>
        {/*Board Header*/}
        <div className='flex justify-between'>
          <div className='flex items-center'>
            <h1 className='font-bold text-xl'>Studio board</h1>
            <LiaChevronDownSolid className='w-8 h-8 ml-4 shadow-lg shadow-indigo-500/50 rounded-full' />
          </div>
          <div>
            <ul className='flex items-center space-x-2'>
              <li>
                <img src="https://randomuser.me/api/portraits/med/men/76.jpg" className='rounded-full w-9 h-9' />
              </li>
              <li>
                <img src="https://randomuser.me/api/portraits/med/men/90.jpg" className='rounded-full w-9 h-9' />
              </li>
              <li>
                <img src="https://randomuser.me/api/portraits/med/men/45.jpg" className='rounded-full w-9 h-9' />
              </li>
              <li>
                <button className='border-2 border-dashed border-gray-400 rounded flex items-center'>
                  <GoPersonAdd className='w-9 h-9 text-gray-500' />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/*Board Body*/}
        <div className='grid grid-cols-4 gap-5 my-5'>
        {BoardData.map((board,index)=>{
          return( 
          <div key={index}  className='bg-gray-100 p-3 rounded-md flex flex-col relative overflow-hidden'>
            <span className='w-full h-[5px] bg-gradient-to-r from-red-600 to-red-200 absolute inset-x-0 top-0'></span>
            <h4 className='flex justify-between items-center'>
              <span className='text-gray-600 text-2xl'>{board.name}</span>
              <BsThreeDotsVertical className='w-5 h-5 text-gray-500' />
            </h4>
            {board.items.length >0 && (
              board.items.map((item,index)=>{
                return <Card key={index} data={item}/>
              })
            )}
          </div>
          )
        })}
        </div>
      </div>
    </Layout>
  )
}

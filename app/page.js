import Head from 'next/head'
import Image from 'next/image'
import Layout from './components/Layout'
import { LiaChevronDownSolid } from 'react-icons/lia'
import {GoPersonAdd} from 'react-icons/go'


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
              <img src="https://randomuser.me/api/portraits/med/men/76.jpg" className='rounded-full w-9 h-9'/>
            </li>
            <li>
              <img src="https://randomuser.me/api/portraits/med/men/90.jpg" className='rounded-full w-9 h-9'/>
            </li>
            <li>
              <img src="https://randomuser.me/api/portraits/med/men/45.jpg" className='rounded-full w-9 h-9'/>
            </li>
            <li>
               <button className='border-2 border-dashed border-gray-400 rounded flex items-center'>
               <GoPersonAdd className='w-9 h-9 text-gray-500'/>
               </button>
            </li>
          </ul>
        </div>
        </div>
        {/*Board Body*/}
      </div>
    </Layout>
  )
}

import React from 'react'
import {BsChatSquareDots } from 'react-icons/bs'
import { GrAttachment, GrAddCircle } from 'react-icons/gr'

function Card() {
    return (
        <div className='bg-white rounded-md p-1 mt-3'>
            <label className='bg-gradient-to-r px-2 py-1 from-blue-500 to-blue-100 text-white text-sm'>
                Low Priority
            </label>
            <h5 className='text-md my-3 text-lg leading-6'>Testing Non Critical Features</h5>
            <div className='flex justify-between'>
                <div className='flex space-x-4 items-center'>
                    <span className='flex space-x-2 items-center'>
                        <BsChatSquareDots className='w-4 h-4 text-gray-400' />
                        <span className='text-gray-400'>1</span>
                    </span>
                    <span className='flex space-x-2 items-center'>
                        <GrAttachment className='w-4 h-4 text-gray-400' />
                        <span className='text-gray-400'>2</span>
                    </span>
                </div>
                <ul className='flex items-center space-x-3'>
                    <li>
                        <img src="https://randomuser.me/api/portraits/med/men/45.jpg" className='rounded-full w-7 h-7' />
                    </li>
                    <li>
                        <button className='rounded flex items-center'>
                            <GrAddCircle className='w-7 h-7 text-gray-200' />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card

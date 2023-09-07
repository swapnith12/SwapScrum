import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { BsChatSquareDots } from 'react-icons/bs'
import { GrAttachment, GrAddCircle } from 'react-icons/gr'

function Card({ data ,index}) {
  return (
    <Draggable draggableId={data.id.toString()} index={index}>
      {
        (provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className='bg-white rounded-md p-1 mt-3'>
            <label
              className={`bg-gradient-to-r px-2 py-1  text-white text-sm
                        ${data.priority == 0 ? 'from-blue-500 to-blue-200' :
                          data.priority == 1 ? 'from-green-500 to-green-200' :
                              'from-red-500 to-red-200'}`}>
              {data.priority == 0 ? 'Low Priority' : data.priority == 1 ? 'Medium Priority' : 'High Priority'}
            </label>
            <h5 className='text-md my-3 text-lg leading-6'>{data.title}</h5>
            <div className='flex justify-between'>
              <div className='flex space-x-4 items-center'>
                <span className='flex space-x-2 items-center'>
                  <BsChatSquareDots className='w-4 h-4 text-gray-400' />
                  <span className='text-gray-400'>{data.chat}</span>
                </span>
                <span className='flex space-x-2 items-center'>
                  <GrAttachment className='w-4 h-4 text-gray-400' />
                  <span className='text-gray-400'>{data.attachment}</span>
                </span>
              </div>
              <ul className='flex items-center space-x-3'>
                {data.assignees.map((asg, index) => {
                  return (
                    <li key={index}>
                      <img src={asg.avt} className='rounded-full w-7 h-7' />
                    </li>
                  )
                })}
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
    </Draggable>
  )
}

export default Card

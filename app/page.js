"use client";
import Layout from './components/Layout'
import { LiaChevronDownSolid } from 'react-icons/lia'
import { GoPersonAdd } from 'react-icons/go'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { GrAddCircle } from 'react-icons/gr'
import Card from './components/Card'
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import BoardData from './components/data/board_data'
import { useState } from 'react'


export default function Home() {
  const [boardData, setBoardData] = useState(BoardData);

  const onDragEnd=(re)=>{
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  }
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
            <DragDropContext onDragEnd={onDragEnd}>
            {boardData.map((board, bindex) => {
              return (
                <div key={board.name}>
                      <Droppable droppableId={bindex.toString()}>
                        {
                          (provided)=>(
                            <div ref={provided.innerRef} 
                            {...provided.droppableProps} 
                            className='bg-gray-100 p-3 rounded-md flex flex-col relative overflow-hidden'
                            >
                            <span className='w-full h-[5px] bg-gradient-to-r from-red-600 to-red-200 absolute inset-x-0 top-0'></span>
                            <h4 className='flex justify-between items-center'>
                              <span className='text-gray-600 text-2xl'>{board.name}</span>
                              <BsThreeDotsVertical className='w-5 h-5 text-gray-500' />
                            </h4>
                            {board.items.length > 0 &&
                                board.items.map((item, iIndex) => {
                                  return (
                                    <Card
                                      key={item.id}
                                      data={item}
                                      index={iIndex}
                                      className="m-3"
                                    />
                                  );
                                })}
                            <button className='flex justify-center items-center mt-6 space-x-2 text-lg'>
                              <span>Add User</span>
                              <GrAddCircle className='w-5 h-5 text-gray-500' />
                            </button>
                            {provided.placeholder}
                          </div>
                            )
                        }
                      </Droppable>
                      
                </div>
              )
            })}
            </DragDropContext>
          </div>
      </div>
    </Layout>
  )
}

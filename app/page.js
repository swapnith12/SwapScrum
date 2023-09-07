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


function createGuidId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default function Home() {
  const [boardData, setBoardData] = useState(BoardData);
  const [showForm, setShowForm] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);
  const [value, setValues] = useState({
    task: '',
    priority: '',
    assignee: ''
  })

  const onDragEnd = (re) => {
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

  const NewTask = (e, args) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * 3)
    const assignee = Math.floor(Math.random() * (80 - 70) + 70);
    const boardId = args;
    const item = {
      id: createGuidId(),
      title: value.task,
      priority: value.priority,
      chat: 0,
      attachment: 0,
      assignees: [`${value.assignee}`]
    }
    let newBoardData = [...boardData];
    newBoardData[boardId].items.push(item);
    setBoardData(newBoardData);
    setShowForm(false);
    setValues({ ...value, task: '', priority: '', assignee: '' })
  }

  const taskUpdate = (e) => {
    setValues({ ...value, task: e.target.value })
  }

  const priorityHandle = (e) => {
    setValues({ ...value, priority: e.target.value })
  }

  const assigneeUpdate = (e) => {
    setValues({ ...value, assignee: e.target.value })
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
                      (provided) => (
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
                          {provided.placeholder}
                          {
                            showForm && selectedBoard === bindex ? (
                              <div className="p-3">
                                <form onSubmit={(e)=>NewTask(e,bindex)} className="border-gray-300 rounded focus:ring-purple-400 w-full"
                                  data-id={bindex}
                                >
                                  <textarea rows={3} className="required" placeholder="Task info"
                                    onChange={taskUpdate} />
                                  <select className="form-control" id="priority" name="priority"
                                    onChange={priorityHandle}
                                  >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                  </select>
                                  <br />
                                  <select className="form-control" id="assignee" name="assignee"
                                    onChange={assigneeUpdate}
                                  >
                                    <option value="https://randomuser.me/api/portraits/med/men/75.jpg">
                                      Mr.1
                                    </option>
                                    <option value="https://randomuser.me/api/portraits/med/men/67.jpg">
                                      Mr.2
                                    </option>
                                    <option value="https://randomuser.me/api/portraits/med/men/79.jpg">
                                      Cocodile
                                    </option>
                                  </select>
                                  <button type='Submit' className='rounded flex items-center flex-justify-between'>
                                    Submit
                                  </button>
                                </form>
                              </div>
                            ) : (
                              <button
                                className="flex justify-center items-center my-3 space-x-2 text-lg"
                                onClick={() => { setSelectedBoard(bindex); setShowForm(true); }}
                              >
                                <span>Add Task</span>
                                <GrAddCircle className='w-5 h-5 text-gray-500' />
                              </button>
                            )
                          }
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
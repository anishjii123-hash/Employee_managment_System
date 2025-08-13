import React from 'react'
import Header from '../components/other/Header'
import CreateTask from '../components/other/CreateTask'
import AllTask from '../components/other/AllTask'

function AdminDashBoard(props) {
  return (
    <div className='h-screen w-full p-7'>
      <Header changeUser={props.changeUser} />
     <CreateTask/>
     <AllTask/>
    </div>
  )
}

export default AdminDashBoard

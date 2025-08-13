import React from 'react'
import Header from '../components/other/Header'
import TaskNumber from '../components/other/TaskNumber'
import TaskList from '../components/TaskList/TaskList'

function EmployeeDashBorard(props) {
  const employee = props.data;

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header changeUser={props.changeUser} name={employee?.firstname} />
      <TaskNumber data={employee} />
      <TaskList data={employee} />
    </div>
  )
}

export default EmployeeDashBorard;

import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen '>
        <Header />
        <TaskNumber />
        <TaskList />

    </div>
  )
}

export default EmployeeDashboard
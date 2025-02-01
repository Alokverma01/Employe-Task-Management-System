import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(props)
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen '>
      {/* <h1>{data.id}</h1> */}
        <Header />
        <TaskNumber />
        <TaskList />

    </div>
  )
}

export default EmployeeDashboard
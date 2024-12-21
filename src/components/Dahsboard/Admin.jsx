import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

const Admin = (props) => {
  return (
    <div className='p-8 h-screen w-full'>
        <Header changeUser = {props.changeUser} userName = {props.userName}></Header>
        <CreateTask />
        <AllTasks />
    </div>
  )
}

export default Admin
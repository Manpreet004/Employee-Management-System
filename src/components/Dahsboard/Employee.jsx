import React from 'react'
import Header from '../others/Header'
import TaskNumbers from '../others/TaskNumbers'
import Tasks from '../others/Tasks'

const Employee = (props) => {
  return (
    <div className='p-8 bg-[#1C1C1C] h-screen'>
      {/* <h1>{data.id}</h1> */}
      <Header changeUser = {props.changeUser} data = {props.data} userName = {props.userName}/>
      <TaskNumbers data = {props.data}/>
      <Tasks data = {props.data}/>
    </div>
  )
}

export default Employee
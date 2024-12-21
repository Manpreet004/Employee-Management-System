import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {
  const [userData,setuserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c]  mt-5 p-5 rounded h-64 hs overflow-auto'>
       <div className='border-2 border-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
           <h2 className='w-1/5'>Name</h2>
           <h3 className='w-1/5'>New Task</h3>
           <h5 className='w-1/5'> Active </h5>
           <h5 className='w-1/5'> Completed</h5>
           <h5 className='w-1/5'> Failed</h5>
        </div>
      <div className='h-[80%] overflow-auto hs'>
      {userData.map((elem,idx)=>{
          return(
            <div key={idx} className='border-2 border-emerald-500 mb-2  py-2 px-4 flex justify-between rounded overflow-hidden'>
              <h2 className='w-1/5 '>{elem.name}</h2>
              <h3 className='w-1/5 ' >{elem.taskcount.newTask}</h3>
              <h5 className='w-1/5 '> {elem.taskcount.active}</h5>
              <h5 className='w-1/5 '> {elem.taskcount.completed}</h5>
              <h5 className='w-1/5 '>{elem.taskcount.failed}</h5>
            </div>
          )
        })}
      </div>
       
       
    </div>
  )
}

export default AllTasks
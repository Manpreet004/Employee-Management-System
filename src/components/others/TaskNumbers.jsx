import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 mt-4'>
         <div className='p-8 bg-red-400 text-white w-[45%] rounded-lg '>
            <h1 className='text-3xl font-semibold'>{data.taskcount.active}</h1>
            <h2 className='text-xl font-medium'>Active Task</h2>
         </div>
        
         <div className='p-8 bg-green-400 text-white w-[45%] rounded-lg'>
            <h1 className='text-3xl font-semibold'>{data.taskcount.newTask}</h1>
            <h2 className='text-xl font-medium'>New Task</h2>
         </div>
         <div className='p-8 bg-blue-400 text-white w-[45%] rounded-lg'>
            <h1 className='text-3xl font-semibold'>{data.taskcount.completed}</h1>
            <h2 className='text-xl font-medium'>Completed Task</h2>
         </div>
         <div className='p-8 bg-yellow-400 text-white w-[45%] rounded-lg'>
            <h1 className='text-3xl font-semibold'>{data.taskcount.failed}</h1>
            <h2 className='text-xl font-medium'>Failed Task</h2>
         </div>
    </div>
  )
}

export default TaskNumbers
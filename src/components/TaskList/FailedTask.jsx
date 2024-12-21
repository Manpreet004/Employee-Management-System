import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=' p-4 flex-shrink-0 h-full w-[345px] bg-red-400 rounded-xl'>
           <div className='flex  justify-between items-center'>
             <h3 className='bg-red-600 px-4 py-2 rounded-lg text-sm'>{data.taskCategory}</h3>
             <h4 className='text-sm'>{data.taskDate}</h4>
           </div>
           <div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
           </div>
            {/* <div className='flex justify-between mt-10'>
                <button className='bg-green-500 py-2 px-3 text-sm rounded-lg'>Failed</button>
            </div> */}
         </div>
  )
}

export default FailedTask
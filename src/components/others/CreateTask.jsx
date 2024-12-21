import React ,{useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthProvider'
import AllTasks from './AllTasks'

const CreateTask = () => {
  const [userData,setuserData] = useContext(AuthContext)


  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskAsign, setTaskAsign] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [taskC, settaskC] = useState('')



  const [taask, setTaask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()
    
    setTaask({taskTitle,taskDate,taskAsign,taskCategory,taskDesc,active:false,newTask : true,failed : false,completed : false})
    const data =  userData
    data.forEach((elem)=>{
       
      if(elem.name == taskAsign){
        elem.tasks.push(taask)
        settaskC(elem.taskcount.newTask+1)
      // console.log(taskC)
      }
    })
    
    setuserData(data)
    console.log(data)
  
    // localStorage.setItem('employees',JSON.stringify(data))
    // console.log(taskTitle,taskDate,taskAsign,taskCategory,taskDesc)
    setTaskAsign('')
    setTaskCategory('')
    setTaskDate('')
    setTaskTitle('')
    setTaskDesc('')
  }  
  return (
    <>
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
              <form onSubmit={(e)=>{
                submitHandler(e)
              }
              } className='flex justify-between items-start w-full flex-wrap'>
                  <div className='w-1/2'>
                    <div>
                      <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                      <input value={taskTitle} 
                      onChange={(e)=>{
                        setTaskTitle(e.target.value)
                      }}
                      type="text" placeholder='Make a UI design' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-r-gray-400'/>
                    </div>
                    <div>
                      <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                      <input  value={taskDate} 
                      onChange={(e)=>{
                        setTaskDate(e.target.value)
                        console.log(taskDate)
                      }}
                      type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-r-gray-400' />
                    </div>
                    <div>
                      <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                      <input  value={taskAsign} 
                      onChange={(e)=>{
                        setTaskAsign(e.target.value)
                      
                      }}
                      type="text" placeholder='Employee Name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-r-gray-400' />
                    </div>
                    <div>
                      <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                      <input
                      value={taskCategory} 
                      onChange={(e)=>{
                          setTaskCategory(e.target.value)
                      }}
                        type="text" placeholder='Design,Dev,etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-r-gray-400'/>
                    </div>

                  </div>
                  <div className='w-2/5 items-start flex flex-col'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                      value={taskDesc} 
                      onChange={(e)=>{
                        setTaskDesc(e.target.value)
                      }}
                      name="" id="" cols="30" rows="10" className='w-full h-36 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-r-gray-400'></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create task</button> 
                  </div>
                  
                  
              </form>
          </div>
     </>
  )
}

export default CreateTask
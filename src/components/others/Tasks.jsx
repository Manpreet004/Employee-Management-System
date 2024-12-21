import React from 'react'
import AcceptTast from '../TaskList/AcceptTast'
import CompleteTast from '../TaskList/CompleteTast'
import FailedTask from '../TaskList/FailedTask'
import NewTask from '../TaskList/NewTask'

const Tasks = ({data}) => {
  return (
    <div  className='hs h-[55%]  mt-5 flex justify-start items-center gap-5 w-full py-5 flex-nowrap overflow-x-auto'>
      {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return <AcceptTast key={idx} data = {elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} data = {elem} />
        }
        if(elem.completed){
          return <CompleteTast key={idx} data = {elem}/>
        }
        if(elem.newTask){
          return <NewTask key={idx} data = {elem}/>
        }
      })}
    </div>
  )
}

export default Tasks
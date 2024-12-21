import React from 'react'


const Header = (props) => {
const logOutUser = ()=>{
   localStorage.setItem('loggedInUser','')
   props.changeUser('')
  //  window.location.reload()
}

  return (
    <div className=' flex align-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello  ,<br></br> <span className='text-3xl font-semibold'>{props.userName}</span></h1>
        <div>
        <button onClick={logOutUser} className='bg-red-600 rounded px-4 py-2 font-medium text-white'>Log Out</button>
        </div>
    </div>
  )
}

export default Header
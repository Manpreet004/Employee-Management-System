import React, { useState } from 'react'

const Login = ({handleLogin}) => {
 
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,pass)
        setemail("")
        setpass("")
    }
  return (
    <>
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 py-40 rounded-md px-6 '>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center' >
                <input 
                value={email}
                onChange={(e)=>{
                  setemail(e.target.value)
                  // console.log(email)
                }}
                 required className='px-12 py-3 text-xl  outline-none bg-transparent rounded-full border-2 border-emerald-600 placeholder:text-gray-400 ' type="email" placeholder= 'Enter Your email' 
                />
                <input
                value={pass}
                onChange={(e)=>{
                  setpass(e.target.value)
                  // console.log(pass)
                }}
                required className='px-12 py-3 text-xl  outline-none bg-transparent rounded-full border-2 border-emerald-600 placeholder:text-gray-400 mt-3' type="password" placeholder='Enter Password' />
                <button className='px-12 py-3 text-xl text-white outline-none bg-emerald-600 rounded-full  border-emerald-600 mt-3 '>Login</button> 
            </form>  
        </div>
    </div>
    </>
  )
}

export default Login
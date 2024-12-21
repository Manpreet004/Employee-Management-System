import React , {useContext, useEffect,useState} from 'react'
import Login from './components/Auth/Login'
import Employee from './components/Dahsboard/Employee'
import Admin from './components/Dahsboard/Admin'
import AuthProvider , {AuthContext} from './context/AuthProvider'
import { setLocalStorage,getLocalStorage }  from './utils/localStorage'



const App = () => {

 const [user, setUser] = useState(null)
 const [loggedInUserData, setLoggedInUserData] = useState(null)
 const [userData,setuserData] = useContext(AuthContext)


useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
  }
},[])
 

 const handleLogin = (email,password)=>{
   if(email == 'admin@example.com' && password == 123){
    setUser('admin')
    // setLoggedInUserData(admin)
    // console.log(user)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
   }else if(userData){
    const employee = userData.find((e)=>email==e.email && e.password == password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee' , data: employee}))
    }
   }else{
    alert('invalid credetials')
   }
 }
 
  return (
    <>
    {!user ? <Login handleLogin = {handleLogin} />: ''} 
    {user == 'admin' ? <Admin changeUser = {setUser} userName = {'Manpreet'}/> : (user == 'employee' ?<Employee changeUser = {setUser} data = {loggedInUserData} userName = {loggedInUserData.name}/> : null)}
    </>
  )
}

export default App
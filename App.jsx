import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBorard from './DashBoard/EmployeeDashBorard'
import AdminDashBoard from './DashBoard/AdminDashBoard'
import Header from './components/other/Header'
import { getLocalStorage, setLocalStorage } from './ultis/localStorage'
import { useContext } from 'react'
import { AuthContext } from './Context/AuthProvider'

 


export default function App() {
  const [User , setUser]= useState(null)
  const [loggedInUserDta , setloggedInUserDta]= useState(null)
  const [UserData , setUserData] = useContext(AuthContext)

    useEffect(()=>{
         const loggedInUser = localStorage.getItem('loggedInUser')
       
         if(loggedInUser){
          const UserData = JSON.parse(loggedInUser)  
        setUser(UserData.role)
        setloggedInUserDta(UserData.data)
          }
    },[])



 //useEffect(() => {
 // const { employee, admin } = getLocalStorage();
  //console.log(employee, admin);
 //}, []);

 const handleLogin = (email,password)=>{

  if(email == 'admin@anish.com' && password  == '123'  )
    {
    setUser('admin')
    localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
  }else if(UserData) {
    const employee = UserData.find((e)=>email == e.email && e.password == password)
    if(employee){
    setUser('employee')
    setloggedInUserDta(employee)
    localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}))
    }
     <i></i>
  }
  else{
    alert("Invalid Login")
  }
 };
  

  return (
    <div>
     
     { !User ? <Login handleLogin={handleLogin}/>:'' }
    { User == 'admin' ?  <AdminDashBoard changeUser={setUser}/> :( User == 'employee'? <EmployeeDashBorard changeUser={setUser} data={loggedInUserDta}/>: null)}

  

    
    </div>
  )
}


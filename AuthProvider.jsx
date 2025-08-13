import React, { createContext, useEffect, useState, } from 'react'
import { getLocalStorage, setLocalStorage } from '../ultis/localStorage'
 export  const AuthContext = createContext()
const AuthProvider = ({children}) => {


    const [User,setUser] = useState(null)

    useEffect(()=>{
      setLocalStorage() 
 const {employee} = getLocalStorage()
     setUser(employee)
    },[])



  return (
    <div>
        <AuthContext.Provider value={[User,setUser]}>
              {children}
        </AuthContext.Provider>
    
    </div>
  )
}

export default AuthProvider

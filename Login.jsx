import React, { useState } from 'react'

function Login({handleLogin}){

 // console.log(handleLogin)


      const[email,setemail]=useState('')
      const[password,setpassword]=useState('')

  let submitHandal=(e)=>{
    e.preventDefault()

    handleLogin(email,password)

    console.log("email",email)
    console.log("password",password)
    setemail('')
    setpassword('')
  }
 return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className=' border-2 border-emerald-600 rounded-xl'>
            <form 
            onSubmit={(e)=>{
              submitHandal(e)
            }}
            className='flex  flex-col justify-center  p-20'>
                <input
                value={email} 
                onChange={(e)=>{
                  setemail(e.target.value)
                }}
                 className='required outline-none bg-transparent border-2 border-emerald-600 rounded-full  text-xl py-3 py-5 placeholder:text-gray-400 placeholder:px-3 text-white' type='email' placeholder='Enter your Email'></input>
                 <input 
                value={password} 
                onChange={(e)=>{
                 setpassword(e.target.value)
                }}
                
                 className='required outline-none bg-transparent border-2 border-emerald-600 rounded-full  text-xl py-3 py-5 mt-4 placeholder:text-gray-400 placeholder:px-3 text-white'type='password' placeholder='Enter Password'></input>
                 <button className='mt-5 text-white outline-none bg-red-500 border-2 border-orange-600 rounded-full  text-xl py-3 py-5 mt-4 placeholder:text-white placeholder:px-3 text -white'>Log in</button>
            </form>

        </div>
      
    </div>
  )
}

export default Login

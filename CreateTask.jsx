import React, { useContext, useState } from 'react'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import { AuthContext } from '../../Context/AuthProvider'

function CreateTask() {

   const [UserData,setUserData] = useContext(AuthContext)

   const [taskTitle , settaskTitle]=useState('')
   const [taskDate , settaskDate]=useState('')
   const [taskAssingTo , settaskAssingTo]=useState('')
   const [taskCategory , settaskCategory]=useState('')
   const [taskDiscription , settaskDiscription]=useState('')
  
   const [newTask , setnewTask] = useState({})

    const submitHandler = (e)=>{
      e.preventDefault()

      setnewTask({taskTitle,taskDate,taskCategory,taskDiscription,Active:false,NewTask:true,failed:false,Completed:false})
        const data = UserData
        
      
      UserData.forEach(function(elem){
        if(taskAssingTo == elem.firstname){
          elem.tasks.push(newTask)
          elem.taskSummary.newTask =  elem.taskSummary.newTask + 1
        }
      });
         setUserData(data)
          console.log(data)

              settaskTitle('')
              settaskDate('')
              settaskAssingTo('')
              settaskCategory('')
              settaskDiscription('')
    }
  return (
    <div>
       <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form  onSubmit={(e)=>{
           submitHandler(e)
        }}className='  w-full items-start flex  flex-wrap justify-between'>
            <div className='w-1/2'>
                 <div>
             <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
            <input 
            value={taskTitle}
            onChange={(e)=>{
              settaskTitle(e.target.value)
            }}
            
            
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-translate border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI '></input>   
            </div>
                 <div>
               <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
            value={taskDate}
            onChange={(e)=>{
              settaskDate(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-translate border-[1px] border-gray-400 mb-4'  type='date'></input> 
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
            <input 
            value={taskAssingTo}
            onChange={(e)=>{
              settaskAssingTo(e.target.value)
            }}
            
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-translate border-[1px] border-gray-400 mb-4'  type='text' placeholder='Employee name'></input>
            </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input 
            value={taskCategory}
            onChange={(e)=>{
              settaskCategory(e.target.value)
            }}
            
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-translate border-[1px] border-gray-400 mb-4'  type='text'placeholder='Design,Develoment etc...'/>
          </div>
            </div>
           
            <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea
            value={taskDiscription}
            onChange={(e)=>{
              settaskDiscription(e.target.value)
            }}
            
            
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-tranparent border-[1px] border-gray-400' name="" id=""cols='30' rows='10'></textarea> 
             <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full' >Create Task </button>
           </div>
            
        </form>
      </div>
    </div>
  )
}

export default CreateTask

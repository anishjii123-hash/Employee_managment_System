import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

function AllTask() {
  const [UserData] = useContext(AuthContext); // agar setUserData use nahi kar rahe to hata sakte ho

  return (
    <div className='bg-[#1c1c1c] p-5 rounded-xl mt-5 max-h-[350px] overflow-auto'>
      <div className='text-lg font-medium bg-red-400 py-2 px-4 mb-3 flex justify-between rounded'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed Task</h5>
        <h5 className='w-1/5'>Failed Task</h5>
      </div>

      {UserData.map((elem, idx) => (
        <div
          key={idx}
          className='bg-[#1c1c1c] border-2 border-green-600 py-2 px-4 mb-3 flex justify-between rounded'
        >
          <h2 className='text-lg font-medium w-1/5'>{elem.firstname}</h2>
          <h3 className='w-1/5 text-pink-400'>{elem.taskSummary.newTask}</h3>
          <h5 className='w-1/5 text-yellow-400'>{elem.taskSummary.active}</h5>
          <h5 className='w-1/5 text-green-400'>{elem.taskSummary.completed}</h5>
          <h5 className='w-1/5 text-red-400'>{elem.taskSummary.failed}</h5>
        </div>
      ))}
    </div>
  );
}

export default AllTask;


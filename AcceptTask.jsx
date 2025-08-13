import React from 'react';

const AcceptTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 h-[250px] p-5 w-[300px] bg-red-400 rounded-xl shadow-lg'>
      <div className='flex justify-between items-center mb-2'>
        <h3 className='bg-red-600 text-white text-xs px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-xs text-right'>{data.date}</h4>
      </div>

      <h2 className='mt-4 font-semibold text-xl line-clamp-2'>{data.title}</h2>
      <p className='mt-1 text-sm text-gray-900 line-clamp-2'>{data.description}</p>

      <div className='flex justify-between mt-5'>
        <button className='bg-green-700 text-white px-3 py-1 text-sm rounded'>Completed</button>
        <button className='bg-red-900 text-white px-3 py-1 text-sm rounded'>Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;

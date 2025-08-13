import React from 'react'

const FailTask = ({data}) => {
  return (
    <div>
      <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
<div className='flex justify-between text-center'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
     <h4 className='text-sm'>{data.data}</h4>
</div>
<h2 className='mt-10 font-semibold text-2xl '>{data.title}</h2>
<p className='mt-2'>{data.description}</p>
      <div className=' mt-2'>
        <button className='w-full bg-green-700 rounded-2xl'> Failed </button>

      </div>
        </div>
    </div>
  )
}

export default FailTask

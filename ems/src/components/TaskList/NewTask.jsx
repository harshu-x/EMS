import React from 'react'

const NewTask = ({data}) => {
  return (
    
       <div className='flex-shrink-0 h-full w-[300px] p-5 bg-pink-400 rounded-2xl '>
         <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-1 py-1 rounded'>{data.taskCategory}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
         </div>
         <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>

         <p className='text-sm mt-2'>{data.taskDescription}</p>
         <div className='mt-4'>
            <button className='bg-blue-500 rounded-2xl py-1 px-2 text-sm'>Accept Task</button>
         </div>
      </div>
  
  )
}

export default NewTask

import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-2xl '>
         <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-1 py-1 rounded'>High</h3>
            <h4 className='text-sm'>20 Feb 2026</h4>
         </div>
         <h2 className='mt-5 text-2xl font-semibold'>Make a youtube videoo.</h2>

         <p className='text-sm mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellendus doloremque quibusdam consequatur beatae neque.</p>
       <div className='mt-2'>
        <button className='w-full'>Complete</button>
       </div>
      </div>
  )
}

export default CompleteTask

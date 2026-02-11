import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'>hello
         <br /> 
        <span className='text-3xl font-semibold'>Harshal👋</span>
      </h1>
      <button className='bg-red-500 text-lg font-medium  text-white px-5 py-2 rounded-sm'>log out!!..</button>
    </div>
  )
}

export default Header

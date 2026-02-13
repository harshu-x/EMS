import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext)
  console.log(authData.employee);
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
       <div className='bg-red-400 py-2 mb-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
           <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
             <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
      </div>
      <div className='overflow-auto'>
         {authData.employee.map(function(elem,index){
        return  <div key={index} className=' py-2 mb-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5 text-blue-600'>{elem.firstName}</h2>
        <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{elem.taskCounts.newTask}</h5>
           <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCounts.completed}</h5>
             <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
      </div>

      })}
      </div>
     
      

     
    
    </div>
  )
}

export default AllTask

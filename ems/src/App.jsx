import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import { useState } from 'react'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {
 


  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext)
  console.log(authData);
  console.log(authData.employee)
  const handleLogin =(email ,password)=>{
       if(email =='admin@me.com' && password =='123'){
         setUser('admin')
         console.log(user);
       }
       else if(authData){
             setUser('employee')
        console.log(user);
       }
   
       
       else{
          alert("Invalid Credentials");
       }
  }



  return (
    <>
    {!user ? <Login  handleLogin={handleLogin}/> : ' '}
   {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    
    
    </>
  )
}

export default App

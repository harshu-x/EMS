import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard'
import AdminDashboard from './components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
const App = () => {

  const [user, setUser] = useState(null);

  const handleLogin =(email ,password)=>{
       if(email =='admin@me.com' && password =='123'){
        console.log("This is admin");
       }
       else if(email=='user@me.com' && password =='123'){
        console.log("This is an user");
       }
       else{
          alert("Invalid Credentials");
       }
  }


 
  return (
    <>
    {!user ? <Login  handleLogin={handleLogin}/> : ' '}{

    }
     {/* <Login /> */}
     {/* <EmployeeDashboard />
     <AdminDashboard /> */}
    </>
  )
}

export default App

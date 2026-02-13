import React, { createContext } from 'react'
import { useState,useEffect } from 'react';
import { setLocalStorage,getLocalStorage } from '../utils/localStorage';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
 
    const [userData, setUserData] = useState(null)

   useEffect(() => {

  if (!localStorage.getItem("employees")) {
    setLocalStorage();
  }

  const data=getLocalStorage();
  setUserData(data);

}, []);


     
  return (
    <AuthContext.Provider value={userData}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

import React, { createContext, useState } from 'react'

const INITIAL_STATE = null
export const AuthContext = createContext(INITIAL_STATE)

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value={[user, setUser]}>
        {children}
    </AuthContext.Provider>
  )
}
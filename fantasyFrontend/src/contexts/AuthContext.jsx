import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // On mount, check if there's an existing session
  useEffect(() => {
    api.me()
      .then((data) => setUser(data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [])
  
  async function login(username, password) {
    const data = await api.login(username, password)
    setUser(data)
  }
  
  async function register(username, password) {
    const data = await api.register(username, password)
    setUser(data)
  }
  
  async function logout() {
    await api.logout()
    setUser(null)
  }
  
  const value = { user, loading, login, register, logout }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth must be used inside an AuthProvider')
  }
  return context
}
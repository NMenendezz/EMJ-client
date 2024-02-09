import React, { createContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const token = Cookies.get('session')
    if (token) {
      const decodedToken = jwtDecode(token)
      setUser(decodedToken.others)
    }
  }, [])

  const login = async (data) => {
    try {
      const res = await axios.post(`${apiUrl}/auth/login`, data)
      Cookies.set('session', res.data.token, { expires: 7 })
      setUser(jwtDecode(res.data.token).others)
    } catch (error) {
      console.error('Ha ocurrido un error durante el inicio de sesión', error)
    }
  }

  const logout = async () => {
    try {
      await axios.post(`${apiUrl}/auth/logout`)
      Cookies.remove('session')
      setUser(null)
    } catch (error) {
      console.error('Error durante el cierre de sesión', error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

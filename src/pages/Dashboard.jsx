import { getMeUserServices } from '@/services/useServices'
import { useAuthContext } from '@/hooks/useAuth'
import { useState, useEffect } from 'react'

const Dashboard = () => {
  const { isAuth } = useAuthContext()
  const [userData, setUSerData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getMeUser = async () => {
      const response = await getMeUserServices(token)
      setUSerData(response.data)
    }
    getMeUser()
  }, [token])
  return (
    <>
      <h1>Dashboard</h1>
      {isAuth
        ? (
            userData?.role
              ? (
                <h2>Rol: {userData.role}</h2>
                )
              : (
                <p>Cargando...</p>
                )
          )
        : null}
    </>
  )
}

export default Dashboard

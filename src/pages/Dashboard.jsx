import { getMeUserServices } from '@/services/useServices'
import { useAuthContext } from '@/hooks/useAuth'
import { useState, useEffect } from 'react'
import logo from '@/assets/react.svg'

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
                <>
                
                <table className="table  table-striped">
  <thead>
    <tr>
      <th scope="col" />
      <th scope="col" />
      <th scope="col" />
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src={logo} alt='logo'/></th>
      <td>Rol:</td>
      <td>{userData?.role}</td>
      
    </tr>
    <tr>
      <th scope="row"><img src={logo} alt='logo'/></th>
      <td>Name</td>
      <td>{userData.first_name}</td>
      
    </tr>
    <tr>
      <th scope="row"><img src={logo} alt='logo'/></th>
      <td>Last name</td>
      <td>{userData.last_name}</td>
      
    </tr>
    <tr>
      <th scope="row"><img src={logo} alt='logo'/></th>
      <td>Gender</td>
      <td>{userData.gender}</td>
      
    </tr>
    <tr>
      <th scope="row"><img src={logo} alt='logo'/></th>
      <td colSpan={2}>{userData.email}</td>
      
    </tr>
  </tbody>
</table>
</>

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

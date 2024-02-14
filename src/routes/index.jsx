import { Routes, Route, Navigate } from 'react-router-dom'
import { About, Dashboard, Home, Login, Secret, Signup, Sales, ProductDetails } from '@/pages'
import { useAuthContext } from '@/hooks/useAuth'

const RoutesIndex = () => {
  const { isAuth } = useAuthContext()

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/dashboard' element={isAuth ? <Dashboard /> : <Navigate to='/login' />}
      />
      <Route
        path='/secret'
        element={isAuth ? <Secret /> : <Navigate to='/login' />}
      />
      <Route
        path='/about'
        element={isAuth ? <About /> : <Navigate to='/login' />}
      />
      <Route
        path='/sales'
        element={isAuth ? <Sales /> : <Navigate to='/login' />}
      />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route
        path='/productdetails:id'
        element={isAuth ? <ProductDetails /> : <Navigate to='/login' />}
      />
    </Routes>
  )
}

export default RoutesIndex

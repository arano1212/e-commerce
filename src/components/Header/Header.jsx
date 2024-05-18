import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuth'
import logo from '@/assets/react.svg'
import carshopping from '@/assets/carshopping.svg'
import './header.scss'
import ModalCar from '../ModalCar/ModalCar'
import { useState } from 'react'

const Header = () => {
  const { isAuth, logout } = useAuthContext()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <header className='p-3 text-bg-dark'>
        <div className='container'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <NavLink className='nav-link__logo' to='/'><img src={logo} alt='logo' /></NavLink>

            <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
              <li>
                <NavLink to='/' className='nav-link px-2 text-white'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard' className='nav-link px-2 text-white'>
                  Dashboard
                </NavLink>
              </li>
              {isAuth
                ? (
                  <>
                    <li>
                      <NavLink to='/secret' className='nav-link px-2 text-white'>
                        Secret
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/about' className='nav-link px-2 text-white'>
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/sales' className='nav-link px-2 text-white'>
                        To sell
                      </NavLink>
                    </li>

                  </>
                  )
                : null}
            </ul>
            {isAuth
              ? (
                <>
                  <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3' role='search'>
                    <input
                      type='search'
                      className='form-control form-control-dark text-bg-white'
                      placeholder='Search...'
                      aria-label='Search'
                    />
                  </form>
                  <div className='text-end'>
                    <NavLink
                      className='btn btn-outline-light me-2'
                      to='/login'
                      onClick={logout}
                    >
                      LogOut
                    </NavLink>
                  </div>
                  <button className='btn btn-primary' type='submit' onClick={handleShow}>
                    <img className='car-shopping-icon' src={carshopping} alt='logo' style={{ width: '35px', height: '30px' }} />
                  </button>
                </>
                )
              : (
                <>
                  <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3' role='search'>
                    <input
                      type='search'
                      className='form-control form-control-dark text-bg-white'
                      placeholder='Search...'
                      aria-label='Search'
                    />
                  </form>
                  <div className='text-end'>
                    <NavLink className='btn btn-outline-light me-2' to='/login'>
                      Login
                    </NavLink>
                    <NavLink className='btn btn-warning' to='/signup'>
                      Sign-up
                    </NavLink>
                  </div>
                </>
                )}
          </div>
        </div>
      </header>
      <ModalCar show={show} handleClose={handleClose} />
    </>
  )
}

export default Header

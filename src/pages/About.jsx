import { getMeUserServices } from '@/services/useServices'
import { useState, useEffect } from 'react'
import Logo from '@/assets/react.svg'
import '@/styles/form.css'

const About = () => {
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
      <img className='mb-4' src={Logo} alt='' width='72' height='57' />
      {userData?.role === 'ADMIN'
        ? (
          <>
            <main className='form-sign'>
              <form className='form-adress'>
                <input
                  type='email'
                  className='form-control'
                  id='floatingInputValue'
                  name='email'
                  placeholder='name@example.com'
                  defaultValue={(`Hola ${userData.first_name} ${userData.last_name} ${userData.email}`)}
                />
                <label htmlFor='floatingInputValue' />
                <div className='form-adress'>
                  <textarea
                    className='form-control'
                    placeholder='Leave a comment here'
                    id='floatingTextarea2'
                    style={{ height: 350, width: 270 }}
                    defaultValue={(`Hola ${userData.first_name} ${userData.last_name} como podemos ayudarte`)}
                  />
                  <label htmlFor='floatingTextarea2'> ayudarte es nuestra tarea numero 1 {userData.first_name} {userData.last_name}</label>
                </div>
                <div className='col-12'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                  >
                    Contactarnos
                  </button>
                </div>

              </form>
            </main>
          </>

          )
        : (
          <>
            <main className='form-sign'>
              <form className='form-adress'>
                <input
                  type='email'
                  className='form-control'
                  id='floatingInputValue'
                  name='email'
                  placeholder={(`Ingresa tu correo ${userData.first_name}${userData.last_name}`)}
                  defaultValue=''
                />
                <label htmlFor='floatingInputValue' />
                <div className='form-adress'>
                  <textarea
                    className='form-control'
                    placeholder={(`Escribenos como podemos ayudarte ${userData.first_name}${userData.last_name}`)}
                    id='floatingTextarea2'
                    style={{ height: 350, width: 270 }}
                    defaultValue=''
                  />
                  <label htmlFor='floatingTextarea2' />
                </div>
                <div className='col-12'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                  >
                    Contactarnos
                  </button>
                </div>

              </form>
            </main>
          </>

          )}

    </>
  )
}

export default About

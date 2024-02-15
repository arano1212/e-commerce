import { useAuthContext } from '@/hooks/useAuth'
import checkIcon from '@/assets/check.svg'
import { Link } from 'react-router-dom'
const Secret = () => {
  const { userPayload } = useAuthContext()

  return (
    <>
      <h1>Secret</h1>
      {userPayload?.role === 'ADMIN'
        ? (
          <div className='col'>
            <h1>BIENVENIDO! </h1>
            <div className='card mb-4 rounded-3 shadow-sm'>
              <div className='card-header py-3'>
                <h4 className='my-0 fw-normal'>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Perfil ADMINISTRADOR</font>
                  </font>
                </h4>
              </div>
              <div className='card-body'>
                <h1 className='card-title pricing-card-title' />
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>
                    <font style={{ verticalAlign: 'inherit' }}>
                      <font style={{ verticalAlign: 'inherit' }}>
                        Envios gratis
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: 'inherit' }}>
                      <font style={{ verticalAlign: 'inherit' }}>
                        Publicar articulos
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: 'inherit' }}>
                      <font style={{ verticalAlign: 'inherit' }}>
                        Soporte prioritario por correo electrónico
                      </font>
                    </font>
                  </li>
                  <li>
                    <font style={{ verticalAlign: 'inherit' }}>
                      <font style={{ verticalAlign: 'inherit' }}>
                        Acceso al centro de ayuda
                      </font>
                    </font>
                  </li>
                </ul>
                <button type='button' className='w-100 btn btn-lg btn-primary'>
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>Inscrito</font>
                  </font>
                </button>
              </div>
            </div>
            <div className='table-responsive'>
              <table className='table text-center'>
                <thead>
                  <tr>
                    <th style={{ width: '34%' }} />
                    <th style={{ width: '22%' }}>
                      <font style={{ verticalAlign: 'inherit' }} />

                    </th>
                    <th style={{ width: '22%' }}>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>el Perfil de ADMINISTRADOR incluye:</font>
                      </font>
                    </th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row' className='text-start'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Soporte por correo electronico</font>
                      </font>
                    </th>
                    <td />

                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>

                  </tr>
                  <tr>
                    <th scope='row' className='text-start'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Soporte Prioritario</font>
                      </font>
                    </th>
                    <td />
                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>

                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope='row' className='text-start'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Acceso al centro de ayuda</font>
                      </font>
                    </th>
                    <td />
                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>

                  </tr>
                  <tr>
                    <th scope='row' className='text-start'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Publicar productos</font>
                      </font>
                    </th>
                    <td />
                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>

                  </tr>

                  <tr>
                    <th scope='row' className='text-start'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>
                          Envios gratis
                        </font>
                      </font>
                    </th>
                    <td />
                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          )
        : (
          <main>
            <h4>Tu Perfil es de COSTUMER, conoce la siguiente informacion:</h4>
            <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
              <div className='col'>
                <div className='card mb-4 rounded-3 shadow-sm'>
                  <div className='card-header py-3'>
                    <h4 className='my-0 fw-normal'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Gratis</font>
                      </font>
                    </h4>
                  </div>
                  <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>$0 </font>
                      </font>
                      <small className='text-body-secondary fw-light'>
                        <font style={{ verticalAlign: 'inherit' }}>
                          <font style={{ verticalAlign: 'inherit' }}>/mes</font>
                        </font>
                      </small>
                    </h1>
                    <ul className='list-unstyled mt-3 mb-4'>

                      <li>
                        <font style={{ verticalAlign: 'inherit' }}>
                          <font style={{ verticalAlign: 'inherit' }}>
                            Soporte por correo electrónico
                          </font>
                        </font>
                      </li>
                      <li>
                        <font style={{ verticalAlign: 'inherit' }}>
                          <font style={{ verticalAlign: 'inherit' }}>
                            Acceso al centro de ayuda
                          </font>
                        </font>
                      </li>
                    </ul>
                    <button
                      type='button'
                      className='w-100 btn btn-lg btn-outline-primary'
                    >
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>
                          Inscrito
                        </font>
                      </font>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card mb-4 rounded-3 shadow-sm'>
                  <div className='card-header py-3'>
                    <h4 className='my-0 fw-normal'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Perfil ADMINISTRADOR</font>
                      </font>
                    </h4>
                  </div>
                  <div className='card-body'>
                    <h1 className='card-title pricing-card-title'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>$15 </font>
                      </font>
                      <small className='text-body-secondary fw-light'>
                        <font style={{ verticalAlign: 'inherit' }}>
                          <font style={{ verticalAlign: 'inherit' }}>/mes</font>
                        </font>
                      </small>
                    </h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>
                        <font style={{ verticalAlign: 'inherit' }}>
                          <font style={{ verticalAlign: 'inherit' }}>
                            Envios gratis
                          </font>
                        </font>
                      </li>
                      <li>
                        <font style={{ verticalAlign: 'inherit' }}>
                          <font style={{ verticalAlign: 'inherit' }}>
                            Publicar articulos
                          </font>
                        </font>
                      </li>
                      <li>
                        <font style={{ verticalAlign: 'inherit' }}>
                          <font style={{ verticalAlign: 'inherit' }}>
                            Soporte prioritario por correo electrónico
                          </font>
                        </font>
                      </li>
                      <li>
                        <font style={{ verticalAlign: 'inherit' }}>
                          <font style={{ verticalAlign: 'inherit' }}>
                            Acceso al centro de ayuda
                          </font>
                        </font>
                      </li>
                    </ul>
                    <Link to='/pay'>
                      <button type='button' className='w-100 btn btn-lg btn-primary'>
                        <font style={{ verticalAlign: 'inherit' }}>
                          <font style={{ verticalAlign: 'inherit' }}>Adquirir</font>
                        </font>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
            <h2 className='display-6 text-center mb-4'>
              <font style={{ verticalAlign: 'inherit' }}>
                <font style={{ verticalAlign: 'inherit' }}>Comparar planes</font>
              </font>
            </h2>
            <div className='table-responsive'>
              <table className='table text-center'>
                <thead>
                  <tr>
                    <th style={{ width: '34%' }} />
                    <th style={{ width: '22%' }}>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Gratis (COSTUMER)</font>
                      </font>
                    </th>
                    <th style={{ width: '22%' }}>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>ADMINISTRADOR</font>
                      </font>
                    </th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope='row' className='text-start'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Soporte por correo electronico</font>
                      </font>
                    </th>
                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>
                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>

                  </tr>
                  <tr>
                    <th scope='row' className='text-start'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Soporte Prioritario</font>
                      </font>
                    </th>
                    <td />
                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>

                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope='row' className='text-start'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Acceso al centro de ayuda</font>
                      </font>
                    </th>
                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>
                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>

                  </tr>
                  <tr>
                    <th scope='row' className='text-start'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>Publicar productos</font>
                      </font>
                    </th>
                    <td />
                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>

                  </tr>

                  <tr>
                    <th scope='row' className='text-start'>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>
                          Envios gratis
                        </font>
                      </font>
                    </th>
                    <td />
                    <td>
                      <img src={checkIcon} alt='Check' width={24} height={24} />
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
          </main>

          )}

    </>
  )
}

export default Secret

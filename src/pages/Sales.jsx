import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { createItemsService } from '@/services/itemServices'
import { useAuthContext } from '@/hooks/useAuth'

import Logo from '@/assets/react.svg'

const Sales = () => {
  const navigate = useNavigate()
  const { userPayload } = useAuthContext()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data, jwtToken) => {
    try {
      const response = await createItemsService(data, jwtToken)
      if (response.status === 200) {
        navigate('/home')
      }
      console.log('response', response)
    } catch (error) {
      console.log('error', error)
    }
  }
  return (
    <>

      {userPayload?.role === 'ADMIN'
        ? (
          <>
            <h1>Publica tus Productos</h1>
            <form className='row g-3' onSubmit={handleSubmit(onSubmit)}>
              <img className='mb-4' src={Logo} alt='' width='72' height='57' />
              <div className='col-md-6'>
                <label htmlFor='inputProductName' className='form-label'>
                  Product Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='inputProductName'
                  name='product_name'
                  {...register('product_name', { required: true })}
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='inputDescription' className='form-label'>
                  Description
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='description'
                  id='inputDescription'
                  {...register('description', { required: true })}
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='inputPrice' className='form-label'>
                  Price
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='inputPrice'
                  name='price'
                  {...register('price', { required: true })}
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='inputCategory' className='form-label'>
                  Category
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='inputCategory'
                  name='category'
                  {...register('category', { required: true })}
                />
              </div>
              <div className='col-md-6'>
                <label htmlFor='inputBrand' className='form-label'>
                  Brand
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='inputBrand'
                  name='brand'
                  {...register('brand', { required: true })}
                />
              </div>

              <div className='col-12'>
                <label
                  htmlFor='inputImage'
                  className='form-label'
                >
                  Image
                </label>
                <input
                  type='file'
                  className='form-control'
                  id='inputImage'
                  name='image'
                  // {...register('image', { required: true })}
                />
              </div>

              <div className='col-12'>
                <button
                  type='submit'
                  className='btn btn-primary'
                >
                  Publicar
                </button>
              </div>
            </form>
          </>
          )
        : (

          <>
            <p>No tienes permiso para acceder a esta página.</p>
            <h1><Link to='/secret'>Ir a la página Secret</Link></h1>
          </>
          )}

    </>
  )
}

export default Sales

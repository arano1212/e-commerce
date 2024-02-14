import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllItemsService } from '@/services/itemServices'
import { useAuthContext } from '@/hooks/useAuth'

const Home = () => {
  const [itemsData, setItemsData] = useState([])
  const { isAuth } = useAuthContext()

  useEffect(() => {
    const getItemsData = async () => {
      try {
        const response = await getAllItemsService()
        if (response.status === 200) {
          setItemsData(response.data)
        }
      } catch (error) {
        console.log('error', error.message)
      }
    }
    getItemsData()
  }, [])

  const renderBuyButton = (product) => {
    if (isAuth) {
      return (
        <Link to={`/productdetails/${product.id}`} className='btn btn-primary'>
          Comprar
        </Link>
      )
    } else {
      return (
        <Link to='/login' className='btn btn-primary'>
          Comprar
        </Link>
      )
    }
  }

  return (
    <>
      <h1>Home</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {itemsData &&
          itemsData.map((product) => (
            <div className='card' style={{ width: '18rem' }} key={product.id}>
              <img
                className='card-img-top'
                style={{ maxHeight: '300px' }}
                src={product.image}
                alt={product.product_name}
              />
              <div className='card-body'>
                <h5 className='card-title'>{product.product_name}</h5>
                <p className='card-text'>{product.description}</p>
                {renderBuyButton(product)}
              </div>

            </div>
          ))}
      </div>
    </>
  )
}

export default Home

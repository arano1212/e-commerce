import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneItemsService } from '@/services/itemServices'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getOneItemsService(id)
        if (response.status === 200) {
          setProduct(response.data)
        }
      } catch (error) {
        console.log('error', error.message)
      }
    }
    fetchProduct()
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>{product.product_name} Details</h1>
      <div>
        <img src={product.image} alt={product.product_name} />
        <p>{product.description}</p>
        {/* Add other product details here */}
      </div>
    </>
  )
}

export default ProductDetails

import Container from '@/app/components/Container'
import React from 'react'
import ProductDetails from './ProductDetails'
import { product } from '@/utils/product'

interface IdParams {
    productId? : string
}
function Product({params} : {params : IdParams}) {
  return (
    <div className='p-8'>
      <Container>
        <ProductDetails product = {product}/>
      </Container>
    </div>
  )
}

export default Product
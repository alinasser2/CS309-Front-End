import React from 'react'

function Product({match}) {
  const {id}=match.params
  
  return (
    <div>Product</div>
  )
}

export default Product
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product'

const Home = () => {
  const productList = useSelector((state)=>state.products)
  return (
    <div className="products-container">
      {
        productList.map(({id, title, image, price, rating})=>
          <Product key={id} id={id} title={title} image={image} price={(price*83.95).toFixed(2)} rating={rating.rate} />
        )
      }
        
    </div>
  )
}

export default Home

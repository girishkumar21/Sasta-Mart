import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductData } from '../store/ProductReducer'

const Header = () => {
    const cartItems = useSelector((state) => state.cartItems)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchProductData())
    },[])
  return (
    <header>
        <div className='header-contents'>
        <h1 className='header-input'>
          <Link to="/">Sasta-Mart</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </div>
        </Link>

    </div>
    </header>
  )
}

export default Header

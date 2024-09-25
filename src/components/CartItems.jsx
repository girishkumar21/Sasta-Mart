import { useDispatch, useSelector } from "react-redux"
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from "../store/CartReducer";


const CartItems = ({id, title, image, rating, quantity, price}) => {
  const dispatch = useDispatch();
  function quantityDecreaseHandler(){
     return dispatch(decreaseCartItemQuantity({id}))
  }
  function quantityIncreaseHandler(){
    return dispatch(increaseCartItemQuantity({id}))
 }
 function deleteHandler(){
  return dispatch(removeCartItem({id}))
 }
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">Rs.{price}</div>
      <div className="item-quantity">
        <button onClick={quantityDecreaseHandler}>-</button>
        <span>{quantity}</span>
        <button onClick={quantityIncreaseHandler}>+</button>
        <button onClick={deleteHandler}>Remove</button>
      </div>
      <div className="item-total">Rs. {(quantity * price).toFixed(2)}</div>
    </div>

  )
}

export default CartItems

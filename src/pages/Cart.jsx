import React from "react";
import CartItems from "../components/CartItems";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((state) => state.cartItems);
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItem.map(({ id, title, rating, price, image, quantity }) => (
          <CartItems
            key={id}
            id={id}
            title={title}
            price={price}
            quantity={quantity}
            image={image}
            rating={rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">
            Rs.{" "}
            {cartItem.reduce((acc, cur)=>{
              return (acc + (cur.quantity * cur.price))
            },0).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

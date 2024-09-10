import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/CartReducer";

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();
  function addToCartHandler() {
    dispatch(addCartItem({ id, title, image, price, rating }));
  }
  return (
    <div key={id} className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{+rating} ★ ★ ★ ★</p>
        <p className="price">Rs. {price}</p>
      </div>
      <div className="cta-container">
        <button onClick={addToCartHandler}>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Product;

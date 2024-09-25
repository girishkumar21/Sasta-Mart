import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getAllProducts,
  getProductError,
  getProductLoadingState,
} from "../store/ProductReducer";
import Product from "../components/Product";

const Home = () => {
  const productList = useSelector(getAllProducts);
  const error = useSelector(getProductError);
  const isLoading = useSelector(getProductLoadingState);

  return isLoading ? (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  ) : error ? (
    <h2 style={{ textAlign: "center" }}>{error}</h2>
  ) : (
    <div className="products-container">
      {productList.map(({ id, title, image, price, rating }) => (
        <Product
          key={id}
          id={id}
          title={title}
          image={image}
          price={(price * 83.95).toFixed(2)}
          rating={rating.rate}
        />
      ))}
    </div>
  )
};

export default Home;

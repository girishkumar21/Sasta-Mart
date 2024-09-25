import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({reducer:{
    products : ProductReducer,
    cartItems : CartReducer
},
middleware: (getDefaultMiddleware)=> [...getDefaultMiddleware()]
})

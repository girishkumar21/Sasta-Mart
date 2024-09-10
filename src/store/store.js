import { combineReducers, createStore } from "redux";
import ProductReducer from "./ProductReducer";
import CartReducer from "./CartReducer";

const reducer = combineReducers({
    products : ProductReducer,
    cartItems : CartReducer
})
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())


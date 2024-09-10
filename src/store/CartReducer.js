export const ADD_TO_CART = "post/addToCart";
export const REMOVE_FROM_CART = "post/removeFromCart";
export const INCREASE_PRODUCT_QUANTITY = "post/increaseItem";
export const DECREASE_PRODUCT_QUANTITY = "post/decreaseItem";

//action manager
export function addCartItem(productData) {
  return { type: ADD_TO_CART, payload: productData};
}

export function removeCartItem(id) {
  return { type: REMOVE_FROM_CART, payload: { id } };
}

export function decreaseCartItemQuantity(id) {
  return {
    type: DECREASE_PRODUCT_QUANTITY,
    payload: { id },
  };
}

export function increaseCartItemQuantity(id) {
  return {
    type: INCREASE_PRODUCT_QUANTITY,
    payload: { id },
  };
}

const CartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) => {
          if (item.id === existingItem.id) {
            return {...item, quantity:item.quantity+1};
          }
          return item;
        });
      }
      return [...state, {...action.payload, quantity:1}];

      break;
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);
      break;
    case INCREASE_PRODUCT_QUANTITY:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      break;
    case DECREASE_PRODUCT_QUANTITY:
      return state
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
      break;
    default:
      return state;
  }
};

export default CartReducer;

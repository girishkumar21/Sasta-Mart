import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) => state.findIndex((item)=>item.id===action.payload.id)

const slice = createSlice({
  name: 'post',
  initialState: [],
  reducers: {
    addCartItem(state, action){
      const itemIndex = findItemIndex(state, action);
      if(itemIndex!==-1){
        state[itemIndex].quantity +=1
      }
      else{
        state.push({...action.payload, quantity:1})
      }
    },
    removeCartItem(state, action){
      const itemIndex = findItemIndex(state, action)
      state.splice(itemIndex,1)
    },
    increaseCartItemQuantity(state, action){
      const itemIndex = findItemIndex(state, action)
      state[itemIndex].quantity +=1
    },
    decreaseCartItemQuantity(state, action){
      const itemIndex = findItemIndex(state, action)
      state[itemIndex].quantity -=1
      if(state[itemIndex].quantity === 0){
        state.splice(itemIndex,1)
      }
    }
  }
})

export const {addCartItem,removeCartItem,increaseCartItemQuantity,decreaseCartItemQuantity} = slice.actions;

export default slice.reducer

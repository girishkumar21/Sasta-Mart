import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const  fetchProductData = createAsyncThunk('product/fetchProductItem', async() =>{
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json()
  } catch (error) {
    throw error
  }
})

const slice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    list: [],
    error: ''
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchProductData.pending, (state)=>{
      state.loading=true;
    })
    .addCase(fetchProductData.fulfilled, (state, action)=>{
      state.loading = false
      state.list = action.payload
      state.error = ''
    })
    .addCase(fetchProductData.rejected, (state, action)=>{
      state.loading = false,
      state.error = action.payload || 'Something Went Wrong'
    })
  }
})

export const getAllProducts = (state) => state.products.list
export const getProductLoadingState = (state) => state.products.loading
export const getProductError = (state) => state.products.error

export default slice.reducer

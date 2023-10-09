import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import cartSliceReducer from "./slices/cartSlice"
import authSliceReducer from './slices/authSlice';


// import cartSliceReducer from './slices/cartSlice';
// import authReducer from './slices/authSlice'; // add this line

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
   cart: cartSliceReducer,
   auth: authSliceReducer
   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
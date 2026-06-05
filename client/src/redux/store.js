import { configureStore } from '@reduxjs/toolkit';
// import reducers here when created

const store = configureStore({
  reducer: {
    // Add reducers here
    // auth: authReducer,
    // products: productsReducer,
  },
});

export default store;

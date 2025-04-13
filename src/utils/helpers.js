// In src/utils/helpers.js

// Define the formatPrize function
export const formatePrize = (price) => {
    // Assuming you want to format the price as a currency (USD, for example)
    return `$${price.toFixed(2)}`;
  };
  
  // If you are exporting other things, make sure to keep them as well
  import { configureStore } from "@reduxjs/toolkit";
  import cartReducer from "../redux/reducers/cartSlice"; // Correct path for the cartReducer
  import searchReducer from "../redux/reducers/searchReducer";
  
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      search: searchReducer,
    },
  });
  
  export default store;
  
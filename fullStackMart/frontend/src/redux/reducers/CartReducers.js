// cartReducer.js
import {
    USER_ADDCART_SUCCESS,
    USER_ADDCART_FAIL,
    USER_REMOVECART_SUCCESS,
    USER_REMOVECART_FAIL,
    // Import other constants as needed
  } from '../constants/CartConstants';
  
  const initialState = {
    cartItems: [],
    loading: false,
    error: null,
  };
  
 export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_ADDCART_SUCCESS:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          loading: false,
        };
      case USER_ADDCART_FAIL:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
//   export default cartReducer;

 export const cartRemoveReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_REMOVECART_SUCCESS:
        // console.log('Current cartItems:', state.cartItems.items.id);
        console.log('Removing item with ID:', action.payload);
        return {
            ...state,
            cartItems: state.cartItems.filter((item) => item.id !== action.payload),
            loading: false,
        };
      case USER_REMOVECART_FAIL:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
//   export default cartReducer;
  
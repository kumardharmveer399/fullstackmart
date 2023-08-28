// import { toast } from "react-toastify";
// import { USER_ADDCART_FAIL, USER_ADDCART_REQUEST, USER_ADDCART_SUCCESS } from "../constants/CartConstants"

// export const userAddToCartAction   = (dispatch) => {
//     dispatch({type:USER_ADDCART_REQUEST});
//     try {
//         dispatch({
//             type:USER_ADDCART_SUCCESS,
//             // payload: error.response.data.error
//             payload :0
//         })
//         toast.success("GREAT, Your item added to cart")
//     } catch (error) {
//         dispatch({
//             type:USER_ADDCART_FAIL,
//             payload: error.response.data.error
//         });
//         toast.error("OOPS unable add your item to cart try other products");
//     }
// }

// CartActions.js
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  USER_ADDCART_REQUEST,
  USER_ADDCART_SUCCESS,
  USER_ADDCART_FAIL,
  USER_REMOVECART_REQUEST,
  USER_REMOVECART_SUCCESS,
  USER_REMOVECART_FAIL,
} from '../constants/CartConstants';

export const userAddToCartAction = (product) => async (dispatch) => {
  dispatch({ type: USER_ADDCART_REQUEST });
  try {
    // Simulate adding to cart by dispatching a success action
    dispatch({
      type: USER_ADDCART_SUCCESS,
      payload: product,
    });
    toast.success('Great, your item added to cart');
  } catch (error) {
    dispatch({
      type: USER_ADDCART_FAIL,
      payload: error.response?.data?.error || 'Failed to add item to cart',
    });
    toast.error('Oops, unable to add your item to cart. Please try again.');
  }
};

export const userRemoveCartAction = (productId) => async (dispatch) => {
    dispatch({ type: USER_REMOVECART_REQUEST });
    try {
      // Simulate adding to cart by dispatching a success action
      dispatch({
        type: USER_REMOVECART_SUCCESS,
        payload: productId
        ,
      });
      toast.success(' your item has been removed from cart');
    } catch (error) {
      dispatch({
        type: USER_REMOVECART_FAIL,
        payload: error.response?.data?.error || 'Failed to add item to cart',
      });
      toast.error('Oops, unable to remove your item fromo cart. Please try again.');
    }
  };
  
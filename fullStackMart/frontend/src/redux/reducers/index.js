import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import { userReducerLogout, userReducerSignIn, userSignInReducer, userSignUpReducer, userreducerSignUp } from "./userReducer";
import {cartReducer, cartRemoveReducer} from "./CartReducers";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  signin : userSignInReducer,
  signup:userSignUpReducer,
  logout:userReducerLogout,
  cart:cartReducer,
  remove:cartRemoveReducer
});
export default reducers;

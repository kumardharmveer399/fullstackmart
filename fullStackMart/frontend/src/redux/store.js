import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers/index";

// Compose the middlewares and the Redux DevTools extension enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;

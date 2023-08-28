import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import ProductDetails from "./containers/ProductDetails";
import Cart from "./containers/Cart";
import Footer from "./containers/Footer";
import { useSelector } from "react-redux";
// 
function App() {

  const { userInfo } = useSelector(state => state.signin)


  return (
    <div className="App">
      {/* {
        userInfo ? */}
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={ProductListing} />
              <Route path="/product/:productId" component={ProductDetails} />
              <Route path="/signin" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/cart" component={Cart} />
              <Route>404 Not Found!</Route>
            </Switch>
            <Footer />
          </Router>
          {/* : */}
          {/* <Router> */}
            {/* <Route path="/signup" component={Signup} /> */}
            {/* <Switch> */}
              {/* <div className="app_bg"> */}
              {/* <Route path="/signup" component={Signup} /> */}
              {/* <Route path="/signin" component={Login} /> */}
              {/* </div> */}
            {/* </Switch> */}
          {/* </Router> */}
      {/* } */}

    </div>
  );
}

export default App;

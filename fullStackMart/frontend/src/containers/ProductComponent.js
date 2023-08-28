import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAddToCartAction } from '../redux/actions/CartAction';
import '../App.css'

const ProductComponent = () => {
  const isAuthenticated = useSelector(state => state.signin.userInfo);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    const handleAddToCart = () => {

      if (isAuthenticated) {
        // Dispatch the addToCart action only if the user is authenticated
        try {
          console.log("Adding to cart:", product);
          dispatch(userAddToCartAction(product)); // Dispatch the addToCart action with the product as payload
        } catch (error) {
          console.log("Error adding to cart: ", error);
        }
      } else {
        // Show a message or prompt the user to log in
        alert('Please log in to add items to the cart.');
      }
    };
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`} className="product-link">
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content" style={{ color: 'Highlight' }}>
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
                <div className="ui vertical clr animated button" tabIndex="0" onClick={handleAddToCart}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content" >Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;

// import React from 'react'
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { selectedProduct } from '../redux/actions/productsActions';

// export default function Cart() {

//   // const { productId } = useParams();
//   // const product = useSelector((state) => state.product);
//   // const { image, title, price, category, description } = product;
//   // const dispatch = useDispatch();
//   // const fetchProductDetail = async (id) => {
//   //   const response = await axios
//   //     .get(`https://fakestoreapi.com/products/${id}`)
//   //     .catch((err) => {
//   //       console.log("Err: ", err);
//   //     });
//   //   dispatch(selectedProduct(response.data));
//   // };

//   const cartItems = useSelector((state) => state.product);
//   const dispatch = useDispatch();

//   // const handleRemoveFromCart = (productId) => {
//   //   dispatch(removeFromCart(productId));
//   // };

//   return (
//     <>
//       {cartItems.map((item) => (
//         <div className="ui placeholder segment">
//           <div className="ui two column stackable center aligned grid">
//             {/* <div className="ui vertical divider">AND</div> */}
//             <div className="middle aligned row">
//               <div className="column lp">
//                 <img className="ui fluid image" />
//               </div>
//               <div className="column rp">
//                 <h1></h1>
//                 <h2>
//                   <a className="ui teal tag label">$</a>
//                 </h2>
//                 <h3 className="ui brown block header"></h3>
//                 <p></p>
//                 <div className="ui vertical animated button" tabIndex="0">
//                   <div className="hidden content">
//                     <DeleteForeverIcon sx={{}} />
//                   </div>
//                   <div className="visible content">Remove</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))
//       }

//     </>
//   )
// }


import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import empty from "../images/empty.png"
import {userRemoveCartAction } from '../redux/actions/CartAction'
import { useParams } from 'react-router-dom';

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch=useDispatch();
  // const { id } = useParams()
  // const {id}=cartItems
  // let product = useSelector((state) => state.product);
  const removeItem = (productId) => {
    try {
      console.log(`removing to cart{id}`,productId);
      dispatch(userRemoveCartAction(productId)); // Dispatch the addToCart action with the product as payload
    } catch (error) {
      console.log("Error adding to cart: ", error);
    }
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  if(cartItems.length===0){
    return (
      <div className="ui placeholder segment emptycart">
      <div className="ui two column  stackable center aligned grid">
        <div className="middle aligned row">
          {/* <div className="column lp">
           
          </div> */}
          <div className="ui vertical two column center animated button " >
              <div className="hidden content">
              {/* <img className="ui fluid image" src={empty}  /> */}
              </div>
              <div className="visible content">empty</div>
            </div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <>
      {cartItems.map((item) => (
        <div key={item.id} className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid ">
            <div className="middle aligned row">
              <div className="column lp ">
                <img className="ui fluid image" style={{ width: "20vw" }} src={item.image} alt={item.title} />
              </div>
              <div className="column rp">
                <h1>{item.title}</h1>
                <h2>
                  <a className="ui teal tag label">${item.price}</a>
                </h2>
                <h3 className="ui brown block header">{item.category}</h3>
                <p>{item.description}</p>
                <div className="ui vertical animated button" tabIndex="0" onClick={() => removeItem(item.id)}>
                  <div className="hidden content">
                    <DeleteForeverIcon sx={{}} />
                  </div>
                  <div className="visible content">Remove</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

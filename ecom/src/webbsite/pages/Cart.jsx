// import React from 'react';
// import './Cart.css';

// const Cart = ({ cartItems = [], removeFromCart = () => {} }) => {
//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item, index) => (
//           <div className="cart-item" key={index}>
//             <img src={item?.imges} alt={item?.title} className="cart-img" />
//             <div className="cart-details">
//               <h5>{item?.title}</h5>
//               <button className="btn btn-danger" onClick={() => removeFromCart(index)}>
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;

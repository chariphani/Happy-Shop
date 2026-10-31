import React, { useState } from 'react';
import './Msingle.css';
import { men } from '../data/mens';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Msingle = () => {
  const { id } = useParams();
  const product = men.find((item) => String(item.id) === id);

  const [cart, setCart] = useState([]);

  const addToCart = () => {
    const alreadyInCart = cart.find((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCart([...cart, product]);
    } else {
      alert('Product already in cart!');
    }
  };

  const removeFromCart = () => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy: ${product.title} - ${product.price}`);
   
  };

  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className="msigle-container">
      <div className="msigle">
        <div className='lside'>
          <img src={product.imges} alt={product.title} />
        </div>
        <div className='rside'>
          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
          <button 
            type="button" 
            className="btn btn-outline-warning" 
            onClick={addToCart}
            disabled={inCart}
          >
            {inCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
          {inCart && (
            <button 
              type="button" 
              className="btn btn-outline-danger" 
              onClick={removeFromCart}
              style={{ marginLeft: '10px' }}
            >
              Remove from Cart
            </button>
          )}

          {/* Buy Now Button */}
          <div style={{ marginTop: '15px' }}>
            <button 
              type="button" 
              className="btn btn-outline-success"
              onClick={handleBuyNow}
            >
             <Link to='/pay'>
                            Buy Now</Link>
            </button>
          </div><br />
          <p>If You Want To See The Cart Items Plz Scroll Down</p>
        </div>
      </div>

      {/* Cart Section */}
      <div className='cart-section'>
        <h2>🛒 Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Msingle;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../utility/CartSlice';
import { selectCart } from '../utility/CartSlice';
import CartItem from './CartItem';


function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return <div className="flex justify-center items-center h-screen text-xl text-gray-500">Your cart is empty</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cart.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            onRemove={() => handleRemoveFromCart(item.id)}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div className="text-xl font-semibold">
          Total: <span className="text-green-600">${calculateTotal()}</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;

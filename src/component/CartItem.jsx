import React from 'react';

function CartItem({ item, onRemove }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-4" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
        <p className="text-gray-600 mb-1">Price: ${item.price}</p>
        <p className="text-gray-600">Quantity: {item.quantity}</p>
      </div>
      <button 
        onClick={onRemove} 
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;

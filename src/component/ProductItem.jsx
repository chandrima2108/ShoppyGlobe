import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utility/CartSlice';


function ProductItem({ product }) {
  const dispatch = useDispatch();
  const primaryColor = '#006400'; // Dark green color

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/product/${product.id}`} className="block">
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
          <p className="text-xl font-bold mb-2" style={{ color: primaryColor }}>${product.price}</p>
          <p className="text-sm text-gray-600 mb-4">{product.description.slice(0, 100)}...</p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button 
          onClick={handleAddToCart} 
          className="w-full text-white py-2 px-4 rounded transition duration-200"
          style={{ backgroundColor: primaryColor, ':hover': { backgroundColor: '#004d00' } }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;

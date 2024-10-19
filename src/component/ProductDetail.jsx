import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utility/CartSlice';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
  if (!product) return <div className="flex justify-center items-center h-screen">Product not found</div>;

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-64 object-cover" src={product.thumbnail} alt={product.title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold text-green-600">${product.price}</p>
          <p className="text-sm text-gray-600">Rating: {product.rating}/5</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <p className="text-sm text-gray-600">Stock: {product.stock}</p>
          <p className="text-sm text-gray-600">Brand: {product.brand}</p>
          <p className="text-sm text-gray-600">Category: {product.category}</p>
        </div>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

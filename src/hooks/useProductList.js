import { useState, useEffect } from 'react';

const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const primaryColor = '#006400'; // Dark green color

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
    
        const data = await response.json();
        console.log(data);
        const styledProducts = data.products.map(product => ({
          ...product,
          style: { color: primaryColor }
        }));
        setProducts(styledProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error, primaryColor };
};

export default useProductList;

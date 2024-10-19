import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cart = useSelector(state => state.cart);

  return (
    <header className="bg-green-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-green-200 transition duration-300">ShoppyGlobe</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-green-200 transition duration-300">Home</Link></li>
            <li>
              <Link to="/cart" className="flex items-center hover:text-green-200 transition duration-300">
                <span>Cart</span>
                <span className="ml-2 bg-green-700 rounded-full px-2 py-1 text-xs">{cart.length}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

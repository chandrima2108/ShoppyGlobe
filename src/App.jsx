import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utility/store';

import Header from './component/Header';

const ProductList = lazy(() => import('./component/ProductList'));
const ProductDetail = lazy(() => import('./component/ProductDetail'));
const Cart = lazy(() => import('./component/Cart'));
const NotFound = lazy(() => import('./component/NotFound'));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

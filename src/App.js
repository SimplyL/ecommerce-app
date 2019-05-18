import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/navigation';
import Home from './routes/home';
import ProductDetails from './routes/productDetails';
import ShoppingCart from './routes/shoppingCart';
import PATHS from './constants/paths';
import products from './dataStorageMock/products';

const App = () => (
  <Router>
    <Navigation paths={PATHS} />
    <Route
      path={PATHS.home}
      exact
      render={() => <Home products={products} />}
    />
    <Route
      path={PATHS.productDetails}
      render={() => <ProductDetails products={products} />}
    />
    <Route
      path={PATHS.cart}
      render={() => <ShoppingCart products={products} />}
    />
  </Router>
);

export default App;

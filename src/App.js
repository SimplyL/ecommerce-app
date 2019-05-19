import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import Navigation from './components/navigation';
import ChatWindow from './components/chatWindow';
import Home from './routes/home';
import ProductDetails from './routes/productDetails';
import ShoppingCart from './routes/shoppingCart';
import PATHS from './constants/paths';
import products from './dataStorageMock/products';
import { Section } from './App.styles';

const App = ({ shoppingCart }) => (
  <Router>
    <Navigation paths={PATHS} cartSize={shoppingCart.length} />
    <Section>
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
    </Section>
    <ChatWindow/>
  </Router>
);

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart,
  };
};

export default connect(mapStateToProps)(App);

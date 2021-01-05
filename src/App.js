
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ProductPage from './pages/products/products.component';
import CartPage from './pages/cart/cart.component';


const App = () => {
  return (
    <div className='app'>
      <Header />
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route path='/produtos' component={ProductPage} />
        <Route path='/carrinho' component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;

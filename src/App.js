
import React, { Fragment, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
const HomePage = lazy(() => import('./pages/home/home.component'));
const ProductPage = lazy(() => import('./pages/products/products.component'));
const CartPage = lazy(() => import('./pages/cart/cart.component'));


const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch >
        <Suspense fallback='loading...'>
          <Route exact path='/' component={HomePage} />
          <Route path='/produtos' component={ProductPage} />
          <Route path='/carrinho' component={CartPage} />
        </Suspense>
      </Switch>
    </Fragment>
  );
}

export default App;

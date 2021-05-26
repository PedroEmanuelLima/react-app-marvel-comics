import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import { Menu } from './components/Menu';
import { PurchaseItNow } from './pages/PurchaseItNow';

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/purchase/:id' component={PurchaseItNow} />
      </Switch>
  </BrowserRouter>
  );
};

export default Routes;
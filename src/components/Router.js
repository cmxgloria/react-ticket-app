import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Ticket from './Ticket';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/ticket/:id' component={Ticket} />
    </Switch>
  </BrowserRouter>
);
export default Router;


import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Ticket from './Ticket';
import Tickets from './Tickets';
// '/' redners Tickets component, 'ticket/1', renders Ticket component
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Tickets} />
      <Route path='/ticket/:id' component={Ticket} />
    </Switch>
  </BrowserRouter>
);
export default Router;


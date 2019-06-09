import React from 'react';
import ReactDOM from 'react-dom';
import Tickets from './Tickets';

it('renders Tickets component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tickets />, div);
  ReactDOM.unmountComponentAtNode(div);
});


import React from 'react';
import ReactDOM from 'react-dom';
import Ticket from './Ticket';

it('renders Ticket component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ticket match={{ params: { id: 1 } }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


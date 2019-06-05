import React from 'react';

const Form = props => (
  <form onSubmit={props.getTicket}>
    <input type="text" name="ticketName" />
    <button>Search</button>
  </form>
);

export default Form;
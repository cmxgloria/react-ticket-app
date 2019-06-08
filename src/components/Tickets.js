import React from 'react';
import { Link } from 'react-router-dom';

const Tickets = props => (
  <div className="Container">
    <div className="Tickets-total">Total tickets: {props.total}</div>
    {props.tickets.map((ticket) => {
      return (
        <div key={ticket.subject} className="Ticket-container">
          <div className="Ticket-text">
            <h4>{ticket.subject}</h4>
            <span>status: {ticket.status}</span>
            <div key={ticket.requester_id}>
              <p>Created At: {new Date(ticket.created_at).toDateString()}</p>
              {/* <p>Description: <span>{ticket.description}</span></p> */}
            </div>
          </div>
          <button className="Ticket-button">
            <Link to={{
              pathname: `/ticket/${ticket.id}`
            }}>
              View Ticket
              </Link>
          </button>
        </div>);
    })}
  </div>
);
export default Tickets;
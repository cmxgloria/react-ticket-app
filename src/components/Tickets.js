import React from 'react';

const Tickets = props => (
  <div className="Container">
    <div className="row">
      {props.tickets.map((ticket) => {
        return (
          <div key={ticket.subject} className="Ticket-container">
            <div className="Ticket-box">
              <div className="Ticket-text">
                <h4>{ticket.subject}</h4>
                <h5>{ticket.status}</h5>
                <div key={ticket.requester_id}>
                  <p>Created At: {new Date(ticket.created_at).toDateString()}</p>
                  <p>{ticket.description}</p>
                </div>
              </div>
            </div>
            <button></button>
          </div>);
      })}
    </div>
  </div>
);
export default Tickets;
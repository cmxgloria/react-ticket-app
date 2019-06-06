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
                  <p>Description: <span>{ticket.description}</span></p>
                </div>
              </div>
            </div>
            <button className="Ticket-button">
              <a href={ticket.url}>View Ticket</a>
            </button>
          </div>);
      })}
    </div>
  </div>
);
export default Tickets;
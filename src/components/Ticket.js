import React from 'react';
import { Link } from 'react-router-dom';

class Ticket extends React.Component {
  state = {
    ticket: null,
    error: null
  }
  componentDidMount = async () => {
    const ticketId = this.props.match.params.id;
    try {
      const request = await fetch(`https://cors-anywhere.herokuapp.com/https://meixiao.zendesk.com/api/v2/tickets/${ticketId}.json`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic Y214Z2xvcmlhQGdtYWlsLmNvbTp6ZEA2MTgwNzY2'
          }
        });
      const result = await request.json();
      this.setState({ ticket: result.ticket })
    } catch (error) {
      console.log(error);
      this.setState({ error: true })
    }
  }
  render() {
    if (this.state.error) {
      return <div>Sorry, API Error!</div>
    }
    const ticket = this.state.ticket;
    return (
      <div className="Ticket-container">
        {
          ticket &&
          <div className="active-ticket">
            <h3 className="active-ticket__subject">Subject:{ticket.subject}</h3>
            <p>Created At: {new Date(ticket.created_at).toDateString()}</p>
            <p>Updated At: {new Date(ticket.updated_at).toDateString()}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Status: {ticket.status}</p>
            <p className="active-ticket__description">{ticket.description}</p>
            <button className="active-recipe__button"><Link to="/">Go Home</Link></button>
          </div>
        }
      </div>
    );
  }
};
export default Ticket;

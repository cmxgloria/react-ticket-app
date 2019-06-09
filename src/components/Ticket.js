import React from 'react';
import { Link } from 'react-router-dom';

class Ticket extends React.Component {
  state = {
    ticket: null,
    error: null,
    loading: false
  }
  componentDidMount = async () => {
    this.setState({ loading: true });
    const ticketId = this.props.match.params.id;
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://meixiao.zendesk.com/api/v2/tickets/${ticketId}.json`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic Y214Z2xvcmlhQGdtYWlsLmNvbTp6ZEA2MTgwNzY2'
          }
        });
      const result = await response.json();
      if (response.ok) {
        this.setState({ ticket: result.ticket, loading: false })
      } else {
        this.setState({ error: result.error, loading: false })
      }

    } catch (error) {
      console.log(error);
      this.setState({ error: error.message, loading: false })
    }
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <div>Oh noes, something went wrong!</div>
          <div>{this.state.error}</div>
        </div>
      )
    }
    if (this.state.loading) {
      return <div>loading...</div>
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

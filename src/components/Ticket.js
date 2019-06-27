import React from 'react';
import { Link } from 'react-router-dom';

class Ticket extends React.Component {
  // default state
  state = {
    ticket: null,
    error: null,
    loading: false
  }
  componentDidMount = async () => {
    this.setState({ loading: true });
    // get ticketId from Router (path='/ticket/:id')
    //React router pass props (history, match and location) to ticket component
    const ticketId = this.props.match.params.id;
    // start fetching
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
      } else { // handle API error
        this.setState({ error: String(result.error), loading: false })
      }

    } catch (error) { // handle unexpected error (internet error)
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

    // else return ticket information
    const ticket = this.state.ticket;
    return (
      <div>
        {
          ticket && (
            <div>
              <h3>Subject:{ticket.subject}</h3>
              <p>Created At: {new Date(ticket.created_at).toDateString()}</p>
              <p>Updated At: {new Date(ticket.updated_at).toDateString()}</p>
              <p>Priority: {ticket.priority}</p>
              <p>Status: {ticket.status}</p>
              <p>{ticket.description}</p>
              <button className="button"><Link className="link" to="/">Go Home</Link></button>
            </div>
          )
        }
      </div>
    );
  }
};
export default Ticket;

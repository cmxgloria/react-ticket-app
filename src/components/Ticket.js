import React from 'react';
import { Link } from 'react-router-dom';

class Ticket extends React.Component {
  state = {
    ticket: null
  }
  componentDidMount = async () => {
    const ticketId = this.props.match.params.id;
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
    console.log(result.ticket);
  }
  render() {
    const ticket = this.state.ticket;
    return (
      <div className="container">
        {
          ticket &&
          <div className="active-ticket">
            <h3 className="active-ticket__subject">Subject:{ticket.subject}</h3>
            <h4 className="active-ticket__description">Description:{ticket.description}</h4>
            <button className="active-recipe__button"><Link to="/">Go Home</Link></button>
          </div>
        }
      </div>
    );
  }
};
export default Ticket;

import React from 'react';
import { Link } from 'react-router-dom';


class Tickets extends React.Component {
  state = {
    tickets: [],
    nextPage: null,
    previousPage: null,
    loading: false,
    total: 0
  }
  apiCall = async (ticksUrl) => {
    this.setState({
      loading: true
    });
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/${ticksUrl}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic Y214Z2xvcmlhQGdtYWlsLmNvbTp6ZEA2MTgwNzY2'
        }
      });
    const data = await api_call.json();
    console.log(data);
    this.setState({
      tickets: data.tickets,
      nextPage: data.next_page,
      previousPage: data.previous_page,
      total: data.count,
      loading: false
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }
  componentDidMount = async () => {
    await this.apiCall('https://meixiao.zendesk.com/api/v2/tickets.json?per_page=25&page=1');
  }

  render() {
    if (this.state.loading) {
      return <div>loading ...</div>
    }
    return (
      <div className="Container">
        <div className="Tickets-total">Total tickets: {this.state.total}</div>
        {this.state.tickets.map((ticket) => {
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
        {this.state.previousPage && <button onClick={(e) => this.apiCall(this.state.previousPage)}>prev</button>}
        {this.state.nextPage && <button onClick={(e) => this.apiCall(this.state.nextPage)}>next</button>}
        {this.state.nextPage && <button><Link to={{ pathname: '/?page=2', query: { page: 2 } }}>next</Link></button>}
      </div>
    )
  }
}
export default Tickets;
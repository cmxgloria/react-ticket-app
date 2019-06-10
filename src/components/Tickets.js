import React from 'react';
import { Link } from 'react-router-dom';

class Tickets extends React.Component {
  // default state
  state = {
    tickets: [],
    nextPage: null,
    previousPage: null,
    loading: false,
    total: 0,
    error: null,
    page: null
  }
  apiCall = async (ticketsUrl) => {
    // start loading before fetch
    this.setState({
      loading: true
    });
    try {
      const api_call = await fetch(`https://cors-anywhere.herokuapp.com/${ticketsUrl}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic Y214Z2xvcmlhQGdtYWlsLmNvbTp6ZEA2MTgwNzY2'
          }
        });
      const data = await api_call.json();
      // if api_call is ok
      if (api_call.ok) {
        this.setState({
          tickets: data.tickets,
          nextPage: data.next_page,
          previousPage: data.previous_page,
          total: data.count,
          loading: false,
          page: ticketsUrl.replace('https://meixiao.zendesk.com/api/v2/tickets.json?', '')
        })
      } else { // if api returns error
        this.setState({ error: data.error, loading: false })
      }
    } catch (error) { // any error
      console.log(error);
      this.setState({ error: error.message, loading: false })
    }
  }

  componentDidMount = async () => {
    // first time renders page 1
    await this.apiCall('https://meixiao.zendesk.com/api/v2/tickets.json?page=1&per_page=25');
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
      return <div>loading ...</div>
    }

    const { tickets, previousPage, nextPage, total, page } = this.state;
    return (
      <div className="Container">
        <div className="Tickets-total">{total} total tickets, {tickets.length} on this page, {page}</div>
        {/* loop through tickets */}
        {tickets.map((ticket) => {
          return (
            <div key={ticket.id} className="Ticket-container">
              <div className="Ticket-text">
                <h4>{ticket.subject}</h4>
                <span>status: {ticket.status}</span>
                <div>
                  <p>Created At: {new Date(ticket.created_at).toDateString()}</p>
                </div>
              </div>
              <button className="button">
                <Link className="link" to={{
                  pathname: `/ticket/${ticket.id}`
                }}>
                  View Ticket
              </Link>
              </button>
            </div>);
        })}
        {previousPage && <button className="pagination button" onClick={(e) => this.apiCall(previousPage)}>prev</button>}
        {nextPage && <button className="pagination button" onClick={(e) => this.apiCall(nextPage)}>next</button>}
      </div>
    )
  }
}

export default Tickets;
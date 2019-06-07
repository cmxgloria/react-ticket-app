import React from 'react';

class Ticket extends React.Component {
  state = {
    ticket: []
  }
  componentDidMount = async () => {
    const url = this.props.location.state.url
    const request = await fetch(`https://cors-anywhere.herokuapp.com/${url}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic Y214Z2xvcmlhQGdtYWlsLmNvbTp6ZEA2MTgwNzY2'
        }
      });
    const result = await request.json();
    console.log(result);
    this.setState({ ticket: result.ticket })
  }
  render() {
    return (
      <div>{this.state.ticket.subject}</div>
    );
  }
};
export default Ticket;

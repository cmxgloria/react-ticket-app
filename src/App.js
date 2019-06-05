import React from 'react';
import './App.css';
import Tickets from './components/Tickets';

class App extends React.Component {
  state = {
    tickets: []
  }
  componentDidMount = async () => {
    const api_call = await fetch('https://cors-anywhere.herokuapp.com/https://meixiao.zendesk.com/api/v2/tickets.json?per_page=25',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic Y214Z2xvcmlhQGdtYWlsLmNvbTp6ZEA2MTgwNzY2'
        }
      });
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="https://www.zendesk.com/" target="_blank">
            <img src="https://d1eipm3vz40hy0.cloudfront.net/images/p-omnichannel/logo-suite-z.svg" alt="logo" />
          </a>
        </header>
        <Tickets tickets={this.state.tickets} />
      </div>
    );
  }
}

export default App;

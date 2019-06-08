import React from 'react';
import './App.css';
import Tickets from './components/Tickets';
import { Link } from 'react-router-dom';

class App extends React.Component {
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
    console.log(this.props)
    await this.apiCall('https://meixiao.zendesk.com/api/v2/tickets.json?per_page=25&page=1');
    // const page = this.props.match.params.id;
  }
  render() {
    console.log(this.props)
    if (this.state.loading) {
      return <div>loading ...</div>
    }
    return (
      <div className="App">
        <header className="App-header">
          <a href="https://www.zendesk.com/" target="_blank">
            <img src="https://d1eipm3vz40hy0.cloudfront.net/images/p-omnichannel/logo-suite-z.svg" alt="logo" />
          </a>
        </header>
        <Tickets tickets={this.state.tickets} total={this.state.total} />
        {this.state.previousPage && <button onClick={(e) => this.apiCall(this.state.previousPage)}>prev</button>}
        {this.state.nextPage && <button onClick={(e) => this.apiCall(this.state.nextPage)}>next</button>}
        {this.state.nextPage && <button><Link to={{ pathname: '/?page=2', query: { page: 2 } }}>next</Link></button>}
      </div>
    );
  }
}

export default App;

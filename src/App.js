import React from 'react';
import './App.css';
import Tickets from './components/Tickets';

class App extends React.Component {
  state = {
    tickets: []
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

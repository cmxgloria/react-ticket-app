import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    recipes: []
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="https://www.zendesk.com/" target="_blank">
            <img src="https://d1eipm3vz40hy0.cloudfront.net/images/p-omnichannel/logo-suite-z.svg" alt="logo" />
          </a>
        </header>
      </div>
    );
  }
}

export default App;

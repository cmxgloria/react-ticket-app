import React from 'react';
import './App.css';

class App extends React.Component {
  getTicket = async (e) => {
    const ticketName = e.target.elements.recipeName.value
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://meixiao.zendesk.com/api/search?Key=${API_KEY}&q=ticket&count=25`);

    const data = await api_call.json();
    console.log(data);

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://d1eipm3vz40hy0.cloudfront.net/images/p-omnichannel/logo-suite-z.svg" alt="logo" />
          <a
            href="https://www.zendesk.com/"
            target="_blank"
          >
            Zendesk
          </a>
        </header>
      </div>
    );
  }
}

export default App;

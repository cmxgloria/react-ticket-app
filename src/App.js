import React from 'react';
import Logo from './logo.svg';
import './App.css';
import Form from './components/Form';

const API_KEY = "Mg4az0ZzAuOxCtkwaCXW4iXbKNFOnt5BpdKsHzCR";

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
          <img src={Logo} className="App-logo" alt="logo" />
          <logo />;
          <Form getTicket={this.getTicket} />;
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zendesk Ticket Viewer
          </a>
        </header>
      </div>
    );
  }
}

export default App;

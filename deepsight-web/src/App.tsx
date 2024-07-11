import React from 'react';
import logo from './logo.svg';
import './App.css';

import { PingWebSocket } from './apis/WebSockets';

function App() {
  const {sendJsonMessage, lastJsonMessage} = PingWebSocket();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <text>
          {lastJsonMessage ? (
              <pre>{JSON.stringify(lastJsonMessage, null, 2)}</pre>
            ) : (
              <p>No messages received yet.</p>
            )}
        </text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

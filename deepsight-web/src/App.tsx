import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';

import { PingWebSocket } from './apis/WebSockets';


function App() {

  const { sendMessage, lastMessage, connectionStatus } = PingWebSocket();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {connectionStatus}
        </div>
        <div>
          {lastMessage ? (
              <pre>{lastMessage.data}</pre>
            ) : (
              <p>No messages received yet.</p>
            )}
        </div>
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

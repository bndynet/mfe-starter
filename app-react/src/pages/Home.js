import React from 'react';

import logo from '../logo.svg';

export default function () {
  return (
    <div className="text-center">
      <img src={logo} className="App-logo" alt="logo" />
      <br />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}
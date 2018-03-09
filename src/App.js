import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class BF extends Component {
  render() {
    return (
      <div className="BasicFacts">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Basic Facts Homework App</h1>
        </header>
        <p className="App-intro">
          Test your knowledge of Basic Facts.
        </p>
      </div>
    );
  }
}

export default BF;

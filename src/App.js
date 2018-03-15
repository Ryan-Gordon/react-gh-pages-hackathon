import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GMIT Hackathon 2018 powered by startlab</h1>
        </header>
        
        <p>Education based / Gesture based AI </p>
  <p>Preferably projects should be powered by Azure</p>

  <p>Submit whatever you get done at the end of the day ! :) </p>
      </div>
    );
  }
}

export default App;

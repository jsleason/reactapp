import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Community from './components/Community'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">PLASTICDETOX</h1>
        <Navbar />
        </header>
        <Home />
        <Community />
      </div>
    );
  }
}

export default App;

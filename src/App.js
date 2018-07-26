import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>PLASTICDETOX</h1>
        <Navbar />
        </header>

      </div>
    );
  }
}

export default App;

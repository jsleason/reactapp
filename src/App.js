import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Community from './components/Community'
import About from './components/About'
import Partners from './components/Partners'
import SupportPartners from './components/SupportPartners'
import Footer from './components/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PLASTIC DETOX</h1>
          <Navbar/>
        </header>
        <div>
          <Home/>
          <Community/>
          <About/>
          <Partners/>
          <SupportPartners/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default App;

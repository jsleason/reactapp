import React, { Component } from 'react';
import './style/Home.css';

class Philosophy extends Component {
    render() {
        return (
          <div className="Home">
          <br/>
            <div>
              <center>
                <div>
                  <h1>Our Philosophy</h1>
                </div>
                <div className="wrapper">
                  <div className="one">
                    <div>icon</div>
                    <div><h2>What</h2></div>
                    <div><p>What Description</p></div>
                  </div>
                  <div className="two">
                    <div>icon</div>
                    <div><h2>How</h2></div>
                    <div><p>How Description</p></div>
                  </div>
                  <div className="three">
                    <div>icon</div>
                    <div><h2>Why</h2></div>
                    <div><p>Why Description</p></div>
                  </div>
                </div>
                <br/>
              </center>
            </div>
          </div>
        )
    }
}

export default Philosophy;

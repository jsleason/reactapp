import React, { Component } from 'react';
import './style/Community.css';

class Community extends Component {
    render() {
        return (
            <div className="Community">
              <center>
              <div>
                <br/>
                <h1>The Plastic Detox Community</h1>
              </div>
              <div className="wrapper">
                <div className="one">
                  <center>
                  <div className="logo"> Logo
                  </div>
                  <div className="text"> text
                  </div>
                  </center>
                </div>
                <div className="two">
                  <center>
                  <div className="logo"> Logo
                  </div>
                  <div className="text"> text
                  </div>
                  </center>
                </div>
                <div className="three">
                  <center>
                  <div className="logo"> Logo
                  </div>
                  <div className="text"> text
                  </div>
                  </center>
                </div>
              </div>
              <br/>
              </center>
            </div>
        )
    }
}

export default Community;

import React, { Component } from 'react';
import './style/Home.css';

class Home extends Component {
    render() {
        return (
          <div className="Home">
            <br/>
            <div className="wrapper">
              <div className="bottle">
                <center>
                  <img src="http://plasticdetox.me/static/media/PlasticBottle.63125dad.png" alt=""/>
                </center>
              </div>
              <div className="two">
                <center>
                  <div>
                    <center>
                    <h4>Thanks for joining #PlasticDetox</h4>
                    <button>SIGN ME UP!</button>
                    </center>
                  </div>
                </center>
              </div>
            </div>
          </div>
        )
    }
}

export default Home;

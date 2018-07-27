import React, { Component } from 'react';
import './style/Home.css';

class Home extends Component {
    render() {
        return (
          <div class="Home">
            <br/>
            <div className="wrapper">
              <div className="bottle">
                <center>
                  <img src="http://plasticdetox.me/static/media/PlasticBottle.63125dad.png"/>
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

export default Home;

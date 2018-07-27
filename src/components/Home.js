import React, { Component } from 'react';
import './style/Home.css';

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        header: "Thanks for joining #PlasticDetox",
        subheader: ''
      }
    }
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
                    <h2>{this.state.header}</h2>
                    <h3>{this.state.subheader}</h3>
                    <button >SIGN ME UP!</button>
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

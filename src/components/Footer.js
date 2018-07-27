import React, { Component } from 'react';
import './style/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
              <center>
                <br/>
                <h1>Footer</h1>
              <div className="foot-wrapper">
                <div className="foot-one"> Logo
                </div>
                <div className="foot-two">
                  <ul>
                    <li>List Item</li>
                  </ul>
                </div>
                <div className="foot-three">
                </div>
                <div className="foot-four"> Social Media
                </div>
                <div>
                  <p>Made with ❤️ by Jess</p>
                </div>
              </div>
              <br/>
              </center>
            </div>
        )
    }
}

export default Footer;

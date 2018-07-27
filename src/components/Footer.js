import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom'
import  createBrowserHistory from 'history/createBrowserHistory';
import './style/Footer.css';

class Footer extends Component {
    render() {
      const   customHistory = createBrowserHistory();
        return (
            <div className="Footer">
              <center>
                <br/>
                <h1>Footer</h1>
              <div className="foot-wrapper">
                <div className="foot-one"> Logo
                </div>
                <div className="foot-two">
                <Router history={customHistory}>
                    <li>
                        <Link className="btn" to="/about">Our Impact</Link>
                    </li>
                </Router>
                  <Router history={customHistory}>
                      <li>
                          <Link className="btn" to="/philosophy">Our Philosophy</Link>
                      </li>
                  </Router>
                  <Router history={customHistory}>
                      <li>
                          <Link className="btn" to="/community">The Plastic Detox Community</Link>
                      </li>
                  </Router>
                  <Router history={customHistory}>
                      <li>
                          <Link className="btn" to="/partners">Our Partners</Link>
                      </li>
                  </Router>
                </div>
                <div className="foot-three">
                </div>
                <div className="foot-four"> Social Media
                </div>
                <div className="signature">
                  <p><small>Made with ❤️ by Jess</small></p>
                </div>
              </div>
              <br/>
              </center>
            </div>
        )
    }
}

export default Footer;

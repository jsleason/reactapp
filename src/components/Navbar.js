import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom'
import  createBrowserHistory from 'history/createBrowserHistory';

class Navbar extends Component {
    render() {
      const   customHistory = createBrowserHistory();
        return (
            <div>
              <Router history={customHistory}>
                  <div className="navHeader">
                      <Link className="btn" to="/philosophy">Philosophy</Link>
                  </div>
              </Router>
              <Router history={customHistory}>
                  <div className="navHeader">
                      <Link className="btn" to="/community">Community</Link>
                  </div>
              </Router>
              <Router history={customHistory}>
                  <div className="navHeader">
                      <Link className="btn" to="/partners">Partners</Link>
                  </div>
              </Router>
            </div>
        )
    }
}

export default Navbar;

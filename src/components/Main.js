import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Philosophy from './Philosophy';
import Community from './Community';
import Partners from './Partners';
import About from './About';

class Main extends Component {
  render() {
    return(
    <main>
    <Switch>
      <Route path='/impact' component={ About } />
      <Route path='/philosophy' component={ Philosophy } />
      <Route path='/community' component={ Community } />
      <Route path='/partners' component={ Partners } />
    </Switch>
  </main>)
  }

}

export default Main;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Share from './components/Share';
import './stylesheets/app.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import Quiz from './components/Quiz';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/create' component={Create} />
          <Route path='/share' component={Share} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

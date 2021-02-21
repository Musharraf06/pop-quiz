import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import New from './components/New';
import Question from './components/Question';
import Create from './components/Create';
import Share from './components/Share';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/quiz'>
            <New />
          </Route>
          <Route path='/share'>
            <Share />
          </Route>
          <Route path='/random'>
            <Question file={1} title={''} name={''} userSet={''} />
          </Route>
          <Route path='/aptitude'>
            <Question file={2} title={''} name={''} userSet={''} />
          </Route>
          <Route path='/create'>
            <Create set={0} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./materialize/css/materialize.css";
import Home from "./components/Home";
import New from "./components/New";
import Question from "./components/Question";
import Create from "./components/Create";
import '../src/stylesheets/app.css';

const App = () => {
  return (
    <>
      <div className="background">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quiz">
              <New />
            </Route>
            <Route path="/random">
              <Question />
            </Route>
            <Route path="/aptitude">
              <Question />
            </Route>
            <Route path="/create">
              <Create set={0} />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;

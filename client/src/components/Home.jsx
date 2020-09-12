import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../materialize/css/materialize.css';
import Cards from '../components/Cards';
import New from '../components/New';

const Home = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Cards />
                    </Route>
                    <Route path="/quiz">
                        <New />
                    </Route>
                </Switch>
            </Router>

        </>
    );
}

export default Home;
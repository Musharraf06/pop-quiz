import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Quiz from '../components/Quiz';
import '../stylesheets/home.css';

const Home = () => {
    const [open, setOpen] = useState(false);
    const [source, setSource] = useState('new');
    const close = () => { setOpen(false) };
    const setRandom = () => {
        setOpen(true);
        setSource('random');
        window.location = "/random";
    }
    const setAptitude = () => {
        setOpen(true);
        setSource('aptitude');
        window.location = "/aptitude";
    }
    const setCreate = () => {
        setOpen(true);
        setSource('create');
        window.location = "/create";
    }

    return (
        <>
            <div className="home">
                <div className="center-align container">
                    <span className="header">Pop - Quiz</span>
                    <Router>
                        <Link to="/random" className="home-btn" center-align onClick={setRandom}>General Questions</Link>
                    </Router>

                    <Router>
                        <Link to="/aptitude" className="home-btn" onClick={setAptitude}>Aptitude Questions</Link>
                    </Router>

                    <Router>
                        <Link to="/create" className="home-btn" onClick={setCreate}>Create Your Own Quiz</Link>
                    </Router>
                </div>
            </div>

            {/* <div style={container_div}>
                <div className="row" style={row}>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Random</span>
                                <p>Your Score : {}</p>
                                <p>Highest Score : {}</p>
                            </div>
                            <div className="card-action">
                                <Router>
                                    <Link to="/random" onClick={setRandom}>Play</Link>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={row}>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Aptitude</span>
                                <p>Your Score : {}</p>
                                <p>Highest Score : {}</p>
                            </div>
                            <div className="card-action">
                                <Router>
                                    <Link to="/aptitude" onClick={setAptitude}>Play</Link>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={row}>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Create Quiz</span>
                                <span>Create custom quiz and share</span>
                            </div>
                            <div className="card-action">
                                <Router>
                                    <Link to="/create" onClick={setCreate}>Create</Link>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
           </div> */}
            <Quiz isOpen={open} Isclose={close} source={source} />
        </>
    );
}

export default Home;
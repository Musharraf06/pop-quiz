import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Quiz from '../components/Quiz';

//CSS 
const row = {
    margin: 'auto',
    width: '50rem',
    display: 'inline',
    overflow: 'hidden'
}

const container_div = {
    display: 'flex',
    margin: '10rem 0px 0px 11rem'
}

const Cards = () => {
    const [open, setOpen] = useState(false);
    const [source, setSource] = useState('new');
    const close = () => { setOpen(false) };
    const setRandom = () => {
        setOpen(true);
        setSource('random');
    }
    const setAptitude = () => {
        setOpen(true);
        setSource('aptitude');
    }
    const setCreate = () => {
        setOpen(true);
        setSource('create');
    }

    return (
        <>
            <h1 className="center-align" style={{ color: 'white' }}>Pop - Quiz</h1>
            <div style={container_div}>
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
                                    {/* <Link onClick={setRandom}>Play</Link> */}
                                    <Link to="" onClick={setRandom}>Play</Link>
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
                                    {/* <Link onClick={setAptitude}>Play</Link> */}
                                    <Link to="" onClick={setAptitude}>Play</Link>
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
                <Quiz isOpen={open} Isclose={close} source={source} />
            </div>
        </>
    );
}

export default Cards;
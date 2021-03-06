import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgb(0 123 255 / 25%)' }}>
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Pop - Quiz</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/quiz" className="nav-link">Quiz</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className="nav-link">Create</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#" className="nav-link">Beta</Link>
                    </li>
                    <li className="nav-item">
                        <a href="http://musharraf06.github.io" target='_blank' className="nav-link">About</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
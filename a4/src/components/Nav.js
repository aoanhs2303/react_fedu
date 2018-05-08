import React, { Component } from 'react';
import {BrowserRouter as Link,NavLink} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <NavLink to="/home" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/tin" className="nav-link">News</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/tin-tuc" className="nav-link">Detail</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/lien-he" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Nav;
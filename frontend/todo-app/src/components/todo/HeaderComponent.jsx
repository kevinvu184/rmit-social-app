import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.rmit.edu.au/" className="navbar-brand">RMIT</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/home">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/events">Events</Link> </li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/myevents">myEvents</Link> </li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/classmates">Classmate</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/map">RMIT Map</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/calendar">Calendar</Link></li>}

                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/register">Register</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent
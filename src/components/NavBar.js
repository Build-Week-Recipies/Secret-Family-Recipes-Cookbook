import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from '/Login';
import HomePage from './HomePage';

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
            </nav>
            <Router>
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route exact path='/' component={HomePage} />
            </Router>
        </div>
    )
}

export default NavBar;
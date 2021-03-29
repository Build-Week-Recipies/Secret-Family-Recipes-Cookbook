import React from 'react';
import Signup from './Signup';
import Login from './Login';
import HomePage from './HomePage';

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Sign Up</Link>
            </nav>
        </div>
    )
}

export default NavBar;
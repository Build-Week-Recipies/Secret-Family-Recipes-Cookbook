import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Dashboard = () => {

    let nav = {
        logOut: true,
        add: true,
    }

    return (
        <div>
            <NavBar display={nav} />
        </div>
    )
}

export default Dashboard;
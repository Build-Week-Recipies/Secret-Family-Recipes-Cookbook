import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';

let nav = {
    logOut: true,
    add: true,
}

const Dashboard = () => {

    const Background = styled.div`
    width: 40%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;


    `

    return (
        <div>
            <NavBar display={nav} />
            <Background id="bgImg"></Background>
        </div>
    )
}

export default Dashboard;
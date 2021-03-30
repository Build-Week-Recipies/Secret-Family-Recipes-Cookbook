import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';
import RecipeList from './RecipeList'

let nav = {
    logOut: true,
    add: true,
}

const Dashboard = () => {

    const Background = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    color: white;

@media (min-width: 100px) {
    position: relative;
    width: 100vw;
    height: 50vh;
    #bgImg {

    background-size: 400px;
    }
}

@media (min-width: 400px) {
    #bgImg {
    background-size: 550px;
    }
}
/* Larger than phablet (also point when grid becomes active) */

@media (min-width: 550px) {
    
    width: 100vw;
    height: 40vh;
    #bgImg {
        background-size: 750px;
    }
}

/* Larger than tablet */

@media (min-width: 750px) {
    #bgImg {
        background-size: 1025px;
    }
}

/* Larger than desktop */

@media (min-width: 800px) {
    position: fixed;
    width: 40vw;
    height: 100vh;
    #bgImg {
            background-size: 500px;
        }
}

/* Larger than Desktop HD */

@media (min-width: 1200px) {
    #bgImg {
            background-size: 800px;
        }
}

@media (min-width: 1900px) {
    #bgImg {
            background-size: 1000px;
        }
}

    `

    const Dashboard = styled.div`
    #list {
        position: absolute;
        width: 60vw;
        margin: 0;
        padding: 20px;
        left: 40vw;
        top: 30px;
        box-sizing: border-box;
    }

    .listUnit {
        color: black;
    }
    `

    return (
        <Dashboard>
            <NavBar display={nav} />
            <Background ><div id="bgImg"></div><p>Old Recepies For Old People</p></Background>
            <RecipeList />
        </Dashboard>
    )
}

export default Dashboard;
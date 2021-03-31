import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import RecipeList from './RecipeList'

let nav = {
    logOut: true,
    add: true,
}

const Background = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 35vw;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    color: white;

@media (min-width: 100px) {
    position: absolute;
    display: none; 
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
    height: 35vh;
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
    display: flex;
    position: fixed;
    width: 35vw;
    height: 100vh;
    #bgImg {
            background-size: 500px;
        }
}

/* Larger than Desktop HD */

@media (min-width: 1200px) {
    #bgImg {
            background-size: 600px;
        }
}

@media (min-width: 1900px) {
    #bgImg {
            background-size: 1000px;
        }
}

    `

const DashboardDiv = styled.div`
    #list {
        position: absolute;
        width: 65vw;
        margin: 0;
        padding: 20px;
        left: 32vw;
        box-sizing: border-box;
    }

    #searchDiv {
        display: flex;
        justify-content:center;
        width: 100%;

    }

    #search {
        border: none;
    }

    .listUnit {
        color: black;
    }
    `
const Dashboard = () => {



    return (
        <DashboardDiv>
            <NavBar display={nav} />
            <Background ><div id="bgImg"></div><p>Old Recepies For Old People</p></Background>
            <RecipeList />
        </DashboardDiv>
    )
}

export default Dashboard;
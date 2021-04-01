import React from 'react';
import styled from 'styled-components';
import '../App.css';
import NavBar from './NavBar';

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45vw;
    height: 100%;
    position: absolute;
    z-index: -4;
    color: white;

    @media (min-width: 100px) {
    
    position: absolute;
    display:block;
    width: 100vw;
    height: 50vh;
    #bgImg {
    display:block;
    margin: 5px;
    box-sizing: border-box;
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
   `;

const HomeDiv = styled.div`
    position: absolute;
    width: 40vw;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
    right: 15%;
    top: 20%;

    @media (max-width: 800px) {
        display: block;
        margin: 10%;
    }

    @media (max-width: 550px) {
        h1 {
            text-shadow: 3px 3px 3px pink;
        }
    }
`;

let nav = {
    login: true,
    signUp: true,
    home: true,
    add: false,
    logOut: false,
    dashboard: true
}

const HomePage = () => {

    return (
        <div>
            <Background><div id='homeImg'></div></Background>
            <HomeDiv>
                <NavBar display={nav} />
                <h1 style={{fontSize: '3.5rem', fontWeight: 'bold'}}>Secret Family Recipes Cookbook</h1>
                <p>The little cards my grandma wrote the recipes on in her beautiful cursive are getting lost or are hard to read. I need somewhere secure to keep my recipes with me at all times!</p>
            </HomeDiv>
        </div>
            
        
    )
}

export default HomePage;
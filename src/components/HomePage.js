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
   `;

const HomeDiv = styled.div`
    position: absolute;
    width: 40vw;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
    right: 15%;
    top: 20%;
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
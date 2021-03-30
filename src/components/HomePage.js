import React from 'react';
import styled from 'styled-components';
import '../App.css';
import NavBar from './NavBar';


const HomeDiv = styled.div`
    width: 80vw;
    margin: 5% 0 0 5%;
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
        <HomeDiv>
            <NavBar display={nav} />
            <h1>Secret Family Recipes Cookbook</h1>
            <p>The little cards my grandma wrote the recipes on in her beautiful cursive are getting lost or are hard to read. I need somewhere secure to keep my recipes with me at all times!</p>
        </HomeDiv>
    )
}

export default HomePage;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import '../App.css';

//styles
const StyledLink = styled(Link)`
    color: rgb(134, 64, 64);
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
`;
//end styles


// const initialDisplay = {
//     login: false,
//     signUp: false,
//     dashboard: false,
//     logOut: false,
//     add: false,
//     home: false,
// }


const NavBar = (props) => {
    useEffect(() => {
    //animation styles
        const navSlide = () => {
            const burger = document.querySelector('.burger');
            const nav = document.querySelector('.nav-links');
            const navLinks = document.querySelectorAll('.nav-links li');

            burger.addEventListener('click', () => {
                nav.classList.toggle('nav-active');
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .5}s`;
                    }
                })
                burger.classList.toggle('toggle');
            })
        }
        navSlide();
        //end styles
    }, [])

    const { display } = props;
    const [show] = useState(display)
    
    return (

        <div>
            <nav>
                <ul className='nav-links'>
                    <li>{show.home === true && <StyledLink to='/'>Home</StyledLink>}</li>
                    <li>{show.signUp === true && < StyledLink to='/signup'>Sign Up</StyledLink>}</li>
                    <li>{show.login === true && <StyledLink to='/login'>Login</StyledLink>}</li>
                    <li>{show.add === true && <StyledLink to='/dashboard/add'>Add</StyledLink>}</li>
                    <li>{show.logOut === true && <StyledLink to='/'>Log Out</StyledLink>}</li>
                </ul>
                <div className='burger'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </nav>
        </div >
    )
}

export default NavBar;
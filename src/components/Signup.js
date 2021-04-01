import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';

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
    #signupImg {

    background-size: 400px;
    }
}

@media (min-width: 400px) {
    #signupImg {
    background-size: 550px;
    }
}
/* Larger than phablet (also point when grid becomes active) */

@media (min-width: 550px) {
    
    width: 100vw;
    height: 40vh;
    #signupImg {
        background-size: 750px;
    }
}

/* Larger than tablet */

@media (min-width: 750px) {
    #signupImg {
        background-size: 1025px;
    }
}

/* Larger than desktop */

@media (min-width: 800px) {
    position: fixed;
    width: 40vw;
    height: 100vh;
    #signupImg {
            background-size: 500px;
        }
}

/* Larger than Desktop HD */

@media (min-width: 1200px) {
    #signupImg {
            background-size: 800px;
        }
}

@media (min-width: 1900px) {
    #signupImg {
            background-size: 1000px;
        }
}

    `


const SignupDiv = styled.div`
    position: absolute;
    width: 60vw;
    margin: 0;
    padding: 20px;
    left: 35vw;
    top: 25%;
    box-sizing: border-box;

    @media (max-width: 800px) {
        h2 {
            color: white;
        }
    }
`;

const SignUp = () => {
    const initialValues = {
        // first_name: '',
        // last_name: '',
        username: '',
        password: ''
    }
    const [credentials, setCredentials] = useState(initialValues);
    const { push } = useHistory();

    const changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setCredentials({ ...credentials, [name]: value });
    }

    const submitHandler = e => {
        e.preventDefault();
        // axios call to post user info, push to './login'
        axios.post('https://secret-family-recipes2021.herokuapp.com/api/auth/register', credentials)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.response);
            })
        push('/login');
    }

    let nav = {
        login: true,
        signUp: true,
        home: true,
        add: false,
        logOut: false,
        dashboard: true
    }

    return (
        <div>
            <Background><div id='signupImg'></div></Background>
            <SignupDiv>
                <NavBar display={nav} />
                <h2>Sign Up:</h2>
                <form onSubmit={submitHandler}>
                    {/* <label>
                        <input type='text' name='first_name' value={credentials.first_name} onChange={changeHandler} placeholder='First Name:' />
                    </label>
                    <label>
                        <input type='text' name='last_name' value={credentials.last_name} onChange={changeHandler} placeholder='Last Name:' />
                    </label> */}
                    <label>
                        <input type='text' name='username' value={credentials.username} onChange={changeHandler} placeholder='Username:' />
                    </label>
                    <label>
                        <input type='password' name='password' value={credentials.password} onChange={changeHandler} placeholder='Password:' />
                    </label>
                    <button>Submit</button>
                </form>
            </SignupDiv>
        </div>
    )
}

export default SignUp;
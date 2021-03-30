import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const SignupDiv = styled.div`
    width: 80vw;
    margin: 10% 0 0 5%;
`;

const SignUp = () => {
    const initialValues = {
        first_name: '',
        last_name: '',
        username: '',
        password: ''
    }
    const [credentials, setCredentials] = useState(initialValues);

    const changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setCredentials({ [name]: value });
    }

    const submitHandler = e => {
        e.preventDefault();
        // axios call to put user info, push to './login'
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
        <SignupDiv>
            <NavBar display={nav} />
            <h2>Sign Up:</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <input type='text' name='first_name' value={credentials.first_name} onChange={changeHandler} placeholder='First Name:' />
                </label>
                <label>
                    <input type='text' name='last_name' value={credentials.last_name} onChange={changeHandler} placeholder='Last Name:' />
                </label>
                <label>
                    <input type='text' name='username' value={credentials.username} onChange={changeHandler} placeholder='Username:' />
                </label>
                <label>
                    <input type='password' name='password' value={credentials.password} onChange={changeHandler} placeholder='Password:' />
                </label>
                <button>Submit</button>
            </form>
        </SignupDiv>
    )
}

export default SignUp;
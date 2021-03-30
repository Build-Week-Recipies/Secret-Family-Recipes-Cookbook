import React, { useState } from 'react';
import '../App.css';
import styled from 'styled-components';

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
    #loginImg {

    background-size: 400px;
    }
}

@media (min-width: 400px) {
    #loginImg {
    background-size: 550px;
    }
}
/* Larger than phablet (also point when grid becomes active) */

@media (min-width: 550px) {
    
    width: 100vw;
    height: 40vh;
    #loginImg {
        background-size: 750px;
    }
}

/* Larger than tablet */

@media (min-width: 750px) {
    #loginImg {
        background-size: 1025px;
    }
}

/* Larger than desktop */

@media (min-width: 800px) {
    position: fixed;
    width: 40vw;
    height: 100vh;
    #loginImg {
            background-size: 500px;
        }
}

/* Larger than Desktop HD */

@media (min-width: 1200px) {
    #loginImg {
            background-size: 800px;
        }
}

@media (min-width: 1900px) {
    #loginImg {
            background-size: 1000px;
        }
}

    `

const LoginDiv = styled.div`
    position: absolute;
    width: 60vw;
    margin: 0;
    padding: 20px;
    left: 35vw;
    top: 25%;
    box-sizing: border-box;
`;

const Login = () => {
    const initialValues = {
        username: '',
        password: ''
    }
    const [credentials, setCredentials] = useState(initialValues);

    const changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setCredentials({[name]: value});
    }

    const loginHandler = e => {
        e.preventDefault();
        // axios call with token, push to dashboard
    }

    return (
        <div>
            <Background><div id='loginImg'></div></Background>
            <LoginDiv>
                <h2>Log In:</h2>
                <form onSubmit={loginHandler}>
                    <label>
                        <input type='text' name='username' value={credentials.username} onChange={changeHandler} placeholder='Username:' />
                    </label>
                    <label>
                        <input type='password' name='password' value ={credentials.password} onChange={changeHandler} placeholder='Password:' />
                    </label>
                    <button>Log In</button>
                </form>
            </LoginDiv>
        </div>
    )
}

export default Login;
import React, { useState } from 'react';

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
        </div>
    )
}

export default Login;
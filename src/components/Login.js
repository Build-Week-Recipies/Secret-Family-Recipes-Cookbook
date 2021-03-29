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

    return (
        <div>
            <form>
                <label>
                    <input type='text' name='username' value={credentials.username} onChange={changeHandler} placeholder='Username:' />
                </label>
                <label>
                    <input type='password' name='password' value ={credentials.password} onChange={changeHandler} placeholder='Password:' />
                </label>
            </form>
        </div>
    )
}

export default Login;
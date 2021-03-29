import React from 'react';

const Login = () => {
    return (
        <div>
            <form>
                <label>
                    <input type='text' name='username' placeholder='Username:' />
                </label>
                <label>
                    <input type='password' name='password' placeholder='Password:' />
                </label>
            </form>
        </div>
    )
}

export default Login;
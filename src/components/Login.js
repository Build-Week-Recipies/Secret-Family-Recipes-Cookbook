import React from 'react';

const Login = () => {
    return (
        <div>
            <form>
                <label>
                    <input type='text' placeholder='Username:' />
                </label>
                <label>
                    <input type='password' placeholder='Password:' />
                </label>
            </form>
        </div>
    )
}

export default Login;
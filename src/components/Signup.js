import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form>
                <label>
                    <input type='text' name='first_name' placeholder='First Name:' />
                </label>
                <label>
                    <input type='text' name='last_name' placeholder='Last Name:' />
                </label>
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

export default SignUp;
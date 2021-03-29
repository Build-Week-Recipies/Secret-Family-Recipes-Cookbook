import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// const initialDisplay = {
//     login: false,
//     signUp: false,
//     dashboard: false,
//     logOut: false,
//     add: false,
//     home: false,
// }

const NavBar = (props) => {
    const { display } = props;
    const [show] = useState(display)

    return (
        <div>
            <nav>
                {show.home === true && <Link to='/'>Home</Link>}
                {show.add === true && <Link to='/dashboard/add'>Add</Link>}
                {show.signUp === true && < Link to='/signup'>Sign Up</Link>}
                {show.login === true && <Link to='/login'>Login</Link>}
                {show.logOut === true && <Link to='/'>Log Out</Link>}


            </nav>

        </div >
    )
}

export default NavBar;
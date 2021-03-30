import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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
        <div >
            <AppBar id="navbar" >
                <Toolbar>
                    <Typography variant="h6" className="navName">
                        Secret Recipies
          </Typography>
                    {show.home === true && <Button color="inherit"> <Link to='/'>Home</Link></Button>}
                    {show.add === true && <Button color="inherit"> <Link to='/dashboard/add'>Add</Link></Button>}
                    {show.signUp === true && <Button color="inherit"> < Link to='/signup'>Sign Up</Link></Button>}
                    {show.login === true && <Button color="inherit"> <Link to='/login'>Login</Link></Button>}
                    {show.logOut === true && <Button color="inherit"> <Link to='/'>Log Out</Link></Button>}
                </Toolbar>
            </AppBar>






        </div >
    )
}

export default NavBar;
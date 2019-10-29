import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const SignedInLinks = ({ setIsLoggedIn }) => {

    const handleLogout = (e) => {

        axios
            .post("/api/Logout")
            .then(function(response) {
                if (response.status === 200) {
                setIsLoggedIn(false);
                }
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        }

    return (
        <ul className="right">
            <li><NavLink to='/inventory'>Inventory</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
            <li><NavLink to='/login' onClick={handleLogout}>Logout</NavLink></li>
            {/*<li><NavLink to='/' className='btn btn-floating black lighten-1'>BL</NavLink></li>*/}
        </ul>
    )
}

export default SignedInLinks
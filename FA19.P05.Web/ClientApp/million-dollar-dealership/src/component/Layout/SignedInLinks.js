import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>About</NavLink></li>
            <li><NavLink to='/'>Inventory</NavLink></li>
            <li><NavLink to='/'>Contact</NavLink></li>
<<<<<<< HEAD:FA19.P05.Web/ClientApp/million-dollar-dealership/src/SignedInLinks.js
            <li><NavLink to='/Authentication'>Authentication</NavLink></li>
            <li><NavLink to='/Customer'>SignUp</NavLink></li>
=======
            <li><NavLink to='/'>Sign Out</NavLink></li>
>>>>>>> 002dfefe22fd7cfcb9b3603dc5235d8975c6a4c5:FA19.P05.Web/ClientApp/million-dollar-dealership/src/component/Layout/SignedInLinks.js
            <li><NavLink to='/' className='btn btn-floating black lighten-1'>BL</NavLink></li>
        </ul>
    )
};

export default SignedInLinks
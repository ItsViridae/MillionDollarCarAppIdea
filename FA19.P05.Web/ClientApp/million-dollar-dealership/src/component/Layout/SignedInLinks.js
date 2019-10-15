import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>About</NavLink></li>
            <li><NavLink to='/'>Inventory</NavLink></li>
            <li><NavLink to='/'>Contact</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/signup'>SignUp</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating black lighten-1'>BL</NavLink></li>
        </ul>
    )
};

export default SignedInLinks
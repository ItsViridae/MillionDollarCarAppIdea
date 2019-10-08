import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>About</NavLink></li>
            <li><NavLink to='/'>Inventory</NavLink></li>
            <li><NavLink to='/'>Contact</NavLink></li>
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
        </ul>
    )
};

export default SignedOutLinks
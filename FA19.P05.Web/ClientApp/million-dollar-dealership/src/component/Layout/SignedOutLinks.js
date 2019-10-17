import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><Link to='/'>About</Link></li>
            <li><Link to='/inventory'>Inventory</Link></li>
            <li><Link to='/'>Contact</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
    )
};

export default SignedOutLinks
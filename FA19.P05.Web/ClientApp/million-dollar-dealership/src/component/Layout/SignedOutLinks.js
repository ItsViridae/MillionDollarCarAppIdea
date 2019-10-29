import React from 'react'
import { Link } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/upload'>Upload</Link></li>
        </ul>
    )
};

export default SignedOutLinks
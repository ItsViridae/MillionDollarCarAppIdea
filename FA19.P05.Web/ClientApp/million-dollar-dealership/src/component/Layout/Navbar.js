import React from 'react'
import { Link } from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks'

const Navbar = ({ isLoggedIn }) => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className="brand-logo left">Cars4U</Link>
                {isLoggedIn ? <SignedInLinks/> : <SignedOutLinks/>}           
            </div>
        </nav>
    )
};

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <Link to='/' className="brand-logo left">Cars4U</Link>
                {/* Attempting to create state change of navbar upon userLogin
                    {(Login.customerLogin !== '') ? (*/}
                    <SignedOutLinks />
                {/*}) : (
                    <SignedInLinks />
                )}*/}
            </div>
        </nav>
    )
};

export default Navbar
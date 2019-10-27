import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/upload'>Upload</NavLink></li>
            <li><NavLink to='/inventory'>Inventory</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
            <li><NavLink to='/login'>Logout</NavLink></li>
            {/*<li><NavLink to='/' className='btn btn-floating black lighten-1'>BL</NavLink></li>*/}
        </ul>
    )
}

export default SignedInLinks
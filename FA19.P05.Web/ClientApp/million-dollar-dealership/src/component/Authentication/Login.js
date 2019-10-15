import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [customerLogin, setCustomerLogin] = useState([
        { username: '', password: ''}
    ]);
    
    const handleChange = (event) => {
        setCustomerLogin({...customerLogin, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/Authentication', customerLogin)
            .then(function (response) {
                setCustomerLogin(response.data)
                console.log(response)
                return <Redirect to='/App'/>
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className='white'>
                <h5 className="grey-text.text-darken-3">Login</h5>
                <div className="input-field center">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handleChange}/>
                </div>
                <div className="input-field"> 
                    <button className="btn blue darken-3" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [customerSignUp, setCustomerSignUp] = useState([
        { email: '', password: '', name: '', username:''}
    ]);
    
    const handleChange = (event) => {
        setCustomerSignUp({...customerSignUp, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://localhost:44356/api/Customer/SignUp', customerSignUp)
            .then(function (response) {
            console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <div className="container">
            <form className='white' onSubmit={handleSubmit}>
                <h5 className="grey-text.text-darken-3">Sign Up With Email</h5>
                <div className="input-field center" >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={handleChange} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={handleChange}/>
                </div>
                <div className="input-field center" >
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={handleChange} required/>
                </div>
                <div className="input-field"> 
                    <button className="btn blue darken-3">Sign Up</button>
                </div>
            </form>
        </div>
    );
}
export default Signup
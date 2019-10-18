import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'reactstrap'

const Signup = () => {
    const [customerSignUp, setCustomerSignUp] = useState([
        { email: '', password: '', name: '', username:''}
    ]);
    
    const handleChange = (event) => {
        setCustomerSignUp({...customerSignUp, [event.target.name]: event.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/Customer', customerSignUp)
            .then(function (response) {
                setCustomerSignUp(response.data)
            console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            });
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
                    <Button className='btn' color='info' type='submit' >Sign Up</Button>
                </div>
            </form>
        </div>
    );
}
export default Signup
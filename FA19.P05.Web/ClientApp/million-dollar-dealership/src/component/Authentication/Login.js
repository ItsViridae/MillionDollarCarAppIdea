import axios from "axios";
import React, { useState } from 'react'
import { Button } from 'reactstrap'

const Login = ({isLoggedIn, setIsLoggedIn}) => {

  const [customerLogin, setCustomerLogin] = useState(null);

  const handleChange = event => {
    setCustomerLogin({...customerLogin, [event.target.name]: event.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(customerLogin)

    axios
      .post("/api/Authentication", customerLogin)
      .then(function(response) {
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
        setCustomerLogin(response.data);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text.text-darken-3">Login</h5>
        <div className="input-field center">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div className="input-field center">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <Button className="btn" color='info' type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;

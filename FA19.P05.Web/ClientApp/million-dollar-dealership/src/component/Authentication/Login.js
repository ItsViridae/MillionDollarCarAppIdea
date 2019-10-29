import axios from 'axios'
import React, { useState } from 'react'


const Login = ({ isLoggedIn, setIsLoggedIn }) => {

  const [adminLogin, setAdminLogin] = useState(null);

  const handleChange = event => {
    setAdminLogin({...adminLogin, [event.target.name]: event.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(adminLogin)

    axios
      .post("/api/Authentication", adminLogin)
      .then(function(response) {
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
        setAdminLogin(response.data);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <form method='get' onSubmit={handleSubmit}>
        <h5 className="center">Cars4U Administration</h5>
        <div className="input-field">
          <input type="text" name="username" className="validate" required onChange={handleChange} />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-field">
        <input type="password" name="password" className="validate" required onChange={handleChange} />
          <label htmlFor="password">Password</label>
        </div>
        <div className="input-field center">
          <button className='btn' type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

import React, { Component } from 'react'
import axios from 'axios'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
    handleChange = (e) => {
        this.setState({           
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }
    componentDidMount(){
        axios.post('http://localhost:44356/api/Authentication/Login', this.state)
        .then((response) => {
            this.setState(response.data)           
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render () {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text.text-darken-3">Login</h5>
                    <div className="input-field center" >
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field"> 
                        <button className="btn blue lighten-1">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
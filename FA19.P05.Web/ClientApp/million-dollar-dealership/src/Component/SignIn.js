import React, {Component} from 'react'
import ApiService from '../apiService/apiService'
import API_ENDPOINTS from './../endpoints/endpoints'

export default class Signup extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            let response = await ApiService.post(API_ENDPOINTS.postAuthentication, this.state)
            console.log(response)
            if (response.status === 200){
                //this.props.history.push("/Home") //history comes with withRouter

                const { history } = this.props
                history.push("/Home")
            }
        } catch (e) {
            console.log(e)
        }
    }
    
    render () {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text.text-darken-3">Sign Up With Email</h5>
                    <div className="input-field center" >
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="firstName">First Name</label>
                       <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="lastName">Last Name</label>
                       <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field"> 
                        <button className="btn blue lighten-1" >Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}
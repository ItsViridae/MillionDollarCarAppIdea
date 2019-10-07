import React, {Component} from 'react'
import ApiService from '../apiService/apiService'
import API_ENDPOINTS from './../endpoints/endpoints'


export default class CreateCustomer extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            email: '',
            name: ''
        }
    }
    
    updateLoginFormFields = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        try {
            let response = await ApiService.post(API_ENDPOINTS.postCustomer, this.state)
            console.log(response)
            // if (response.status === 200){
            //     //this.props.history.push("/Home") //history comes with withRouter

            //     const { history } = this.props
            //     history.push("/Home")
            // }
        } catch (e) {
            console.log(e)
        }
    }


    render () {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className="grey-text.text-darken-3">Create Your Account</h5>
                    <div className="input-field center" >
                       <label htmlFor="username">Username</label>
                       <input type="text" id="username" onChange={this.updateLoginFormFields}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={this.updateLoginFormFields}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" onChange={this.updateLoginFormFields}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="name">Name</label>
                       <input type="text" id="name" onChange={this.updateLoginFormFields}/>
                    </div>
                    
                    <div className="input-field"> 
                        <button className="btn blue lighten-1" >Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
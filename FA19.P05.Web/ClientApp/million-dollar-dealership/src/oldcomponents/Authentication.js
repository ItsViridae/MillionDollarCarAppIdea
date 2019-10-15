import React, {Component} from 'react'
import ApiService from './apiService/apiService'
import API_ENDPOINTS from './endpoints/endpoints'


export default class Authentication extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
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
                    <h5 className="grey-text.text-darken-3">Authentication</h5>
                    <div className="input-field center" >
                       <label htmlFor="email">Username</label>
                       <input id="username" onChange={this.updateLoginFormFields}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={this.updateLoginFormFields}/>
                    </div>
                    
                    <div className="input-field"> 
                        <button className="btn blue lighten-1" >Authenticate Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
<<<<<<< HEAD
import React, { Component } from 'react'
import { BrowserRouter as Route, Switch  } from 'react-router-dom'
import { withRouter } from "react-router"
import Navbar from "./Navbar"
import CreateCustomer from "./Component/CreateUser"
import Authentication from './Component/Authentication'

class App extends Component{
    render(){
        return(
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/Authentication">
                        <Authentication />
                    </Route>
                    <Route path="/Customer">
                        <CreateCustomer />
                    </Route>
                </Switch>
            </div>
        );
    }
=======
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './component/Layout/Navbar'
import Signup from './component/Authentication/Signup'
import Login from './component/Authentication/Login'

function App() {
    return(
        <div className="App">
            <Navbar />
            <Switch>
                <Route path='/login' component={Login}/>                    
                <Route path='/signup'component={Signup}/>
            </Switch>
        </div>
    );
>>>>>>> 002dfefe22fd7cfcb9b3603dc5235d8975c6a4c5
}
export default withRouter(App);
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
}
export default withRouter(App);
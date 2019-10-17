import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Component/Layout/Navbar'
import Signup from './Component/Authentication/Signup'
import Login from './Component/Authentication/Login'
import CarQuery from './testCarApi/CarQuery'

function App() {
    return(
        <div className="App">
            <Navbar />
            <Switch>
                <Route path='/login' component={Login}/>                    
                <Route path='/signup' component={Signup}/>
                <Route path='/inventory' component={CarQuery}/>
            </Switch>
        </div>
    );
}

export default App
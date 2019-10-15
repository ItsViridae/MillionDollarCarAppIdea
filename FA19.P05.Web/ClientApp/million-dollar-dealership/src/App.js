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
}

export default App
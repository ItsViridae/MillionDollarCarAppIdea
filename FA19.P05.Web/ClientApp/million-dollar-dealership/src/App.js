import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Signup from './Authentication/Signup'

function App() {
    return(
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Route path='/login'/>
                    <Signup />
                <Route path='/signup'/>
            </div>
        </BrowserRouter>
    );
}


export default App;
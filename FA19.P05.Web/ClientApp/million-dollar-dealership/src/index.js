import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

<<<<<<< HEAD
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
=======
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')        
);
>>>>>>> 002dfefe22fd7cfcb9b3603dc5235d8975c6a4c5

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

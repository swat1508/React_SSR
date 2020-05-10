import React from 'react';
import ReactDOM from 'react-dom';
//import Home from './components/Home';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';


//ReactDOM.hydrate(<Home/>,document.querySelector('#root'));
ReactDOM.hydrate(
    <BrowserRouter>
        <Routes/> 
    </BrowserRouter>
    ,document.querySelector('#root')
);
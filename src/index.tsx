import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from "./Redux/store";
import { BrowserRouter } from 'react-router-dom';
import {loadState, saveState} from './ServerConnection/localStorage'
import {rootReducer} from "./Redux/bundle";
import {createStore} from "redux";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

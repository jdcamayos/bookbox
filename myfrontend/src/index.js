import React from 'react'
import ReactDOM from 'react-dom'

import App from 'routes/App.jsx'
import reportWebVitals from 'reportWebVitals'

import 'styles/style.css'
import 'animate.css/animate.min.css'

import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import reducer from 'reducers'
import initialState from 'initialState'
require('dotenv').config()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancers())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App'
import store from './store'

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <LoadingBar />
        <App />
    </Provider>
</BrowserRouter>, document.getElementById('root'))
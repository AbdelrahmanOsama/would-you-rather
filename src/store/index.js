import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));

export default store

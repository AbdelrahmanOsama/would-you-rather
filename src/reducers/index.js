import {users} from './users'
import {authedUser} from './authedUser'
import {questions} from './questions'
import {combineReducers} from 'redux'
import { loadingBarReducer} from 'react-redux-loading'

const rootReducer = combineReducers({
    authedUser, 
    users, 
    questions, 
    loadingBar:loadingBarReducer
})

export default rootReducer

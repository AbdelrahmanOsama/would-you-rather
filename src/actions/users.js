import { Fetch_Users,Login_Users,UPDATE_USER_ANSWER } from '../constants/actionTypes'
import { showLoading, hideLoading } from 'react-redux-loading'
import { _getUsers } from '../utils/_DATA'

export const fetchUsers = users => {
    return {
        type: Fetch_Users,
        users
    }
}

export const loginUsers = user => {
    return {
        type: Login_Users,
        user
    }
}

export const updateUserAnswer = quest => {
    return {
        type: UPDATE_USER_ANSWER,
        quest
    }
}

export const handleFetchUsers = () => {
    return async (dispatch) => {
        dispatch(showLoading())
        try {
            const users = await _getUsers()
            dispatch(fetchUsers(users))
            dispatch(hideLoading())
        } catch (error) {
            dispatch(hideLoading())
        }
    }
}
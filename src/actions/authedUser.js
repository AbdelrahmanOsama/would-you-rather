import { SET_AUTHED_USER,LOG_OUT } from '../constants/actionTypes'

export const setAuthedUser = (user) => {
    return {
        type: SET_AUTHED_USER,
        user
    }
}

const loggedOut = () => {
    return {
        type: LOG_OUT,
    }
}

export const handleLogOut = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(loggedOut())
    }
}


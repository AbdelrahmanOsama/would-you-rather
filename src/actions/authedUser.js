import { SET_AUTHED_USER,LOG_OUT } from '../constants/actionTypes'

export const setAuthedUser = (user) => {
    console.log(user)
    return {
        type: SET_AUTHED_USER,
        user
    }
}

export const loggedOut = () => {
    return {
        type: LOG_OUT,
    }
}
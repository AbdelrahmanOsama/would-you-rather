import {SET_AUTHED_USER,LOG_OUT} from '../constants/actionTypes'

const initialState = {
    isAuthUser: !!JSON.parse(localStorage.getItem("user")),
    user:((!!JSON.parse(localStorage.getItem("user"))) ? JSON.parse(localStorage.getItem("user")).choosedUser : '')
}

export const authedUser = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHED_USER: 
        return {
            ...state,
            isAuthUser:true,
            id:action.user.userVal,
            user:action.user.choosedUser
        }
        case LOG_OUT: 
        localStorage.removeItem("user");
        return {
            ...state,
            isAuthUser:false,
            id:'',
            user:{}
        }
        default:return state;
    }
}


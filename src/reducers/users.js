import { Fetch_Users,Login_Users,UPDATE_USER_ANSWER } from '../constants/actionTypes'

const initialState = {}

export const users = (state = initialState,action) => {
    switch (action.type) {
        case Fetch_Users:
            return {
                ...state,
                ...action.users
        }
        case Login_Users: 
            return {
                ...state,
                ...action.users
        }
        case UPDATE_USER_ANSWER: 
            return {
                ...state,
                [action.quest.authedUser]:{
                    ...state[action.quest.authedUser],
                    answers: {
                        ...state[action.quest.authedUser].answers,
                        [action.quest.qid]: action.quest.answer
                    }
                }
        }
        default:return state;
    }
}


import { FETCH_QIESTIONS,SAVE_QUESTION,UPDATE_QUESTION_ANSWER } from '../constants/actionTypes'

const initialState = {}

export const questions = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_QIESTIONS:
            return {
                ...state,
                ...action.questions
        }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
        }
        case UPDATE_QUESTION_ANSWER:
            return {
                ...state,
                [action.quest.qid]:{
                    ...state[action.quest.qid],
                    [action.quest.answer]: {
                        ...state[action.quest.qid][action.quest.answer],
                        votes: state[action.quest.qid][action.quest.answer].votes.concat([action.quest.authedUser])
                    }
                }
        }
        default:return state;
    }
}


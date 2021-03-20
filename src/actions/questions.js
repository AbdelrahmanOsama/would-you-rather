import { _getQuestions } from '../utils/_DATA'
import { FETCH_QIESTIONS,SAVE_QUESTION,UPDATE_QUESTION_ANSWER } from '../constants/actionTypes'
import { showLoading, hideLoading } from 'react-redux-loading'


export const recieveQuestions = questions => {
    return {
        type: FETCH_QIESTIONS,
        questions
    }
}

export const saveQuestion = question => {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export const updateQuestionAnswer = quest => {
    return {
        type: UPDATE_QUESTION_ANSWER,
        quest
    }
}

import { _saveQuestion,_saveQuestionAnswer,getInitialData } from '../utils/_DATA'
import { fetchUsers,handleFetchUsers,updateUserAnswer } from './users'
import { recieveQuestions,saveQuestion,updateQuestionAnswer } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'


export const handleFetchInitial = () => {
    return async (dispatch) => {
        try {
            dispatch(showLoading())
            const data = await getInitialData()
            dispatch(fetchUsers(data.users))
            dispatch(recieveQuestions(data.questions))
            dispatch(hideLoading())
        } catch (error) {
            dispatch(hideLoading())
        }
        
      }
}

export const handleAddQuestions = ( optionOneText, optionTwoText ) => {
    return async (dispatch,getState) => {
        const { authedUser } =  getState();
        try {
            dispatch(showLoading())
            const question = await _saveQuestion({
                optionOneText,
                optionTwoText,
                author: authedUser.user[0].id
            })
            dispatch(handleFetchUsers())
            dispatch(saveQuestion(question))
            dispatch(hideLoading())
        } catch (error) {
            dispatch(hideLoading())
        }
        
      }
}

export const handleSaveAnswer = ( qid, answer ) => {
    return async (dispatch,getState) => {
        const { authedUser } =  getState();
        try {
            dispatch(showLoading())
            await _saveQuestionAnswer({
                qid,
                answer,
                authedUser: authedUser.user[0].id
            })
            dispatch(updateUserAnswer({qid, answer,authedUser: authedUser.user[0].id}))
            dispatch(updateQuestionAnswer({qid, answer,authedUser: authedUser.user[0].id}))
            dispatch(hideLoading())
        } catch (error) {
            dispatch(hideLoading())
        }
        
      }
}
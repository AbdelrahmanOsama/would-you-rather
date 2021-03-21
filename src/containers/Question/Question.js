import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory,Redirect } from 'react-router-dom'
import AnswerQuestion from '../AnswerQuestion/AnswerQuestion'
import QuestionView from '../QuestionView/QuestionView'


export default function Questions(props) {
    const history = useHistory()
    const id = (history.location.pathname).substr(11)
    const userID = useSelector((state) => state.authedUser &&  state.authedUser.user.length > 0 && state.authedUser.user[0].id)
    const questions = useSelector((state) => state.questions &&  Object.values(state.questions).length > 0 && (Object.values(state.questions)))
    const UserQuestions = questions && questions.length > 0 && questions.filter(question => question.id === id)[0]
    const flage = (UserQuestions && (!UserQuestions.optionOne.votes.includes(userID) && !UserQuestions.optionTwo.votes.includes(userID)))
    console.log(flage)
    if (flage === undefined) {
        return <Redirect to = "/error" / >
    }
    return (
        <div>
            {
                flage ? <AnswerQuestion /> : <QuestionView />
            }
        </div>
    )
}

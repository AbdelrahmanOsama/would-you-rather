import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { handleSaveAnswer } from '../../actions/shared'
import { Row,Container,Col,Button } from 'react-bootstrap';
import AnswerQuestionStyle from './AnswerQuestion.module.css'
import { Redirect } from 'react-router-dom'


export default function Card(props) {
    const dispatch = useDispatch();
    const history = useHistory()
    console.log(history)
    const id = (history.location.pathname).substr(11)
    const users = useSelector((state) => state.users &&  Object.values(state.users).length > 0 && (Object.values(state.users)))
    const questions = useSelector((state) => state.questions &&  Object.values(state.questions).length > 0 && (Object.values(state.questions)))
    const UserQuestions = questions && questions.length > 0 && questions.filter(question => question.id === id)[0]
    const cardUSer = users && users.length > 0 && users.filter(user => user.id === UserQuestions.author)[0]
    const [answer, setAnswer] = useState({val:'',toQuestion:false})
    const onChangeValue = (e) => {
        e.preventDefault()
        setAnswer({...answer,val:e.target.value})
    }
    const saveAnswer = () => {
        dispatch(handleSaveAnswer(UserQuestions.id,answer.val))
        setAnswer({...answer,val:"",toQuestion:true})
    }
    if (answer.toQuestion === true) {
        return <Redirect to={`/questions/${UserQuestions.id}`} />
    }
    
    return (
        <div style={{textAlign: '-webkit-center'}}>
            <div className={AnswerQuestionStyle.cardContainer}>
                <div className={AnswerQuestionStyle.cardStyle}>
                    <div className={AnswerQuestionStyle.card}>
                        <h6 className={AnswerQuestionStyle.cardHeader}>{`${cardUSer.name} asks:`}</h6>
                        <Container>
                            <Row>
                                <Col xs={12} md={4} className={AnswerQuestionStyle.cardBord}>
                                    <div>
                                        <img className={AnswerQuestionStyle.avatarCard} src={cardUSer.avatarURL} alt=""/>
                                    </div>
                                </Col>
                                <Col xs={12} md={8}>
                                    <div style={{textAlign:'left',marginTop:'10px'}}>
                                        <h4 style={{fontWeight:'600'}}>Would you rather </h4>
                                        <div className={AnswerQuestionStyle.radioSty} onChange={onChangeValue}>
                                            <div>
                                                <input type="radio" value="optionOne" name="quest" style={{marginRight:'5px'}} /> {UserQuestions.optionOne.text}
                                            </div>
                                            <div>
                                                <input type="radio" value="optionTwo" name="quest" style={{marginRight:'5px'}}/> {UserQuestions.optionTwo.text}
                                            </div>
                                        </div>
                                        <Button className={AnswerQuestionStyle.pollStyle} onClick={saveAnswer}> Submit </Button>
                                    </div>
                                </Col>
                            </Row>
                        </ Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

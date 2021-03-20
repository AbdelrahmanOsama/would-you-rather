import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Row,Container,Col,ProgressBar } from 'react-bootstrap';
import QuestionStyle from './QuestionView.module.css'

export default function QuestionView(props) {
    const loggedUser = useSelector((state) => state.authedUser && state.authedUser.user[0].id )
    const questions = useSelector((state) => state.questions &&  Object.values(state.questions).length > 0 && (Object.values(state.questions)))
    const UserQuestions = questions && questions.length > 0 && questions.filter(question => question.id === props.match.params.question_id)[0]
    const user = useSelector((state) => state.users &&  Object.values(state.users).length > 0 && (Object.values(state.users)))
    if (!UserQuestions) {
        return <Redirect to="/error"/>
    }
    const cardUSer = user && user.length > 0 && user.filter(userInfo => userInfo.id === loggedUser)[0]
    console.log(cardUSer)

    const opt1 =  (UserQuestions.optionOne.votes.length / (UserQuestions.optionOne.votes.length + UserQuestions.optionTwo.votes.length) * 100).toFixed(0);
    const vote1 = `${UserQuestions.optionOne.votes.length} out of ${UserQuestions.optionOne.votes.length + UserQuestions.optionTwo.votes.length} votes`;

    const opt2 = (UserQuestions.optionTwo.votes.length / (UserQuestions.optionOne.votes.length + UserQuestions.optionTwo.votes.length) * 100).toFixed(0);
    const vote2 = `${UserQuestions.optionTwo.votes.length} out of ${UserQuestions.optionOne.votes.length + UserQuestions.optionTwo.votes.length} votes`;
    const votedSec ={ backgroundColor:'#b3e8b3',border:'2px solid #63c163'};
   
    
    return (
        <div  style={{textAlign:'-webkit-center'}}>
            <div className={QuestionStyle.cardContainer}>
                <div className={QuestionStyle.cardStyle}>
                    <div className={QuestionStyle.card}>
                        <h6 className={QuestionStyle.cardHeader}>{`${cardUSer.name} asks:`}</h6>
                        <Container>
                            <Row>
                                <Col xs={12} md={4} className={QuestionStyle.cardBord}>
                                    <div>
                                        <img className={QuestionStyle.avatarCard} src={cardUSer.avatarURL} alt=""/>
                                    </div>
                                </Col>
                                <Col xs={12} md={8}>
                                    <div className={QuestionStyle.optBody} style={UserQuestions.optionOne.votes.includes(loggedUser) ? votedSec : {} }>
                                        <p style={{fontWeight:'600',fontSize:'13px',marginBottom:'5px'}}>{`Would you rather ${UserQuestions.optionOne.text}`}</p>
                                        <ProgressBar now={opt1} label={`${opt1}%`} />
                                        <p style={{fontWeight:'600',fontSize:'13px',margin:'5px 0px',textAlign:'-webkit-center'}}>{vote1}</p>
                                        
                                       { UserQuestions.optionOne.votes.includes(loggedUser) ?  <span className={QuestionStyle.vote}>Your Vote</span> : '' }
                                        

                                    </div>
                                    <div className={QuestionStyle.optBody} style={UserQuestions.optionTwo.votes.includes(loggedUser) ? votedSec : {}}>
                                        <p style={{fontWeight:'600',fontSize:'13px',marginBottom:'5px'}}>{`Would you rather ${UserQuestions.optionTwo.text}`}</p>
                                        <ProgressBar now={opt2} label={`${opt2}%`} />
                                        <p style={{fontWeight:'600',fontSize:'13px',margin:'5px 0px',textAlign:'-webkit-center'}}>{vote2}</p>

                                       { UserQuestions.optionTwo.votes.includes(loggedUser) ?  <span className={QuestionStyle.vote}>Your Vote</span>  : '' }
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

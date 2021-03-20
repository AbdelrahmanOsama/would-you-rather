import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { handleSaveAnswer } from '../../actions/shared'
import { Row,Container,Col,Button } from 'react-bootstrap';
import QuestionStyle from './Question.module.css'
import { Redirect } from 'react-router-dom'


export default function Card(props) {
    const dispatch = useDispatch();
    const data = props.location.state.detail;
    const users = useSelector((state) => state.users &&  Object.values(state.users).length > 0 && (Object.values(state.users)))
    const cardUSer = users && users.length > 0 && users.filter(user => user.id === data.author)[0]
    const [answer, setAnswer] = useState({val:'',toQuestion:false})
    const onChangeValue = (e) => {
        e.preventDefault()
        setAnswer({...answer,val:e.target.value})
    }
    const saveAnswer = () => {
        dispatch(handleSaveAnswer(data.id,answer.val))
        setAnswer({...answer,val:"",toQuestion:true})
    }
    if (answer.toQuestion === true) {
        return <Redirect to={`/questions/${data.id}`} />
    }
    
    return (
        <div style={{textAlign: '-webkit-center'}}>
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
                                    <div style={{textAlign:'left',marginTop:'10px'}}>
                                        <h4 style={{fontWeight:'600'}}>Would you rather </h4>
                                        <div className={QuestionStyle.radioSty} onChange={onChangeValue}>
                                            <div>
                                                <input type="radio" value="optionOne" name="quest" style={{marginRight:'5px'}} /> {data.optionOne.text}
                                            </div>
                                            <div>
                                                <input type="radio" value="optionTwo" name="quest" style={{marginRight:'5px'}}/> {data.optionTwo.text}
                                            </div>
                                        </div>
                                        <Button className={QuestionStyle.pollStyle} onClick={saveAnswer}> Submit </Button>
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

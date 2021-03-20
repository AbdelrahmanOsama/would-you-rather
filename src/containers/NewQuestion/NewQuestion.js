import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container,Button } from 'react-bootstrap';
import NewQuestionStyle from './NewQuestion.module.css'
import { handleAddQuestions } from '../../actions/shared'
import { Redirect } from 'react-router-dom'


export default function NewQuestion() {
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState({q1:'',q2:'',toHome:false})
    
    const questionOneChanged = e => {
        e.preventDefault();
        setQuestions({...questions,q1:e.target.value});
    }
    
    const questionTwoChanged = e => {
        e.preventDefault();
        setQuestions({...questions,q2:e.target.value});
    }
    
    const saveQuest = () => {
        dispatch(handleAddQuestions(questions.q1,questions.q2))
        setQuestions({q1:'',q2:'',toHome:true});
    }
    if (questions.toHome === true) {
        return <Redirect to='/' />
      }
    return (
        <div style={{textAlign:'-webkit-center'}}>
            <div className={NewQuestionStyle.cardContainer}>
                <div className={NewQuestionStyle.cardStyle}>
                    <div className={NewQuestionStyle.card}>
                        <h3 className="card-header"> Create New Question </h3>
                        <Container style={{textAlign:'left'}}>
                            <p style={{margin: '10px',fontWeight:'500',fontSize: '13px'}}> Complete the question:</p>   
                            <h6 style={{fontWeight:'600',margin: '10px'}}>Would you rather </h6>
                            <input type="text" className={NewQuestionStyle.textMuted} value={questions.q1} onChange={questionOneChanged} placeholder="Enter Option One Text Here" />
                            <div className={NewQuestionStyle.separator}>OR</div>
                            <input type="text" className={NewQuestionStyle.textMuted} value={questions.q2} onChange={questionTwoChanged} placeholder="Enter Option Two Text Here" />
                            <Button className={NewQuestionStyle.pollStyle} onClick={saveQuest}> Submit </Button>
                        </ Container>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

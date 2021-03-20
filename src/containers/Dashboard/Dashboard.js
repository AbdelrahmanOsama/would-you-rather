import React from 'react'
import { useSelector } from 'react-redux'
import { Tabs,Tab } from 'react-bootstrap';
import Card from '../Card/Card'

export default function Dashboard(props) {
    const questions = useSelector((state) => state.questions &&  Object.values(state.questions).length > 0 && (Object.values(state.questions)).sort((a,b) => b.timestamp - a.timestamp))
    const unanswred = props.user && questions.length > 0 && questions.filter(quest => !quest.optionOne.votes.includes(props.user.id) && !quest.optionTwo.votes.includes(props.user.id))
    const answered = props.user && questions.length > 0 && questions.filter(quest => quest.optionOne.votes.includes(props.user.id) || quest.optionTwo.votes.includes(props.user.id))
    return (
        <div>
            <Tabs defaultActiveKey="Unanswered_Questions" id="uncontrolled-tab-example">
                <Tab eventKey="Unanswered_Questions" title="Unanswered Questions"  style={{textAlign: '-webkit-center'}}>
                    <div style={{textAlign: '-webkit-center'}}>
                        {
                            unanswred && unanswred.length > 0  &&
                            unanswred.map(un =>  <Card data={un} type={'unanswered'} key={un.id} />) 
                        }
                    </div>

                </Tab>
                <Tab eventKey="Answered_Questions" title="Answered Questions">
                    <div style={{textAlign: '-webkit-center'}}>
                        {
                            answered && answered.length > 0  &&
                            answered.map(an => <Card data={an} type={'answered'} key={an.id} />) 
                        }
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

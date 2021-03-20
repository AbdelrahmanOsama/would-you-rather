import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Row,Container,Col,Button } from 'react-bootstrap';
import CardStyle from './Card.module.css'

export default function Card(props) {
    const { data,type } = props;
    const history = useHistory();
    const users = useSelector((state) => state.users &&  Object.values(state.users).length > 0 && (Object.values(state.users)))
    const cardUSer = users && users.length > 0 && users.filter(user => user.id === data.author)[0]
    const goToQuestion = () => {
        if (type === 'unanswered') {
            history.push({
                pathname: '/questions',
                search: '?query=abc',
                state: { detail: data }
            })
        }else{
            history.push({
                pathname: `/questions/${data.id}`,
                search: '?query=abc',
            })
        }
    }
    return (

        <div className={CardStyle.cardContainer}>
            <div className={CardStyle.cardStyle}>
                <div className={CardStyle.card}>
                    <h6 className={CardStyle.cardHeader}>{`${cardUSer.name} asks:`}</h6>
                    <Container>
                        <Row>
                            <Col xs={12} md={4} className={CardStyle.cardBord}>
                                <div>
                                    <img className={CardStyle.avatarCard} src={cardUSer.avatarURL} alt=""/>
                                </div>
                            </Col>
                            <Col xs={12} md={8}>
                                <div style={{textAlign:'left',marginTop:'10px'}}>
                                    <h6 style={{fontWeight:'600'}}>Would you rather </h6>
                                    <p className={CardStyle.questionDis} >{`...${data.optionOne.text}`}</p>
                                    <Button className={CardStyle.pollStyle} onClick={goToQuestion}> View Poll </Button>
                                </div>
                            </Col>
                        </Row>
                    </ Container>
                </div>
            </div>
        </div>
    )
}

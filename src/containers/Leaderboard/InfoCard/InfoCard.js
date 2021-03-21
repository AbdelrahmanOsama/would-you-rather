import React from 'react'
import { Row,Container,Col } from 'react-bootstrap';
import InfoCardStyle from './InfoCard.module.css'

export default function Card(props) {
    const { data } = props;
    const answered = Object.keys(data.answers).length;
    const created = data.questions.length;
    const Score = answered + created;
    return (
        <div style={{textAlign:'-webkit-center'}}>
            <div className={InfoCardStyle.cardContainer}>
                <div className={InfoCardStyle.cardStyle}>
                    <div className={InfoCardStyle.card}>
                        <h6 className={InfoCardStyle.cardHeader}>{`${data.name}`}</h6>
                        <Container>
                            <Row>
                                <Col xs={12} md={3} className={InfoCardStyle.cardBord}>
                                    <div>
                                        <img className={InfoCardStyle.avatarCard} src={data.avatarURL} alt=""/>
                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div style={{textAlign:'left',marginTop:'10px'}}>
                                        <span className={InfoCardStyle.bodystyle}>Answered Questions</span>
                                        <span className={InfoCardStyle.bodystyle} style={{float: 'right'}}>{answered}</span>
                                    </div>
                                    <hr/>
                                    <div style={{textAlign:'left',marginTop:'10px'}}>
                                        <span className={InfoCardStyle.bodystyle}>Created Questions</span>
                                        <span className={InfoCardStyle.bodystyle} style={{float: 'right'}}>{created}</span>
                                    </div>
                                </Col>
                                <Col xs={12} md={3} style={{paddingLeft: 0}}>
                                    <div className={InfoCardStyle.scoreBody}>
                                        <p className={InfoCardStyle.score}>Score</p>
                                        <span className={InfoCardStyle.scoreDis}>{Score}</span>
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

import React from 'react'
import NavStyle from './Nav.module.css'
import { useDispatch } from 'react-redux'
import { NavLink,useHistory } from 'react-router-dom'
import { Container,Col,Row } from 'react-bootstrap';
import { handleLogOut } from '../../actions/authedUser'


export default function Nav (props) {
    const { userID } = props;
    const history = useHistory();
    const dispatch = useDispatch();
    const userAvatar = userID && userID.avatarURL
    const userName = userID && userID.name
    const logOut = () =>{
        dispatch(handleLogOut());
        return history.push('/login')
    }
  return (
    <>
        <div>
            <nav className={NavStyle.nav}>
                <Container fluid>
                    <Row>
                        <Col xs={12} md={6} style={{padding: '0 30px'}}>
                            <ul>
                                <li>
                                <NavLink 
                                to='/' 
                                exact 
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "green"
                                }}>
                                Home
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                    to='/add' 
                                    activeStyle={{
                                    fontWeight: "bold",
                                    color: "green"
                                    }}>
                                    New Question
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                    to='/leaderboard' 
                                    activeStyle={{
                                    fontWeight: "bold",
                                    color: "green"
                                    }}>
                                    Leaderboard
                                    </NavLink>
                                </li>
                            </ul>
                        </Col>
                    <Col xs={12} md={6}>
                    {
                        userID && 
                        <ul style={{float: 'right'}}>
                            <li style={{padding: '0'}}>
                                <span>{`Hello, ${userName}`}</span>
                                <img className="avatar" src={userAvatar} alt=""/>
                            </li>
                            <li className={NavStyle.logout} onClick={logOut}>
                                Logout
                            </li>
                        </ul>
                    }   
                    </Col>
                    </Row>
                </Container>
            </nav>
        </div>
      </>
     
  )
}
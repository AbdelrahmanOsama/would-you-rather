import React, { useEffect,useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { handleFetchUsers } from '../../actions/users'
import { setAuthedUser } from '../../actions/authedUser'
import { Form,Button,Image } from 'react-bootstrap';
import loginImg from '../../assets/images/icons8-login-100.png';
import { useHistory } from 'react-router-dom'
import loginStyle from './login.module.css'


const Login = () => {
    localStorage.removeItem('user')
    const dispatch = useDispatch();
    const history = useHistory();
    const [userVal, setUser] = useState("1")
    const [img, setImg] = useState(loginImg)

    useEffect(() => {
        dispatch(handleFetchUsers())
    }, [dispatch])

    const users = useSelector((state) => state.users &&  Object.values(state.users).length > 0 && (Object.values(state.users)))
    const userChange = e => {
        e.preventDefault();
        setImg(users.filter(user => user.id === e.target.value)[0].avatarURL)
        setUser(e.target.value);
    }
    
    const login = () => {
        const existingUser = users.find(user => user.id === userVal)
        if (existingUser !== undefined) {   
            const choosedUser = users.filter(user => user.id === userVal)     
            dispatch(setAuthedUser({userVal,choosedUser}))
            localStorage.setItem("user",JSON.stringify({userVal,choosedUser}));
            return history.push('/');
        }
    }

    return (
        <div className={loginStyle.centerPage}>
            <div className={loginStyle.loginContainer}>
                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <div className={loginStyle.header}>
                            <Form.Label style={{fontWeight: "bold",display:"block"}}>Welcome to the Would You Rather App!</Form.Label>
                            <Form.Label>Please login to to continue</Form.Label>
                        </div>
                       
                       <div className="formControl">
                       <Image src={img} roundedCircle />
                       <h5 className={loginStyle.signin}>Sign In</h5>
                            <Form.Control as="select" className="selectWid" value={userVal} onChange={userChange} custom>
                                <option value='1' disabled>Please Select User</option>
                                {
                                    users && users.length > 0
                                    && users.map((user) => (
                                        <option key={user.id} value={user.id}>
                                            {user.name}
                                        </option>
                                    ))
                                }
                            </Form.Control>
                            <Button variant="success" className="selectWid" onClick={login} disabled={userVal==="1"}>Login</Button>
                       </div>
                        
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default Login